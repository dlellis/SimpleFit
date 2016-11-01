define('simple-fit/services/session', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Service.extend({
    isLoggedIn: true,
    id: 1,
    username: 'Dobby',
    membertype: 'trainer'
  });
});