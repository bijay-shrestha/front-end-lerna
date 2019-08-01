'use strict';

var _require = require('ts-pnp'),
    resolveModuleName = _require.resolveModuleName;

exports.resolveModuleName = function (typescript, moduleName, containingFile, compilerOptions, resolutionHost) {
  return resolveModuleName(moduleName, containingFile, compilerOptions, resolutionHost, typescript.resolveModuleName);
};

exports.resolveTypeReferenceDirective = function (typescript, moduleName, containingFile, compilerOptions, resolutionHost) {
  return resolveModuleName(moduleName, containingFile, compilerOptions, resolutionHost, typescript.resolveTypeReferenceDirective);
};