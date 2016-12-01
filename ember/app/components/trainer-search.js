import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
    requestTrainer: function() {
      var client = this.store.createRecord('client', {
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
      });
      client.save();
      console.log(this.get('firstname'));
    },
   
  }

});
