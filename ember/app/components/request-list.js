import Ember from 'ember';

export default Ember.Component.extend({
	store: Ember.inject.service(),

	actions: {
        approvetClient(clientprofile) {
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
        approvedClient(clientprofile) {
            var cid =  clientprofile.get('id')
            let c = this.get('store').peekRecord('clientprofile',cid)
            var tid = this.get('auth.user.basicprofile.dietitianprofile.id')
            let t = this.get('store').peekRecord('dietitianprofile',tid)
            //console.log(Ember.typeOf(t))
            c.set('dietitian',t)
            c.set('dietitianpending',null)
            c.save()
        },

        rejectdClient(clientprofile) {
            var cid = clientprofile.get('id')
            let c = this.get('store').peekRecord('clientprofile',cid)
            c.set('dietitianpending',null)
            c.save();  
        },

        rejecttClient(clientprofile) {
            var cid = clientprofile.get('id')
            let c = this.get('store').peekRecord('clientprofile',cid)
            c.set('trainerpending',null)
            c.save();  
        },
    },


	
});
