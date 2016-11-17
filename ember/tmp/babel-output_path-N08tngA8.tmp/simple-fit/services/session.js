define('simple-fit/services/session', ['exports', 'ember', 'ember-data'], function (exports, _ember, _emberData) {
  exports['default'] = _ember['default'].Service.extend({
    isauthenticated: _emberData['default'].attr('boolean'),
    userid: _emberData['default'].attr('number'),
    username: _emberData['default'].attr('string'),
    membertype: _emberData['default'].attr('string')
  });
});