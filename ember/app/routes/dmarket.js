import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		// return this.store.findAll('basicprofile');
		return this.get('store').query('basicprofile', {membertype: "dietitian"});
	}
});
