# [Think Dream Tank](https://peaceful-reaches-44349.herokuapp.com)

# Basic Setup 
#### For more step-by-step instructions, visit [SETUP](SETUP.md)
* `npm install`
* `bower install`
* Either ask [Brian Hedberg](https://github.com/gemfarmer) for [environment configuration variables](server/config/local.env.sample.js) or create your own Google and Facebook configs for local development
* `grunt server`


# Collaboration
* For collaboration, we will be using github for version control management and using a method called Git Flow specifically to assure that our individual submissions do not conflict with others.
* [This](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) is a great resource on Git Flow.
* If this is overwhelming, make sure you have a cloned version of the project in a directory on your machine. This is in the instructions above.
* Get into the correct directory -> `cd ~/Projects/think-dream-tank`
* Check to make sure that the remote repository exists -> `git remote -v` 
* This should give a fetch and push github url. If it doesn't (it should) add one -> git remote add origin https://github.com/gemfarmer/realize-change-revisited.git
* Check again -> `git remote -v`
* Now, if you are going to start working, create a new branch locally (on your machine) -> `git checkout -b NAME_OF_YOUR_NEW_BRANCH`
* Now work on changes
* If you would like to save those changes without adding them to the code on the master branch, you can push them to a remote version of that local branch. To do that, do the following
* Stage the changes -> `git add -A`
* Commit the changes and add a message -> git commit -m "YOUR_MESSAGE"
* git push origin NAME_OF_YOUR_NEW_BRANCH

#### Push to your remote branch
* Periodically, you should pull in new changes on the remote server to your local machine. To do that, do as follows:
* After committing all changes, switch to the master branch -> `git checkout master`
* Pull your changes -> `git pull origin master`
* The easiest way (probably not the best, but will work) is to creat a separate, temporary branch to merge the master and your feature branch. -> `git checkout -b temporary-branch`
* Then, merge your feature changes onto that branch -> `git merge NAME_OF_YOUR_NEW_BRANCH`
* If there are conflicts, refer to the files where there is overlap and try to resolve them. Make sure to get rid of extra angle brackets <<<<<<<< or >>>>>>>>>. If you don't know what is going on here, give me a ring.
* There probably won't be if you do this regularly, so if not, continue by navigating to your feature branch -> `git checkout NAME_OF_YOUR_NEW_BRANCH`
* add your changes to this branch -> `git merge temporary-branch`
* now stage, commit, and push these changes to the server:
* Stage -> `git add -A`
* Commit -> `git commit -m "YOUR_MESSAGE"`
* Push -> `git push origin NAME_OF_YOUR_NEW_BRANCH`
* Then, delete the temporary branch -> `git branch -D temporary-branch`

#### Making additions to master
* When you are ready to add your additions to master, follow all the steps in the 'Push to your remote branch' section, then submit a pull request on github.
* Go to [the repo](https://github.com/gemfarmer/think-dream-tank), then click on the Pull Requests tab on the right side, and submit a pull request comparing the master branch to your branch
* I'll take a look at it, and merge it.
* Once this is done, you can pull the new changes down by:
* `git checkout master`
* `git pull origin master`

# Database

## Local
* To interface with the database locally:
* Open a new terminal window, then -> `sudo mongod`
* In another terminal window -> `mongo`
* Then, in the same window -> `show dbs`
* Then `use thinkdreamtank-dev`
* You are now in the DB and can use command line mongo commands to find different collections of data.
* [A good resource for these commands](http://docs.mongodb.org/manual/tutorial/getting-started-with-the-mongo-shell/)
* The most common command that you will use will be to search a collection.
* To see the collections `show collections`
* Then once you see the collections: users, sessions, dreams, you can find the ones you want: `db.dreams.find()`
* or to make it prettier `db.dreams.find().pretty()`
* or maybe you want to just find one: `db.dreams.findOne({ "_id" : ObjectId("556e081c3abf1dde475e3c19")})`
* or `db.dreams.findOne({ "name" : "Brian"})`

## Architecture
This site is built using [Angular Fullstack Generator](https://github.com/angular-fullstack/generator-angular-fullstack)

The generator is especially good for scaffolding out content. Do the following
`$ yo angular-fullstack:[feature] [myfeature]`
for any of the following features...

###### Cleint
* `directive`, 
* `route`,
* `controller`,
* `filter`,
* `directive`,
* `service`,
* `provider`,
* `factory`,
* `decorator`

###### Server
* `endpoint`

###### Mapping
* Maps on the site are built using [Leaflet](http://leafletjs.com/) and [Mapbox](https://www.mapbox.com/). Map styling was done using [Mapbox Study Classic](https://www.mapbox.com/mapbox-studio-classic/). Edit online [here](https://www.mapbox.com/studio/).
OR [Editor](https://www.mapbox.com/editor/#project)
## Deployment
This site is deployed with heroku, using Angular Fullstack Generator's `buildcontrol` feature. [Directions to getting heroku configured](https://github.com/angular-fullstack/generator-angular-fullstack#heroku)
Once that is set up, deployment workflow is as follows:

`$ grunt` -> builds the site
If the build fails and you feel confident that you aren't breaking anything
`$ grunt -f` -> force build the site. The build will go in the `dist` directory
`$ cd dist` -> navigate to the newly minted directory that contains the latest build of the site
`$ grunt buildcontrol:heroku` -> push the site live
`$ heroku open --app peaceful-reaches-44349` --> open site in your browser
