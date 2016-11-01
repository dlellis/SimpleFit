import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		login(item) {
		this.get('session').setProperties({isLoggedIn: true,})

		},
	},
});
