/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

'use strict';

type BackPressEventName = 'backPress' | 'hardwareBackPress';

function emptyFunction(): void {}

type TBackHandler = {|
  +exitApp: () => void,
  +addEventListener: (
    eventName: BackPressEventName,
    handler: Function,
  ) => {remove: () => void},
  +removeEventListener: (
    eventName: BackPressEventName,
    handler: Function,
  ) => void,
|};

let BackHandler: TBackHandler;

BackHandler = {
  exitApp: emptyFunction,
  addEventListener(_eventName: BackPressEventName, _handler: Function) {
    return {
      remove: emptyFunction,
    };
  },
  removeEventListener(_eventName: BackPressEventName, _handler: Function) {},
};

module.exports = BackHandler;
