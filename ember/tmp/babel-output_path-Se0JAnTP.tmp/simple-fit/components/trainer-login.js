define('simple-fit/components/trainer-login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {

			login: function login(item) {
				this.get('session').setProperties({ isLoggedIn: true });
			}
		}
	});
});