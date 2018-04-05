#!/bin/bash
cd ~/
cd Documents/website/prettyweirdart/prettyweirdart.github.io
node editPrettyWeirdArt.js
bundle exec jekyll serve
open -a Safari http://localhost:4000
exit 0