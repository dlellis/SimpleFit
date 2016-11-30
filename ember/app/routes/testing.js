import Ember from 'ember';

export default Ember.Route.extend({
	//auth: Ember.inject.service('session'),
	model() {
		var test = this.store.findRecord('clientprofile',5)

		return test
		
	}
});

