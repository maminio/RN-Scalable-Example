# Fantastic-TestApp

# Attention!

  - This project is under development and is only for test. 
  - All copyright reserved
  - And yes the name is Fantastec, major typo!



# Table of Contents
1. [Installation](#prepare-development)
2. [Yarn](#yarn)
3. [Upgrade RN](#upgrade-react-native)
4. [Assets](#assets)
5. [Folder structure](#folder-structure)
6. [Testing](#testing)
7. [Debugging](#debugging)




## Installation

#### Checkout project & submodules
```bash
git clone https://github.com/maminio/Fantastic-TestApp.git
```


#### macOS
* Install dependencies `brew install node watchman`
    * *Make sure you have node version 4 or newer*
* Install react-native `npm install -g react-native-cli`

###### iOS
* Install Xcode (https://itunes.apple.com/us/app/xcode/id497799835?mt=12)
* Run the project `react-native run-ios`


## Yarn
Fast, reliable, and secure dependency management

#### Local module
```bash
yarn add file:PATH_TO_YOUR_MODULE
```

You need to include `file:` in front of the path. 
Module name is derived from modules `package.json` an d can differ from the folder name. 
 

#### Install module
```bash
yarn add MODULE_NAME


#### Re-install module
```bash
yarn add --force MODULE_NAME
```

#### Remove module
```bash
yarn remove MODULE_NAME
```

#### Clear cache
```bash
yarn cache clean
```

#### Re-install all modules
```bash
rm -rf node_modules && yarn cache clean && yarn install
```





## Link modules

#### Link
```bash
react-native link
```

###### Link specific module
```bash
react-native link MODULE_NAME
```

#### Unlink
```bash
react-native unlink
```

###### Unlink specific module
```bash
react-native unlink MODULE_NAME
```




## Upgrade React Native
* Install `react-native-git-upgrade` globally using
```bash
npm install -g react-native-git-upgrade
```

* ?? Delete node modules, then run npm install (or better yet yarn) and after everything has finished downloading, run react-native upgrade which should give you the option to replace old files with the template ones, by doing so you re-link your native dependencies in react-native which should fix your problem. Of course don't forget to clean your project in Xcode.

* For more info please go to [this website](https://facebook.github.io/react-native/docs/upgrading.html)

The module provides a one-step operation to upgrade the source files with a minimum of conflicts. 
Under the hood, it consists in 2 phases:

* First, it computes a Git patch between both old and new template files,
* Then, the patch is applied on the user's sources.

#### Run the command
```bash
react-native-git-upgrade
# Upgrade React Native to the latest version

# Or:

react-native-git-upgrade X.Y.Z
# Upgrade React Native to the X.Y.Z version
```




## Assets

#### Adding new assets
Copy all assets under `app/assets` directory.

* You will need to run [Link modules](#link) command in order to copy assets across to iOS & Android.

If successful, you should see similar output

```bash
rnpm-install info Linking assets to ios project
rnpm-install info Linking assets to android project
rnpm-install info Assets have been successfully linked to your project
```

* If you're packager is running, please restart it.




## Components

#### Organizing components

Once you have 2 or more components that have a common usage purposes, eq. used only on one of the scenes,
or if you have a set of components that could be grouped together, create a new empty folder and move those components 
in there. 



## Folder structure
Everything is stored under `app` root folder

* **Actions** *There are two types of files here `constants.js` and `other .js files`*
    * `constants.js` is where all actions constants are defined
    * `other .js files` Each file represent a different set of actions (eq. actions defined in `sessions.js` 
        reflects all actions that are used to control user session 
        (<small>SignIn, SignOut, SetAuthData, ValidateAuthToken, RestoreUserSession, ...</small>)
* **Assets**
* **Components**
* **Config**
* **Views**
* **Helpers**
* **Reducers**
* **Scenes**



## Native Module
Install the library creator `npm install -g react-native-create-library`. 
Please find more about it [here](https://github.com/frostney/react-native-create-library).

#### Creating the module

* Run `npm run new-module MODULE_NAME`
* Navigate to `./modules/`

Note that `MODULE_NAME` will be the modules folder, so keep it lower case and dashed.

It will automatically add `react-native-` prefix to the module package name.

#### Writing the module
Open appropriate XCode project or Android files and edit them.

#### Module installation

Please refer to the [Install local module](#local-module) section.



## Testing

#### Writing tests
All tests are located inside `__tests__` sub-folders. Each component has it's own testing folder, actions, 
reducers, each have common testing folder.

To write a test, match the filename with the component/action you want to test and append `-test` to the filename.

###### Test types

For some tests we're using manual comparisons, for others snapshots. We're mocking the build-in React Native fetch and 
Mocking `redux store` with `redux-mock-store`.  

* Testing Actions
    * A simple action creator is just a function that returns an object which we're comparing to the snapshot.
* Testing Reducers
    * Testing a reducer is one of the easiest parts to test from your app. Given the current state and an action, 
        a reducer should return a new state after that action is applied.
* Testing Components
    * Testing a component is just a matter of comparing it to generated snapshot. 
    Snapshots are automatically generated first time you ran tests and are then used for comparison.
#### Running tests
```bash
yarn test
```

#### Watch
You can run test continuously while changing the code. This will run tests every time you make a change to the code. 
```bash
yarn test -- --watch
```

#### Coverage
```bash
yarn test -- --coverage
```

#### Combine Watch with Coverage
```bash
yarn test -- --watch --coverage
```

#### Updating tests
```bash
yarn test -- -u
```

#### Updating specific test
```bash
yarn test -- -u Button
```



## Debugging

#### Remote debugger
https://github.com/jhen0409/react-native-debugger

https://github.com/jhen0409/react-native-debugger/blob/master/docs/getting-started.md

```bash
open "rndebugger://set-debugger-loc?host=localhost&port=8081"
```


#### Logs
```bash
react-native log-ios
```

#### Cache
watchman watch-del-all && rm -rf node_modules && yarn install && rm -fr $TMPDIR/react-* && npm start -- --reset-cache

w

#### Debugging in Release build using sourcemap

###### Device Log
react-native-device-log

###### Generate current valid sourcemap using
```
react-native bundle --platform ios --entry-file index.ios.js --dev false --bundle-output ./ios/main.jsbundle --assets-dest ./ios --sourcemap-output ./sourcemap.js
```

## Built With

* [React-Native](http://www.dropwizard.io/1.0.2/docs/) 
* [Redux](https://maven.apache.org/) 

## Contributing

Please contact md.aminmoradi@gmail.com for further information. 

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Amin Moradi** - *Developer* - [LinkedIn](https://www.linkedin.com/in/aminmoradi/)

## License

This project is licensed under the Fantastec License.

## Acknowledgments

