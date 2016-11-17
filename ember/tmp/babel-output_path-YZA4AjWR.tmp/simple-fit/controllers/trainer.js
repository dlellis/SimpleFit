define('simple-fit/controllers/trainer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addclient: function addclient() {
        var client = this.store.createRecord('client', {
          firstname: this.get('firstname'),
          lastname: this.get('lastname')
        });
        client.save();
        console.log(this.get('firstname'));
      },
      delclient: function delclient(client) {
        var del = this.store.findRecord('client', client.id, { backgroundReload: false }).then(function (post) {
          post.destroyRecord(); // => DELETE to /posts/2
        });
        console.log(client.get('firstname'));
      }
    }
  });
});