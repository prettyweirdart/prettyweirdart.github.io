#!/bin/bash
cd Documents/website/prettyweirdart/prettyweirdart.github.io
bundle exec jekyll serve
open -a Safari http://localhost:4000
exit 0