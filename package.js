Package.describe({
  name: 'mdg:validation-error',
  version: '0.1.0',
  summary: 'A standard validation error to be used by form/method/validation packages',
  git: 'https://github.com/meteor/validation-error'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.use([
    'ecmascript',
    'aldeed:simple-schema@1.5.1',
  ]);

  api.addFiles('validation-error.js');

  api.export('ValidationError');
});

Package.onTest(function (api) {
  api.use([
    'ecmascript',
    'practicalmeteor:mocha@2.1.0_5',
    'practicalmeteor:chai@2.1.0_1',
    'mdg:validation-error',
  ]);

  api.addFiles('validation-error-tests.js');
});
