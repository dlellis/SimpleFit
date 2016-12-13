import Ember from 'ember';

// const WorkoutList = Ember.Component.extend({});

// WorkoutList.reopenClass({
//   positionalParams: ['title', 'body']
// });
function lookup(name, list) {
    for(var i = 0, len = list.length; i < len; i++) {
        if( list[ i ].name === name )
            return true;
    }
    return false;
}


function search(name, list){
    for (var i=0; i < list.length; i++) {
        if (list[i].name === name) {
            return list[i];
        }
    }
}

function replaceset(newitem, list){
    
    var item;
    for (var i=0; i < list.length; i++) {
        if (list[i].name === newitem.name) {
            list[i].sset = newitem.sset
        }
        else{


        }
    }
    //list.removeObject(item);
    return list;
}

function replacerep(newitem, list){
    
    var item;
    for (var i=0; i < list.length; i++) {
        if (list[i].name === newitem.name) {
            list[i].srep = newitem.srep
        }
        else{


        }
    }
    //list.removeObject(item);
    return list;
}






export default Ember.Component.extend({
  store: Ember.inject.service(),
  expanded: [],
  exercises: [],
  errorhere: '',
  exdict: [],
  workname: '',
  ok: 'hihi',

  nums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],  
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

      if (lookup(ex.get('name'), this.exdict)){        
        console.log('already here')
        this.set('errorhere',ex.get('name')+' is already in the workout');
        return

      }

      else{
        var d = {}
        d['name'] = ex.get('name')
        this.exdict.addObject(d);        
        console.log('not here')
        
      }
    },
    removeExercise: function(ex){

      var test = $.grep(this.exdict, function(e){ 
      return e.name != ex; 
      });
      this.set('exdict', test);
      this.set('errorhere', '')
      // console.log(ex);
    },

    addSet: function(value){
      var values =  value.split("|")
      var d = {};
      d['name'] = values[0];
      d['sset'] = values[1];
      var l = replaceset(d, this.exdict);
      this.set('exdict', l);


    },
    addRep: function(value){
      var values =  value.split("|")
      var d = {};
      d['name'] = values[0];
      d['srep'] = values[1];
      var l = replacerep(d, this.exdict);
      this.set('exdict', l);      

    },
    saveWorkout: function(ex){
      // const exs = []
      var val;
      var idea = this;

      // for (var i=0; i < this.exdict.length; i++) {
      //     val.addObject(this.exdict[i]);

      // };


      var work = this.get('store').createRecord('clientworkout', {
          name: this.get('workname'),
          //exercise: exs,

      }); 

      work.save().then(function(workd){
        for (var i=0; i < idea.exdict.length; i++) {
        const ex2 = idea.get('store').createRecord('clientexercise', {
            name: idea.exdict[i].name,
            suggestsets: idea.exdict[i].sset,
            suggestreps: idea.exdict[i].srep,
            workout: work,
            
          });
        ex2.save()        
        
        };
        idea.transitionTo('index');
        });
        

  
      },


  },
});
