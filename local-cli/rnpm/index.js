'use strict';

const fs = require('fs');
const execSync = require('child_process').execSync;
const path = require('path');
const semver = require('semver');
const Registry = require('npm-registry');
const validUrl = require('valid-url');

const rnPackageJSONPath = () =>
  path.resolve(process.cwd(), 'node_modules/react-native/package.json');

const desktopGeneratorPath = () =>
  path.resolve(process.cwd(), 'node_modules/react-native-desktop/local-cli/desktop/genDesktop.js');

const npmConfReg = execSync('npm config get registry').toString().trim();
const npmRegistryURL = validUrl.is_uri(npmConfReg) ? npmConfReg : 'http://registry.npmjs.org';
const npm = new Registry({ registry: npmRegistryURL });

function getLatestVersion() {
  return new Promise((resolve, reject) => {
    npm.packages.release('react-native-desktop', 'latest', (err, releases) => {
      if (err) {
        reject(err);
      } else if (!releases || releases.length === 0) {
        reject(new Error('Could not find react-native-desktop@latest.'));
      } else {
        resolve(releases[0].version);
      }
    });
  });
}

function getMatchingVersion(version) {
  console.log(`Checking for react-native-desktop version matching ${version}...`);
  return new Promise(function(resolve, reject) {
    npm.packages.range('react-native-desktop', version, (err, release) => {
      if (!err && release) {
        resolve(release.version);
      }
      return getLatestVersion()
        .then((latestVersion) => {
          reject(
            new Error(
              `Could not find react-native-desktop@${version}. ` +
                `Latest version of react-native-desktop is ${latestVersion}, try switching to ` +
                `react-native-desktop@${semver.major(
                  latestVersion
                )}.${semver.minor(latestVersion)}.*.`
            )
          );
        })
        .catch(() => reject(new Error(`Could not find react-native-desktop@${version}.`)));
    });
  });
}

function getAllReactNativeDesktopReleases() {
  return new Promise((resolve, reject) => {
    npm.packages.releases('react-native-desktop', (err, releases) => {
      if (err) return reject(err);
      resolve(
        Object.keys(releases)
          .filter((release) => {
            if (['latest', 'canary'].includes(release)) return false;
            return true;
          }, {})
          .map((r) => releases[r])
      );
    });
  });
};

function getInstallPackage(version) {
  if (version) {
    const validVersion = semver.valid(version);
    const validRange = semver.validRange(version);

    if (validVersion || validRange) {
      return getMatchingVersion(version);
    } else {
      return Promise.resolve(version);
    }
  } else {
    const reactNativeVersion = getReactNativeVersion();

    return getAllReactNativeDesktopReleases().then((releases) => {
      releases.sort((a, b) => {
        if (a.date < b.date) return 1;
        if (a.date > b.date) return -1;
        return 0;
      });

      for (const release of releases) {
        if (semver.satisfies(reactNativeVersion, release.peerDependencies['react-native'])) {
          return release.version;
        }
      }

      throw new Error(
        `No version of 'react-native-desktop' found that satisfies a peer dependency on 'react-native@${reactNativeVersion}'`
      );
    });
  }
};

function getReactNativeVersion() {
  console.log('Reading react-native version from node_modules...');
  if (fs.existsSync(rnPackageJSONPath())) {
    return JSON.parse(fs.readFileSync(rnPackageJSONPath(), 'utf-8')).version;
  }
};

function getReactNativeAppName() {
  console.log('Reading application name from package.json...');
  return JSON.parse(fs.readFileSync('package.json', 'utf8')).name;
};

/**
 * Check that 'react-native init' itself used yarn to install React Native.
 * When using an old global react-native-cli@1.0.0 (or older), we don't want
 * to install React Native with npm, and React + Jest with yarn.
 * Let's be safe and not mix yarn and npm in a single project.
 * @param projectDir e.g. /Users/martin/AwesomeApp
 */
function isGlobalCliUsingYarn(projectDir) {
  return fs.existsSync(path.join(projectDir, 'yarn.lock'));
};

function setupDesktop(config, args, options) {
  const packageToInstall = 'react-native-desktop';

  const name = args[0] ? args[0] : getReactNativeAppName();
  const version = options.desktopVersion;
  const exact = options.exact;

  getInstallPackage(version)
    .then((versionToInstall) => {
      const rnDesktopPackage = `${packageToInstall}@${versionToInstall}`;
      console.log(`Installing ${rnDesktopPackage}...`);
      const pkgmgr = isGlobalCliUsingYarn(process.cwd())
        ? 'yarn add' + (exact ? ' --exact' : '')
        : 'npm install' + (exact ? ' --save-exact' : ' --save');

      const execOptions = options.verbose ? { stdio: 'inherit' } : {};
      execSync(`${pkgmgr} ${rnDesktopPackage}`, execOptions);
      console.log(`${rnDesktopPackage} succesfully installed`);

      const generateDesktop = require(desktopGeneratorPath());
      generateDesktop(name);
    })
    .catch((error) => console.error(error.message));
};

module.exports = [
  {
    func: setupDesktop,
    description: 'Generate a React Native Desktop template project',
    name: 'desktop',
    options: [
      {
        command: '--desktopVersion [version]',
        description: 'The version of react-native-desktop to use'
      },
      {
        command: '--verbose',
        description: 'Enables logging',
        default: false
      },
    ]
  }
];
