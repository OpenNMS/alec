## Release Checklist

The following should be done from a release branch i.e. `release-1.x`:

- [ ] Bump version number from X.Y.Z-SNAPSHOT in `pom.xml` files
  - `mvn versions:set -DnewVersion=1.0.0`
- [ ] Bump version number from X.Y.Z-SNAPSHOT in `docs/antora.yml`
- [ ] Create a version tag with a leading `v` in a format like `vX.Y.Z`
- [ ] Trigger release deployment with pushing the version tag to GitHub with `git push --tags`
- [ ] Merge release branch into master

## Prepare for next version

- [ ] Bump version number to X.Y.Z-SNAPSHOT in `pom.xml` files
- [ ] Bump version number to X.Y.Z-SNAPSHOT in `docs/antora.yml`
- [ ] Push the release branch
- [ ] Merge release branch into `develop`
  - `git merge release-1.x  -s ours`

