import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

    actions: {
    rmDiet(prof) {
        let c = this.get('store').peekRecord('clientprofile',prof.get('id'));
        c.set('dietitian',null);
        c.save();    
    },

    rmTrain(prof) {
        let c = this.get('store').peekRecord('clientprofile',prof.get('id'));
        c.set('trainer',null);
        c.save();
    },
   
    }
});
