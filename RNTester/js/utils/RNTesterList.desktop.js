/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 * @providesModule RNTesterList
 */
'use strict';

export type RNTesterExample = {
  key: string,
  module: Object,
};

const ComponentExamples: Array<RNTesterExample> = [
  {
    key: 'ActivityIndicatorExample',
    module: require('../examples/ActivityIndicator/ActivityIndicatorExample'),
  },
  // TODO: ArtExample crashes on start!
  // {
  //   key: 'ARTExample',
  //   module: require('./ARTExample'),
  // },
  {
    key: 'ButtonExample',
    module: require('../examples/Button/ButtonExample'),
  },
  {
    key: 'DatePickerIOSExample',
    module: require('../examples/DatePicker/DatePickerIOSExample'),
    supportsTVOS: false,
  },
  {
    key: 'FlatListExample',
    module: require('../examples/FlatList/FlatListExample'),
  },
  {
    key: 'ImageExample',
    module: require('../examples/Image/ImageExample'),
  },
  // {
  //   key: 'InputAccessoryViewExample',
  //   module: require('./InputAccessoryViewExample'),
  //   supportsTVOS: true,
  // },
  // {
  //   key: 'KeyboardAvoidingViewExample',
  //   module: require('./KeyboardAvoidingViewExample'),
  // },
  {
    key: 'LayoutEventsExample',
    module: require('../examples/Layout/LayoutEventsExample'),
  },
  // TODO: desktop - seems like these are deleted
  // {
  //   key: 'ListViewExample',
  //   module: require('../examples/ListView/ListViewExample'),
  // },
  // {
  //   key: 'ListViewGridLayoutExample',
  //   module: require('./ListViewGridLayoutExample'),
  // },
  //TODO: gives error Native animated module is not available
  // {
  //   key: 'ListViewPagingExample',
  //   module: require('./ListViewPagingExample'),
  // },
  //TODO: masked view not implemented
  // {
  //   key: 'MaskedViewExample',
  //   module: require('./MaskedViewExample'),
  // },
  {
    key: 'ModalExample',
    module: require('../examples/Modal/ModalExample'),
  },
  {
    key: 'MultiColumnExample',
    module: require('../examples/MultiColumn/MultiColumnExample'),
  },
  // {
  //   key: 'NavigatorIOSColorsExample',
  //   module: require('./NavigatorIOSColorsExample'),
  //   supportsTVOS: false,
  // },
  // {
  //   key: 'NavigatorIOSBarStyleExample',
  //   module: require('./NavigatorIOSBarStyleExample'),
  //   supportsTVOS: false,
  // },
  // {
  //   key: 'NavigatorIOSExample',
  //   module: require('./NavigatorIOSExample'),
  //   supportsTVOS: true,
  // },
  {
    key: 'PickerExample',
    module: require('../examples/Picker/PickerExample'),
  },
  // {
  //   key: 'PickerIOSExample',
  //   module: require('./PickerIOSExample'),
  //   supportsTVOS: false,
  // },
  // {
  //   key: 'ProgressViewIOSExample',
  //   module: require('./ProgressViewIOSExample'),
  // },
  {
    key: 'RefreshControlExample',
    module: require('../examples/RefreshControl/RefreshControlExample'),
  },
  // {
  //   key: 'SafeAreaViewExample',
  //   module: require('./SafeAreaViewExample'),
  //   supportsTVOS: true,
  // },
  {
    key: 'ScrollViewExample',
    module: require('../examples/ScrollView/ScrollViewExample'),
  },
  //TODO: error "native animated module not implemented"
  // {
  //   key: 'SectionListExample',
  //   module: require('./SectionListExample'),
  // },
  //TODO: not implemented
  // {
  //   key: 'SegmentedControlIOSExample',
  //   module: require('./SegmentedControlIOSExample'),
  // },
  {
    key: 'SliderExample',
    module: require('../examples/Slider/SliderExample'),
  },
  // {
  //   key: 'StatusBarExample',
  //   module: require('./StatusBarExample'),
  //   supportsTVOS: false,
  // },
  // TODO: desktop - seems like these are deleted
  // {
  //   key: 'SwipeableFlatListExample',
  //   module: require('./SwipeableFlatListExample'),
  // },
  // {
  //   key: 'SwipeableListViewExample',
  //   module: require('./SwipeableListViewExample'),
  // },
  {
    key: 'SwitchExample',
    module: require('../examples/Switch/SwitchExample'),
  },
  // {
  //   key: 'TabBarIOSExample',
  //   module: require('./TabBarIOSExample'),
  // },
  // {
  //   key: 'TabBarIOSBarStyleExample',
  //   module: require('./TabBarIOSBarStyleExample'),
  // },
  {
    key: 'TextExample',
    module: require('../examples/Text/TextExample'),
  },
  {
    key: 'TextInputExample',
    module: require('../examples/TextInput/TextInputExample'),
  },
  {
    key: 'TouchableExample',
    module: require('../examples/Touchable/TouchableExample'),
  },
  // {
  //   key: 'TransparentHitTestExample',
  //   module: require('./TransparentHitTestExample'),
  //   supportsTVOS: false,
  // },
  {
    key: 'ViewExample',
    module: require('../examples/View/ViewExample'),
  },
  // TODO: desktop - restore webview example
  // {
  //   key: 'WebViewExample',
  //   module: require('../examples/WebView/WebViewExample'),
  // },
];

const APIExamples: Array<RNTesterExample> = [
  // {
  //   key: 'AccessibilityIOSExample',
  //   module: require('./AccessibilityIOSExample'),
  //   supportsTVOS: false,
  // },
  // {
  //   key: 'ActionSheetIOSExample',
  //   module: require('./ActionSheetIOSExample'),
  //   supportsTVOS: true,
  // },
  {
    key: 'AlertExample',
    module: require('../examples/Alert/AlertExample').AlertExample,
  },
  // {
  //   key: 'AlertIOSExample',
  //   module: require('./AlertIOSExample'),
  //   supportsTVOS: true,
  // },
  {
    key: 'AnimatedExample',
    module: require('../examples/Animated/AnimatedExample'),
  },
  // {
  //   key: 'AnExApp',
  //   module: require('../AnimatedGratuitousApp/AnExApp'),
  // },
  // {
  //   key: 'AppStateExample',
  //   module: require('./AppStateExample'),
  //   supportsTVOS: true,
  // },
  // {
  //   key: 'AsyncStorageExample',
  //   module: require('./AsyncStorageExample'),
  // },
  {
    key: 'BorderExample',
    module: require('../examples/Border/BorderExample'),
  },
  {
    key: 'BoxShadowExample',
    module: require('../examples/BoxShadow/BoxShadowExample'),
  },
  // {
  //   key: 'CameraRollExample',
  //   module: require('./CameraRollExample'),
  //   supportsTVOS: false,
  // },
  {
    key: 'ClipboardExample',
    module: require('../examples/Clipboard/ClipboardExample'),
  },
  {
    key: 'Dimensions',
    module: require('../examples/Dimensions/DimensionsExample'),
  },
  // {
  //   key: 'GeolocationExample',
  //   module: require('./GeolocationExample'),
  //   supportsTVOS: false,
  // },
  // {
  //   key: 'ImageEditingExample',
  //   module: require('./ImageEditingExample'),
  // },
  {
    key: 'LayoutAnimationExample',
    module: require('../examples/Layout/LayoutAnimationExample'),
  },
  {
    key: 'LayoutExample',
    module: require('../examples/Layout/LayoutExample'),
  },
  {
    key: 'LinkingExample',
    module: require('../examples/Linking/LinkingExample'),
  },
  {
    key: 'NativeAnimationsExample',
    module: require('../examples/NativeAnimation/NativeAnimationsExample'),
  },
  // TODO - desktop - restore NetInfo example
  // {
  //   key: 'NetInfoExample',
  //   module: require('../examples/NetInfo/NetInfoExample'),
  // },
  // {
  //   key: 'OrientationChangeExample',
  //   module: require('./OrientationChangeExample'),
  //   supportsTVOS: false,
  // },
  {
    key: 'PanResponderExample',
    module: require('../examples/PanResponder/PanResponderExample'),
  },
  {
    key: 'PointerEventsExample',
    module: require('../examples/PointerEvents/PointerEventsExample'),
  },
  // {
  //   key: 'PushNotificationIOSExample',
  //   module: require('./PushNotificationIOSExample'),
  //   supportsTVOS: false,
  // },
  // {
  //   key: 'RCTRootViewIOSExample',
  //   module: require('./RCTRootViewIOSExample'),
  // },
  {
    key: 'RTLExample',
    module: require('../examples/RTL/RTLExample'),
  },
  // {
  //   key: 'ShareExample',
  //   module: require('./ShareExample'),
  //   supportsTVOS: true,
  // },
  // {
  //   key: 'SnapshotExample',
  //   module: require('./SnapshotExample'),
  //   supportsTVOS: true,
  // },
  {
    key: 'TimerExample',
    module: require('../examples/Timer/TimerExample'),
  },
  {
    key: 'TransformExample',
    module: require('../examples/Transform/TransformExample'),
  },
  // {
  //   key: 'TVEventHandlerExample',
  //   module: require('./TVEventHandlerExample'),
  //   supportsTVOS: true,
  // },
  // {
  //   key: 'VibrationExample',
  //   module: require('./VibrationExample'),
  //   supportsTVOS: false,
  // },
  {
    key: 'WebSocketExample',
    module: require('../examples/WebSocket/WebSocketExample'),
  },
  {
    key: 'XHRExample',
    module: require('../examples/XHR/XHRExample'),
  },
];

const Modules = {};

APIExamples.concat(ComponentExamples).forEach(Example => {
  Modules[Example.key] = Example.module;
});

const RNTesterList = {
  APIExamples,
  ComponentExamples,
  Modules,
};

module.exports = RNTesterList;
