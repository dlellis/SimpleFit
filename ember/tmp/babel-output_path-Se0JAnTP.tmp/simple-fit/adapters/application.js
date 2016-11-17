define('simple-fit/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].RESTAdapter.extend({
    //host: 'http://localhost:8000/api/',
    namespace: 'api',
    buildURL: function buildURL(type, id, record) {
      return this._super(type, id, record) + '/';
    }

  });
});