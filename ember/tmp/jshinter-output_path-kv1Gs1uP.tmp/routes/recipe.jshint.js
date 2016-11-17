QUnit.module('JSHint | routes/recipe.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/recipe.js should pass jshint.\nroutes/recipe.js: line 4, col 9, \'params\' is defined but never used.\n\n1 error');
});
