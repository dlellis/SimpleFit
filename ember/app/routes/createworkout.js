import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(params){
		return RSVP.hash({
		category: this.store.findAll('category'),
		basicprofile: this.store.findRecord('basicprofile', params.basicprofile_id),
		// clientexercise: this.store.findAll('clientexercise'),
		// workout: this.store.findRecord('clientworkout',1),
		// workout: this.store.createRecord('clientworkout'),

		});
	}	
});

