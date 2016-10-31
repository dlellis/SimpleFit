import Ember from 'ember';

export default Ember.Route.extend({
  model(clients) {
    return this.store.findAll('clients');
  }
});
