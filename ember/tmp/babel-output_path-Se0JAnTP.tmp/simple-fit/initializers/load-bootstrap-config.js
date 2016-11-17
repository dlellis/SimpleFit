define('simple-fit/initializers/load-bootstrap-config', ['exports', 'simple-fit/config/environment', 'ember-bootstrap/config'], function (exports, _simpleFitConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_simpleFitConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});