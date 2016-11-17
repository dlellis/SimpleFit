define('simple-fit/components/login', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    session: _ember['default'].inject.service('session'),
    actions: {
      login: function login(item) {
        this.get('session').setProperties({ isLoggedIn: true });
      }

    }

  });
});