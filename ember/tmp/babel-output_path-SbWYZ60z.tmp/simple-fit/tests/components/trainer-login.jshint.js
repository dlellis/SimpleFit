define('simple-fit/tests/components/trainer-login.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | components/trainer-login.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/trainer-login.js should pass jshint.\ncomponents/trainer-login.js: line 7, col 67, Missing semicolon.\ncomponents/trainer-login.js: line 6, col 15, \'item\' is defined but never used.\n\n2 errors');
  });
});