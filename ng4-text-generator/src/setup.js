// harness.js
require('mocha-clean'); // cleaner stack traces, yes please
require('reflect-metadata');
const glob = require('glob');
const jsdom = require('jsdom');
const chai = require('chai');
const sinon = require('sinon');


const {XMLHttpRequest} = require("xmlhttprequest");



require('zone.js/dist/zone');
global.document = jsdom.jsdom();
global.window = document.defaultView;
global.XMLHttpRequest = XMLHttpRequest;
global.window.XMLHttpRequest = XMLHttpRequest;


require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');
require('zone.js/dist/proxy');

// require('zone.js/dist/jasmine-patch');



global.navigator = window.navigator || {};
global.Reflect = require('reflect-metadata/Reflect.js');
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





const {getTestBed} = require('@angular/core/testing');
const {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} = require('@angular/platform-browser-dynamic/testing');

getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);









// require your main application entry point
// to get all of them modules going and dependencies hooked up
// require('./src/main.js');

// require all the test files
// glob.sync('./src/app/**/*.spec.js').forEach(require);