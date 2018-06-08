/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow
 */
'use strict';

const { getProjectCommands } = require('./core');

import type { RNConfig } from './core';

export type CommandT = {
  name: string,
  description?: string,
  usage?: string,
  func: (argv: Array<string>, config: RNConfig, args: Object) => ?Promise<void>,
  options?: Array<{
    command: string,
    description?: string,
    parse?: (val: string) => any,
    default?: ((config: RNConfig) => mixed) | mixed,
  }>,
  examples?: Array<{
    desc: string,
    cmd: string,
  }>,
  pkg?: {
    version: string,
    name: string,
  },
};

const documentedCommands = [
  require('./server/server'),
  require('./desktop/genDesktop'),
  require('./desktop/runDesktop'),
  require('./desktop/buildDesktop'),
  require('./library/library'),
  require('./bundle/bundle'),
  require('./bundle/unbundle'),
  require('./link/link'),
  require('./link/unlink'),
  require('./install/install'),
  require('./install/uninstall'),
  require('./upgrade/upgrade'),
  require('./dependencies/dependencies'),
];

// The user should never get here because projects are inited by
// using `react-native-cli` from outside a project directory.
const undocumentedCommands = [
  {
    name: 'init',
    func: () => {
      console.log([
        'Looks like React Native project already exists in the current',
        'folder. Run this command from a different folder or remove node_modules/react-native',
      ].join('\n'));
    },
  },
];

const commands: Array<CommandT> = [
  ...documentedCommands,
  ...undocumentedCommands,
  ...getProjectCommands(),
];

module.exports = commands;
