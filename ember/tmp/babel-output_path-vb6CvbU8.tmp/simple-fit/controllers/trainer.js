define('simple-fit/controllers/trainer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addclient: function addclient(ok) {
        console.log(this.controller.get('firstname'));
      }
    }
  });
});