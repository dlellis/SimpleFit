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
      }
    }
  });
});