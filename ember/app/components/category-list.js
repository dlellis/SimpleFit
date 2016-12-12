import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service(),
  expanded: [],
  exercises: [],
  errorhere: 'hi',
  
  actions: {
    toggleExercise(value) {
    	this.expanded.forEach(function(element){
    		element.toggleProperty('showExercise');
    	});
    	this.expanded.clear();
      	value.toggleProperty('showExercise');
      	this.expanded.addObject(value)

    },
    
    addExercise: function(ex){

      if (this.exercises.includes(ex.get('name'))){
        console.log('already here')
        this.errorhere = 'is already in the workout';
        return

      }

      else{
        console.log('not here')
        this.exercises.addObject(ex.get('name'))
        var exercise = this.get('store').createRecord('clientexercise',{
        name: ex.get('name'),
        workout: this.get('model.workout'),
      });
      }
    },
  }
});

//   actions: {
//     addclient: function() {
//       var client = this.store.createRecord('client', {
//         firstname: this.get('firstname'),
//         lastname: this.get('lastname'),
//       });
//       client.save();
//       console.log(this.get('firstname'));
//     },
//     delclient: function(client) {
//       var del = this.store.findRecord('client', client.id, { backgroundReload: false }).then(function(post) {
//   post.destroyRecord(); // => DELETE to /posts/2
// });
//       console.log(client.get('firstname'));
//     },
//   }