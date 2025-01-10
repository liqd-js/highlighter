'use strict';

const fs = require('fs');
const Highlighter = require('../lib/highlighter');
const highlighter = new Highlighter();

console.log( highlighter.highlight( fs.readFileSync( __dirname + '/sources/test.js', 'utf8' )));

