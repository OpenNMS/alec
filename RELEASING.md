## Release Checklist

- [ ] Bump version number from X.Y.Z-SNAPSHOT in `pom.xml` files
  - `mvn versions:set -DnewVersion=1.0.0`
- [ ] Bump version number from X.Y.Z-SNAPSHOT in `docs/antora.yml`
- [ ] Create a version tag with a leading `v` in a format like `vX.Y.Z` in the master branch
- [ ] Trigger release deployment with pushing the version tag to GitHub with `git push --tags`

## For first release

* Update Yum repositories in documentation to use release instead of snapshot artifacts

## Doing a Signed Release to Maven Central

```bash
mvn -DautoVersionSubmodules=true -Dgpg.keyname=opennms@opennms.org -Prelease release:clean release:prepare
mvn -DautoVersionSubmodules=true -Darguments=-Dgpg.keyname="opennms@opennms.org" -Dgpg.keyname="opennms@opennms.org" -Prelease install deploy
mvn -DautoVersionSubmodules=true -Darguments=-Dgpg.keyname="opennms@opennms.org" -Dgpg.keyname="opennms@opennms.org" -Prelease release:perform
# note: the stagingRepositoryId comes from the output of the release:perform step
mvn -DautoVersionSubmodules=true -Darguments=-Dgpg.keyname="opennms@opennms.org" -Dgpg.keyname="opennms@opennms.org" -Prelease nexus-staging:release -DstagingRepositoryId=orgopennms-XXXX
```
