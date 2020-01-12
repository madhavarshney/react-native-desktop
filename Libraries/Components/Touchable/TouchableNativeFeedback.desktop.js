/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

'use strict';

const React = require('react');
const View = require('../View/View');
const createReactClass = require('create-react-class');

const TouchableNativeFeedback = createReactClass({
  render: function() {
    return (
      <View {...this.props} />
    );
  },
});

module.exports = TouchableNativeFeedback;
