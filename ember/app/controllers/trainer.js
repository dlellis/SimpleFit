import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addclient: function() {
      var client = this.store.createRecord('client', {
        firstname: this.get('firstname'),
        lastname: this.get('lastname'),
      });
      client.save();
      console.log(this.get('firstname'));
    },
    delclient: function(client) {
      var del = this.store.findRecord('client', client.id, { backgroundReload: false }).then(function(post) {
  post.destroyRecord(); // => DELETE to /posts/2
});
      console.log(client.get('firstname'));
    },
  }
});
