import Ember from 'ember';

export default Ember.Component.extend({
  expanded: [],
  actions: {
    toggleExercise(value) {
    	this.expanded.forEach(function(element){
    		element.toggleProperty('showExercise');
    	});
    	this.expanded.clear();
      	value.toggleProperty('showExercise');
      	this.expanded.addObject(value)

    }
  }
});

// expand(item) {
//   if (!item) {
//     return;
//   }
//   item.toggleProperty('isExpanded', true);
// }