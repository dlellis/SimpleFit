import Ember from 'ember';

export default Ember.Route.extend({
	//auth: Ember.inject.service('session'),
	model(params) {
		return this.store.findRecord('clientprofile', 14, {include: 'basicinfo'});
	}
});
