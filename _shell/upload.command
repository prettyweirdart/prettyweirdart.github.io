#!/bin/bash
cd Documents/website/prettyweirdart/prettyweirdart.github.io
git add --all
git commit -m "Update."
# Add github login info here to prevent unnecessary query for end user.
git push origin master
exit 0