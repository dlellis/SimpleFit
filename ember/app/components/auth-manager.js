import Ember from 'ember';

export default Ember.Component.extend({
  session: Ember.inject.service('session'),
  actions: {
	login() {
		this.get('session').setProperties({isLoggedIn: true,});

	},

    logout() {
    	this.get('session').setProperties({isLoggedIn: false,});

    },
  },

});
