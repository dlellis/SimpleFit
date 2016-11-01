define('simple-fit/components/auth-manager', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    session: _ember['default'].inject.service('session'),
    actions: {
      login: function login() {},
      logout: function logout() {}
    }

  });
});