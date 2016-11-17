define('simple-fit/models/recipes', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr(),
		image: _emberData['default'].attr(),
		ingredients: _emberData['default'].attr(),
		steps: _emberData['default'].attr(),
		link: _emberData['default'].attr()
	});
});