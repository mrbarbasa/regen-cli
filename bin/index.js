#! /usr/bin/env node
var regen = require('commander');
var fs = require('fs');

regen
  .arguments('<relative-directory>')
  .arguments('<component-name>')
  .action(function(path, component) {
    var index = 'index.js';
    var main = component + '.js';
    var spec = component + '.spec.js';
    var css = component + '.css';

var indexText =
`import component from './${component}';

export default component;
`;

var mainText =
`import React from 'react';
import CSSModules from 'react-css-modules';

import styles from './${component}.css';

export class ${component} extends React.Component {
  render() {
    return <h1>TODO</h1>;
  }
}

export default ${component};
`;

    fs.writeFile(path + index, indexText, 'utf8', function(err) {
      if (err) {
        console.log('Error writing to file %s', index);
      }
    });

    fs.writeFile(path + main, mainText, 'utf8', function(err) {
      if (err) {
        console.log('Error writing to file %s', main);
      }
    });

    fs.writeFile(path + spec, '', 'utf8', function(err) {
      if (err) {
        console.log('Error writing to file %s', spec);
      }
    });

    fs.writeFile(path + css, '', 'utf8', function(err) {
      if (err) {
        console.log('Error writing to file %s', css);
      }
    });
  })
  .parse(process.argv);
