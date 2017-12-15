#!/bin/sh

setup_git() {
  git config user.email "travis@travis-ci.org"
  git config user.name "Travis CI"
}

commit_website_files() {
  git checkout -b heroku
  git add -f ./client-web/build *.*
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote add origin-pages https://${GITHUB_TOKEN}@github.com/chiptus/peperoncini.git
  git push --quiet --set-upstream origin-pages heroku 
}

setup_git
commit_website_files
upload_files
