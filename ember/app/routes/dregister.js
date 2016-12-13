import Ember from 'ember';
import RSVP from 'rsvp';

export default Ember.Route.extend({
  model(){
    return RSVP.hash({
      user: this.store.createRecord('user'),
      basicprofile: this.store.createRecord('basicprofile'),
      dietitianprofile: this.store.createRecord('dietitianprofile'),
    });
  }	
});
