import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:newfeature', 'Unit | Controller | newfeature', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

// Replace this with your real tests.
test('computedField test', function(assert) {
  let controller = this.subject();
  controller.set('newfield','test');
  assert.equal(controller.get('computedField'),'test/');
  assert.ok(controller);
});
