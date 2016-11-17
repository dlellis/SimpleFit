define('simple-fit/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			login: function login() {
				this.get('session').setProperties({ isLoggedIn: true });
			}
		}
	});
});