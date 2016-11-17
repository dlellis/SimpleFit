define('simple-fit/app', ['exports', 'ember', 'simple-fit/resolver', 'ember-load-initializers', 'simple-fit/config/environment'], function (exports, _ember, _simpleFitResolver, _emberLoadInitializers, _simpleFitConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _simpleFitConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _simpleFitConfigEnvironment['default'].podModulePrefix,
    Resolver: _simpleFitResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _simpleFitConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});