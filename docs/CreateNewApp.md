## Overview

### Create the project
Install `react-native-cli` globally:
```sh
npm install -g react-native-cli
# OR
yarn global add react-native-cli
```
Create a React Native app:
```sh
react-native init DesktopSampleApp
```
Install `rnpm-plugin-desktop`:
```sh
cd DesktopSampleApp
npm install rnpm-plugin-desktop
# OR
yarn add rnpm-plugin-desktop
```
Add desktop-related files:
```sh
react-native desktop --desktopVersion "react-native-desktop@https://github.com/status-im/react-native-desktop#master"
```

### Run the project
If you're using macOS, run these commands in 2 different shells (from `DesktopSampleApp` dir):
```sh
npm start # starts bundler
```
```sh
node node_modules/react-native/ubuntu-server.js # starts js server
```

Afterwards, in a 3rd shell execute:
```sh
react-native run-desktop
```
Compilation of desktop project will start. When it finishes and the app runs, you will see the following:

![](./media/react-native-desktop-new-app.png)

**Note:** On non-macOS systems, `npm start` and `node ubuntu-server.js` will be executed automatically by the command above.


**If you want to know why you had to start bundler and js server** - check the doc on [how react-native-desktop works internally](docs/HowRNDesktopAppWorks.md).
