'use strict';

const config = {
  resolver: {
    hasteImplModulePath: require.resolve('./jest/hasteImpl'),
    platforms: ['desktop'],
    providesModuleNodeModules: ['react-native', 'react-native-desktop'],
    extraNodeModules: {
      'react-native-desktop': __dirname,
    }
  }
};

module.exports = config;
