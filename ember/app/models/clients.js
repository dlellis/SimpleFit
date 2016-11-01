import DS from 'ember-data';

export default DS.Model.extend({
	//return Ember.$.get('/clients/clients.json')
	firstName: DS.attr(),
	lastName: DS.attr(),
	photo: DS.attr(),
	url: DS.attr(),
});
