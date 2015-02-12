"use strict"
require("6to5/register");
var fslearn = require('./src/js/fslearn.js');
var argv = require('yargs').argv;
var genlearn = require('./src/js/generators.js');

if (argv.fs) {
  console.log("FS Learn module->", fslearn);
  fslearn.watchFile();
} else if (argv.gen) {
  genlearn.runGenerators();
}
