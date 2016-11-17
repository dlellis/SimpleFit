QUnit.module('JSHint | components/login.js');
QUnit.test('should pass jshint', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/login.js should pass jshint.\ncomponents/login.js: line 7, col 63, Missing semicolon.\ncomponents/login.js: line 6, col 11, \'item\' is defined but never used.\n\n2 errors');
});
