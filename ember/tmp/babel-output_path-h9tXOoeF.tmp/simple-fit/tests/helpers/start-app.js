define('simple-fit/tests/helpers/start-app', ['exports', 'ember', 'simple-fit/app', 'simple-fit/config/environment'], function (exports, _ember, _simpleFitApp, _simpleFitConfigEnvironment) {
  exports['default'] = startApp;

  function startApp(attrs) {
    var application = undefined;

    var attributes = _ember['default'].merge({}, _simpleFitConfigEnvironment['default'].APP);
    attributes = _ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    _ember['default'].run(function () {
      application = _simpleFitApp['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }
});