define('simple-fit/tests/models/recipes.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/recipes.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/recipes.js should pass jshint.');
  });
});