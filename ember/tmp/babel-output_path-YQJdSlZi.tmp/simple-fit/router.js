define('simple-fit/router', ['exports', 'ember', 'simple-fit/config/environment'], function (exports, _ember, _simpleFitConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _simpleFitConfigEnvironment['default'].locationType,
    rootURL: _simpleFitConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('trainer');
    this.route('dietitian');
    this.route('market');
    this.route('recipes');
    this.route('recipe', { path: 'recipes/:recipe_name' });
    this.route('vchat');
    this.route('dclient');
    this.route('user', { path: 'users/:user_url' });
  });

  exports['default'] = Router;
});