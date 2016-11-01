import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('recipes', 6); //How do i get this dynamically?
    //params.id???
  }
});
