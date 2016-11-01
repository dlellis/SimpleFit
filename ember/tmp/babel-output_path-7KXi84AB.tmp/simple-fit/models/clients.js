define('simple-fit/models/clients', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		//return Ember.$.get('/clients/clients.json')
		firstName: _emberData['default'].attr(),
		lastName: _emberData['default'].attr(),
		photo: _emberData['default'].attr()
	});
});