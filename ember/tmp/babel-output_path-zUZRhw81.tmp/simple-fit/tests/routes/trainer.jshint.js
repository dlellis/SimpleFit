define('simple-fit/tests/routes/trainer.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | routes/trainer.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/trainer.js should pass jshint.');
  });
});