Package.describe({
  name: 'simple:json-routes',
  version: '2.3.1',

  // Brief, one-line summary of the package.
  summary: 'The simplest way to define server-side routes that return JSON',

  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/stubailo/meteor-rest/tree/master/packages/json-routes',

  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
});

Npm.depends({
  connect: '3.7.0',
  'connect-route': '0.1.5',
  'body-parser': '1.19.0',
  'connect-query': '1.0.0',
});

Package.onUse(function (api) {
  api.versionsFrom('2.4');

  api.use([
    'underscore',
    'webapp',
  ], 'server');

  api.addFiles([
    'json-routes.js',
    'middleware.js',
  ], 'server');

  api.export([
    'JsonRoutes',
    'RestMiddleware',
  ], 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('test-helpers');
  api.use('simple:json-routes');
  api.use('http');
  api.addFiles('json-routes-tests.js');
});
