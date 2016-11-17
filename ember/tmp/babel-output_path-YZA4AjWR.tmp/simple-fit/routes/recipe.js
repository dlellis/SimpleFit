define('simple-fit/routes/recipe', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('recipes', 6); //How do i get this dynamically?
      //params.id???
    }
  });
});