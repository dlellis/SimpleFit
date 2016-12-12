import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
	model(){
		return RSVP.hash({
		category: this.store.findAll('category'),
		workout: this.store.findRecord('clientworkout',1),

		});
	}	
});

