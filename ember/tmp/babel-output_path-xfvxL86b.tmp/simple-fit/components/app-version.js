define('simple-fit/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'simple-fit/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _simpleFitConfigEnvironment) {

  var name = _simpleFitConfigEnvironment['default'].APP.name;
  var version = _simpleFitConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});