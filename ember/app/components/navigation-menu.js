import Ember from 'ember';

export default Ember.Component.extend({
  //auth: Ember.inject.service('session'),
  	value: false,
	actions: {
		showNotifications: function(){
		this.set('showNotifications', !this.get('showNotifications'));
		this.set('value', true)
		},

		noteCount: function(){
			return 1;
		},

	},

});
