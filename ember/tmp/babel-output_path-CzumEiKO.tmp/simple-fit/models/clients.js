define('simple-fit/models/clients', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		// return Ember.$.get('/clients.json')
		firstname: _emberData['default'].attr('string'),
		lastname: _emberData['default'].attr('string')
	});
});
//photo: DS.attr(),
//url: DS.attr(),