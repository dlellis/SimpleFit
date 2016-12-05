import Ember from 'ember';

export default Ember.Controller.extend({
	newfield: 'testdata',

	computedField: Ember.computed('newfield', function() {
		const newfield = this.get('newfield');
		return newfield+"+";
	})
});
