package org.opennms.alec.features.data.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.NoSuchElementException;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.data.StoreFile;
import org.opennms.alec.data.StoreFileImpl;

@RunWith(JUnit4.class)
public class StoreFileImplTest {
    public static final String ABSOLUTE_PATH = new File("src/test/resources").getAbsolutePath();
    private StoreFile storeFile;

    @Before
    public void setUp() throws Exception {
        this.storeFile = new StoreFileImpl();
    }

    @Test
    public void getLastVersionTest() throws IOException {
        String filename = "test";
        Assert.assertEquals("3", storeFile.getLastVersion(ABSOLUTE_PATH, filename));
    }

    @Test(expected = NoSuchElementException.class)
    public void getLastVersionOfNewFileTest() throws IOException {
        String filename = "newFile";
        storeFile.getLastVersion(ABSOLUTE_PATH, filename);
    }

    @Test
    public void getVersionsTest() throws IOException {
        String filename = "test";
        List<String> expected = Arrays.asList("1", "2", "3");
        Assert.assertEquals(expected, storeFile.getVersions(ABSOLUTE_PATH, filename));
    }

    @Test
    public void getVersionsOneFileTest() throws IOException {
        String filename = "agreement";
        List<String> expected = Arrays.asList("4");
        Assert.assertEquals(expected, storeFile.getVersions(ABSOLUTE_PATH, filename));
    }

    @Test
    public void getEmptyVersionsTest() throws IOException {
        String filename = "test";
        List<String> expected = Collections.emptyList();
        Assert.assertEquals(expected, storeFile.getVersions("", filename));
    }

    @Test
    public void writeTest() throws IOException {
        String filename = "test";
        storeFile.write(ABSOLUTE_PATH, filename, "agreement");
        Path path = Path.of(ABSOLUTE_PATH, filename + "_v4.agr");
        Assert.assertEquals("agreement", Files.readString(path));
        Files.delete(path);
    }

    @Test
    public void writeNewFileTest() throws IOException {
        String filename = "dumb";
        storeFile.write(ABSOLUTE_PATH, filename, "agreement");
        Path path = Path.of(ABSOLUTE_PATH, filename + "_v1.agr");
        Assert.assertEquals("agreement", Files.readString(path));
        Files.delete(path);
    }

    @Test
    public void readLastVersionTest() throws IOException {
        String filename = "test";
        Assert.assertEquals("test v3", storeFile.read(ABSOLUTE_PATH, filename));
    }

    @Test
    public void readTest() throws IOException {
        String filename = "test";
        Assert.assertEquals("test v2", storeFile.read(ABSOLUTE_PATH, filename, "2"));
    }
}