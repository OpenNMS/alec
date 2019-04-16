## Release Checklist

- [ ] Bump version number from X.Y.Z-SNAPSHOT in `pom.xml` files
  - `mvn versions:set -DnewVersion=1.0.0`
- [ ] Bump version number from X.Y.Z-SNAPSHOT in `docs/antora.yml`
- [ ] Create a version tag with a leading `v` in a format like `vX.Y.Z` in the master branch
- [ ] Trigger release deployment with pushing the version tag to GitHub with `git push --tags`


## For first release

* Update Yum repositories in documentation to use release instead of snapshot artifacts


