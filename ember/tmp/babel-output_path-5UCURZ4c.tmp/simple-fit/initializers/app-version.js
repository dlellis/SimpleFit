define('simple-fit/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'simple-fit/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _simpleFitConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_simpleFitConfigEnvironment['default'].APP.name, _simpleFitConfigEnvironment['default'].APP.version)
  };
});