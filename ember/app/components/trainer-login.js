import Ember from 'ember';

export default Ember.Component.extend({
	actions: {

	    login(item) {
	    	this.get('session').setProperties({isLoggedIn: true,})

	    },
  },
});
