import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
    requestDietitian(basicprofile) {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
    	let c = this.get('store').peekRecord('clientprofile',cid);
    	var tid = basicprofile.get('dietitianprofile').get('id');
    	let t = this.get('store').peekRecord('dietitianprofile',tid);
    	c.set('dietitianpending',t);
        console.log(cid)
        console.log(c)
        console.log(tid)
        console.log(t)
        console.log(c.get(dietitianpending.id))
    	c.save();
    
    },
    cancelRequest() {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
        let c = this.get('store').peekRecord('clientprofile',cid)
        c.set('dietitianpending',null)
        c.save();    
    },
   
	}
});
