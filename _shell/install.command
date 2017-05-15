#!/bin/bash
echo "Installing command line tools."
xcode-select --install
echo "Installing Homebrew."
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
echo "Updating Ruby."
brew install ruby
echo "Installing Git."
brew install git
echo "Installing Jekyll."
gem install jekyll
echo "Downloading Site Files."
