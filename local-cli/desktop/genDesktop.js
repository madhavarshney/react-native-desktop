/**
 * Copyright (c) 2017-present, Status Research and Development GmbH.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

const path = require('path');
const yeoman = require('yeoman-environment');

module.exports = function genDesktop(name) {
  const env = yeoman.createEnv();
  const generatorPath = path.join(__dirname, '../generator-desktop');
  env.register(generatorPath, 'react:app');
  env.run(['react:app', name]);
}
