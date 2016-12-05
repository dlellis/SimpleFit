import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
    requestTrainer(basicprofile) {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
    	let c = this.get('store').peekRecord('clientprofile',cid);
    	var tid = basicprofile.get('trainerprofile').get('id');
    	let t = this.get('store').peekRecord('trainerprofile',tid);
    	c.set('trainerpending',t);
    	c.save();


    
    },
   
	}
});
