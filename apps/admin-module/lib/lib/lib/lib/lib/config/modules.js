'use strict';

var fs = require('fs');

var path = require('path');

var paths = require('./paths');

var chalk = require('react-dev-utils/chalk');
/**
 * Get the baseUrl of a compilerOptions object.
 *
 * @param {Object} options
 */


function getAdditionalModulePaths() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var baseUrl = options.baseUrl; // We need to explicitly check for null and undefined (and not a falsy value) because
  // TypeScript treats an empty string as `.`.

  if (baseUrl == null) {
    // If there's no baseUrl set we respect NODE_PATH
    // Note that NODE_PATH is deprecated and will be removed
    // in the next major release of create-react-app.
    var nodePath = process.env.NODE_PATH || '';
    return nodePath.split(path.delimiter).filter(Boolean);
  }

  var baseUrlResolved = path.resolve(paths.appPath, baseUrl); // We don't need to do anything if `baseUrl` is set to `node_modules`. This is
  // the default behavior.

  if (path.relative(paths.appNodeModules, baseUrlResolved) === '') {
    return null;
  } // Allow the user set the `baseUrl` to `appSrc`.


  if (path.relative(paths.appSrc, baseUrlResolved) === '') {
    return [paths.appSrc];
  } // Otherwise, throw an error.


  throw new Error(chalk.red.bold("Your project's `baseUrl` can only be set to `src` or `node_modules`." + ' Create React App does not support other values at this time.'));
}

function getModules() {
  // Check if TypeScript is setup
  var hasTsConfig = fs.existsSync(paths.appTsConfig);
  var hasJsConfig = fs.existsSync(paths.appJsConfig);

  if (hasTsConfig && hasJsConfig) {
    throw new Error('You have both a tsconfig.json and a jsconfig.json. If you are using TypeScript please remove your jsconfig.json file.');
  }

  var config; // If there's a tsconfig.json we assume it's a
  // TypeScript project and set up the config
  // based on tsconfig.json

  if (hasTsConfig) {
    config = require(paths.appTsConfig); // Otherwise we'll check if there is jsconfig.json
    // for non TS projects.
  } else if (hasJsConfig) {
    config = require(paths.appJsConfig);
  }

  config = config || {};
  var options = config.compilerOptions || {};
  var additionalModulePaths = getAdditionalModulePaths(options);
  return {
    additionalModulePaths: additionalModulePaths,
    hasTsConfig: hasTsConfig
  };
}

module.exports = getModules();