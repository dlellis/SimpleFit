define('simple-fit/tests/models/client.jshint', ['exports'], function (exports) {
  'use strict';

  QUnit.module('JSHint | models/client.js');
  QUnit.test('should pass jshint', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/client.js should pass jshint.');
  });
});