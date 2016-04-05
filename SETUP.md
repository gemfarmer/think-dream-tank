# Setup

## Mac
* Download XCode from Apple AppStore
* In Terminal (open empty terminal shell)
* `cd ~`
* `ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
* install git -> `brew install git` or refer to other options [here](http://git-scm.com/downloads)
* install node and npm -> `brew install node`
* install mongodb -> `brew install mongodb`
* install grunt -> `npm install -g grunt-cli`
* install bower -> `npm install -g bower`
* Set up your github -> great setup instructions [here](https://help.github.com/articles/set-up-git/)
* Now, clone the directory from github
* `cd ~ && mkdir Projects`
* `cd Projects`
* clone -> `git clone https://github.com/gemfarmer/think-dream-tank.git`
* `cd think-dream-tank`
* install node modules -> `npm install`
* install bower packages -> `bower install`
* Either ask [Brian Hedberg](https://github.com/gemfarmer) for [environment configuration variables](server/config/local.env.sample.js) or create your own Google and Facebook configs for local development
* open a terminal tab and run `sudo mongod`
* open another terminal tab and run `mongo`
* then, in a third terminal tab, run server -> `grunt server`

## PC
* install git -> check out options [here](https://git-scm.com/downloads)
* install node and npm -> check out different installation options [here](https://nodejs.org/download/)
* install mongodb -> [here](https://www.mongodb.org/downloads)
* install grunt -> `npm install -g grunt-cli`
* install bower -> `npm install -g bower`
* Set up your github -> great setup instructions [here](https://help.github.com/articles/set-up-git/)
* Now, clone the directory from github
* `mkdir Projects`
* `cd Projects`
* clone -> `git clone https://github.com/gemfarmer/think-dream-tank.git`
* `cd think-dream-tank`
* install node modules -> `npm install`
* install bower packages -> `bower install`
* Either ask [Brian Hedberg](https://github.com/gemfarmer) for [environment configuration variables](server/config/local.env.sample.js) or create your own Google and Facebook configs for local development
* open a terminal tab and run `sudo mongod`
* open another terminal tab and run `mongo`
* then, in a third terminal tab, run server -> `grunt server`
