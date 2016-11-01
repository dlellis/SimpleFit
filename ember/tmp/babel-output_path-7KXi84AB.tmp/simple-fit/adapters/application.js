define('simple-fit/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
		host: 'http://localhost:8000/api'

	});
});