'use strict';

var path = require('path');

var camelcase = require('camelcase'); // This is a custom Jest transformer turning file imports into filenames.
// http://facebook.github.io/jest/docs/en/webpack.html


module.exports = {
  process: function process(src, filename) {
    var assetFilename = JSON.stringify(path.basename(filename));

    if (filename.match(/\.svg$/)) {
      // Based on how SVGR generates a component name:
      // https://github.com/smooth-code/svgr/blob/01b194cf967347d43d4cbe6b434404731b87cf27/packages/core/src/state.js#L6
      var pascalCaseFileName = camelcase(path.parse(filename).name, {
        pascalCase: true
      });
      var componentName = "Svg".concat(pascalCaseFileName);
      return "const React = require('react');\n      module.exports = {\n        __esModule: true,\n        default: ".concat(assetFilename, ",\n        ReactComponent: React.forwardRef(function ").concat(componentName, "(props, ref) {\n          return {\n            $$typeof: Symbol.for('react.element'),\n            type: 'svg',\n            ref: ref,\n            key: null,\n            props: Object.assign({}, props, {\n              children: ").concat(assetFilename, "\n            })\n          };\n        }),\n      };");
    }

    return "module.exports = ".concat(assetFilename, ";");
  }
};