import Ember from 'ember';

export default Ember.Component.extend({
session: Ember.inject.service('session'),
  actions: {
    login(item){
    	this.get('session').setProperties({isLoggedIn: true,})

    },

  },

});





