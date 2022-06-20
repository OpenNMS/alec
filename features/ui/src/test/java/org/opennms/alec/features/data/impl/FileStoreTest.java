package org.opennms.alec.features.data.impl;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.opennms.alec.data.FileStore;

@RunWith(JUnit4.class)
public class FileStoreTest {
    public static final String ABSOLUTE_PATH = new File("src/test/resources").getAbsolutePath();
    private FileStore fileStore;

    @Before
    public void setUp() {
        this.fileStore = new FileStore(ABSOLUTE_PATH);
    }

    @Test
    public void getLastVersionTest() throws IOException {
        String key = "test";
        Assert.assertEquals("3", fileStore.getLastVersion(key));
    }

    @Test
    public void getLastVersionOfNewFileTest() throws IOException {
        String key = "newFile";
        Assert.assertEquals("0", fileStore.getLastVersion(key));
    }

    @Test
    public void getVersionsTest() throws IOException {
        String key = "test";
        List<String> expected = Arrays.asList("1", "2", "3");
        Assert.assertEquals(expected, fileStore.getVersions(key));
    }

    @Test
    public void getVersionsOneFileTest() throws IOException {
        String key = "agreement";
        List<String> expected = List.of("4");
        Assert.assertEquals(expected, fileStore.getVersions(key));
    }

    @Test
    public void getEmptyVersionsTest() throws IOException {
        String key = "dumb";
        List<String> expected = Collections.emptyList();
        Assert.assertEquals(expected, fileStore.getVersions(key));
    }

    @Test
    public void writeTest() throws IOException {
        String key = "test";
        fileStore.save(key, "agreement", null);
        Path path = Path.of(ABSOLUTE_PATH, key + "_v4.agr");
        Assert.assertEquals("agreement", Files.readString(path));
        Files.delete(path);
    }

    @Test
    public void writeNewFileTest() throws IOException {
        String key = "dumb";
        fileStore.save(key, "agreement", null);
        Path path = Path.of(ABSOLUTE_PATH, key + "_v1.agr");
        Assert.assertEquals("agreement", Files.readString(path));
        Files.delete(path);
    }

    @Test
    public void readLastVersionTest() {
        String key = "test";
        Assert.assertEquals("test v3", fileStore.retrieve(key, null).get());
    }

    @Test
    public void readTest() {
        String key = "test";
        Assert.assertEquals("test v2", fileStore.retrieve(key, null, "2").get());
    }
}