// harness.js
require('mocha-clean'); // cleaner stack traces, yes please

const glob = require('glob');
const jsdom = require('jsdom');
const chai = require('chai');
const sinon = require('sinon');

require('reflect-metadata');
require('zone.js')
require('zone.js/dist/long-stack-trace-zone')
require('zone.js/dist/proxy.js')
require('zone.js/dist/sync-test')
require('zone.js/dist/async-test')
require('zone.js/dist/fake-async-test')
require('core-js/es6/object')
require('core-js/es6/array')
require('core-js/es7/reflect')
require('core-js/es6/set')
require('core-js/es6');

const {getTestBed} = require('@angular/core/testing');
const {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} = require('@angular/platform-browser-dynamic/testing');

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);



global.document = jsdom.jsdom();
global.window = document.defaultView;

global.navigator = window.navigator || {};
global.Node = window.Node;
global.addEventListener = window.addEventListener;
global.MouseEvent = window.MouseEvent;
global.KeyboardEvent = window.KeyboardEvent;
global.Event = window.Event;
global.btoa = window.btoa;
global.FormData = window.FormData;
global.FileReader = window.FileReader;
global.File = window.File;

window.beforeEach = global.beforeEach;
window.afterEach = global.afterEach;
window.before = global.before;
window.after = global.after;
window.mocha = true;

// require angular _after_ we have our window object set up & ready
// require('angular/angular');
// require('angular-mocks')

global.angular = window.angular;
global.sinon = sinon;
global.expect = chai.expect;



// require your main application entry point
// to get all of them modules going and dependencies hooked up
// require('./src/main.js');

// require all the test files
// glob.sync('./src/app/**/*.spec.js').forEach(require);