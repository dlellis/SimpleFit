import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
    requestTrainer(prof) {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
    	let c = this.get('store').peekRecord('clientprofile',cid);
    	var tid = prof.get('id');
    	let t = this.get('store').peekRecord('trainerprofile',tid);
    	c.set('trainerpending',t);
    	c.save();
    },
    cancelRequest() {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
        let c = this.get('store').peekRecord('clientprofile',cid)
        c.set('trainerpending',null)
        c.save();    
    },
   
	}
});
