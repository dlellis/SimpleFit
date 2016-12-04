import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
    approveClient(clientprofile) {
    	var cid =  clientprofile.get('id')
    	let c = this.get('store').peekRecord('clientprofile',cid)
    	var tid = this.get('auth.user.basicprofile.trainerprofile.id')
    	let t = this.get('store').peekRecord('trainerprofile',tid)
    	//console.log(Ember.typeOf(t))
    	c.set('trainer',t)
    	c.set('trainerpending',null)
    	c.save()

    	//var cid = this.get('auth').get('user').get('basicprofile').get('clientprofile').get('id')
    	//let c = this.get('store').peekRecord('clientprofile',cid);
    	//var tid = basicprofile.get('trainerprofile').get('id');
    	//let t = this.get('store').peekRecord('trainerprofile',tid);
    	//c.set('trainerpending',t);
    	//c.save();


    },
    },


	
});
