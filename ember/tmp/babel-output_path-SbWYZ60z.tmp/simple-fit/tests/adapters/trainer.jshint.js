define('simple-fit/tests/adapters/trainer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | adapters/trainer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/trainer.js should pass jshint.');
  });
});