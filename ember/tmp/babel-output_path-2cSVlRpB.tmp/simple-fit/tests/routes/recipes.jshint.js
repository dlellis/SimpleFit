define('simple-fit/tests/routes/recipes.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/recipes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/recipes.js should pass jshint.');
  });
});