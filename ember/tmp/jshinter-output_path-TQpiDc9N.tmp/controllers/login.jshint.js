QUnit.module('JSHint | controllers/login.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/login.js should pass jshint.\ncontrollers/login.js: line 6, col 63, Missing semicolon.\ncontrollers/login.js: line 5, col 15, \'item\' is defined but never used.\n\n2 errors');
});
