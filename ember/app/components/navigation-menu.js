import Ember from 'ember';

export default Ember.Component.extend({
  //auth: Ember.inject.service('session'),
  	value: false,
  	numAlert: 1, //need to update to a computed property of number of pending requests
	actions: {
		showNotifications: function(){
		this.set('showNotifications', !this.get('showNotifications'));
		this.set('value', true)
		},
	},

});
