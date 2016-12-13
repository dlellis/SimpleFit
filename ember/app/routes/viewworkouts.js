import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('basicprofile', params.basicprofile_id); //How do i get this dynamically?
    //params.id???
  }
});
