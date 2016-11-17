define('simple-fit/tests/helpers/resolver', ['exports', 'simple-fit/resolver', 'simple-fit/config/environment'], function (exports, _simpleFitResolver, _simpleFitConfigEnvironment) {

  var resolver = _simpleFitResolver['default'].create();

  resolver.namespace = {
    modulePrefix: _simpleFitConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _simpleFitConfigEnvironment['default'].podModulePrefix
  };

  exports['default'] = resolver;
});