# RNPM Plugin for React Native Desktop

## Project Initialization

First, ensure you have the react-native CLI installed globally.

```
npm install -g react-native-cli
# or
yarn global add react-native-cli
```

Next, initialize your React Native project the way you typically do.

```
react-native init [project name]
```

Then, `cd` into your project and install `rnpm-plugin-desktop` into your `devDependencies`, after which you can initialize your React Native Desktop scaffolding with the `react-native desktop` command.

```
npm install --save-dev rnpm-plugin-desktop
# or
yarn add --dev rnpm-plugin-desktop

# Add desktop support to your React Native project
react-native desktop
```

### Usage

```
react-native desktop [name] [--desktopVersion <version>] [--verbose]
```
