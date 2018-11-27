
/**
 * Copyright (C) 2016, Canonical Ltd.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */

'use strict';

const chalk = require('chalk');
const path = require('path');
const yeoman = require('yeoman-generator');
const mkdirp = require('mkdirp');

function validatePackageName(name) {
  // TODO: check that this matches Desktop package reqs as well
  if (!name.match(/^([a-zA-Z_$][a-zA-Z\d_$]*\.)+([a-zA-Z_$][a-zA-Z\d_$]*)$/)) {
    return false;
  }
  return true;
}

class DesktopGenerator extends yeoman {
  constructor(args, opts) {
    super(args, opts);
    this.name = args[0];

    if (!this.name || typeof this.name !== 'string') {
      throw new Error('Please give a valid name.');
    }

    this.option('package', {
      desc: 'Package name for the application (appname.developername)',
      type: String,
      defaults: this.name.toLowerCase() + '.dev'
    });

    if (!validatePackageName(this.options.package)) {
      throw new Error('Package name ' + this.options.package + ' is invalid');
    }
  }

  writing() {
    const templateParams = {
      package: this.options.package,
      name: this.name,
      lowerCaseName: this.name.toLowerCase()
    };
    this.fs.copyTpl(
      this.templatePath('index.desktop.js'),
      this.destinationPath('index.desktop.js'),
      templateParams
    );
    this.fs.copyTpl(
      this.templatePath('CMakeLists.txt'),
      this.destinationPath(path.join('desktop', 'CMakeLists.txt')),
      templateParams
    );
    this.fs.copyTpl(
      this.templatePath('build.bat'),
      this.destinationPath(path.join('desktop', 'build.bat')),
      templateParams
    );
    this.fs.copyTpl(
      this.templatePath('build.sh'),
      this.destinationPath(path.join('desktop', 'build.sh')),
      templateParams
    );
    this.fs.copyTpl(
      this.templatePath('run-app.bat.in'),
      this.destinationPath(path.join('desktop', 'run-app.bat.in')),
      templateParams
    );
    this.fs.copyTpl(
      this.templatePath('run-app.sh.in'),
      this.destinationPath(path.join('desktop', 'run-app.sh.in')),
      templateParams
    );
    this.fs.copyTpl(
      this.templatePath('ubuntu-server.js'),
      this.destinationPath(path.join('desktop', 'bin/ubuntu-server.js')),
      templateParams
    );

    // Custom application main.cpp source
    this.fs.copyTpl(
      this.templatePath('../../../ReactQt/application/src/main.cpp'),
      this.destinationPath(path.join('desktop', 'main.cpp')),
      templateParams
    );

    mkdirp.sync('desktop/share');
    mkdirp.sync('desktop/plugins');
  }

  end() {
    const projectPath = this.destinationRoot();
    this.log(chalk.white.bold('To run your app on your Desktop natively:'));
    this.log(chalk.white('   cd ' + projectPath));
    this.log(chalk.white('   react-native run-desktop'));
  }
};

module.exports = DesktopGenerator;
