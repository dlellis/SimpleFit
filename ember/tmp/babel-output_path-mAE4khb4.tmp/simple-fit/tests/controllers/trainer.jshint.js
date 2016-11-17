define('simple-fit/tests/controllers/trainer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | controllers/trainer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/trainer.js should pass jshint.\ncontrollers/trainer.js: line 14, col 11, \'del\' is defined but never used.\n\n1 error');
  });
});