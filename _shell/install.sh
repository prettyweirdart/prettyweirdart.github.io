#!/bin/bash
echo "Installing command line tools."
xcode-select --install
echo "Installing Homebrew."
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
echo "Updating Ruby."
brew install ruby
echo "Installing Git."
brew install git
gem install bundler
mkdir Documents/website/prettyweirdart
cd Documents/website/prettyweirdart
echo "Downloading site files."
git clone https://github.com/prettyweirdart/prettyweirdart.github.io
cd prettyweirdart.github.io
bundle install
echo "Setup Complete. Run PrettyWeirdArt from the alias on your desktop to Edit the site. If you run this install again, you may overwrite your local site's files with the current online version. To add more images to the site, first add them to the images folder in your Documents/website/prettyweirdart/images/ folder. Drag and drop them from that folder, or select them from the dropdown, into each of your new pages/posts. For any assistance, don't hesitate to contact me: jeremiah@jeremiahlangner.com."
