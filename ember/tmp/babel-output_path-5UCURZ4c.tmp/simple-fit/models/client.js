define('simple-fit/models/client', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    model: function model() {
      firstname: _emberData['default'].attr('string');
      lastname: _emberData['default'].attr('string');
    }
  });
});