import Ember from 'ember';

export default Ember.Component.extend({
    store: Ember.inject.service(),

    actions: {
    requestDietitian(prof) {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
        let c = this.get('store').peekRecord('clientprofile',cid);
        var tid = prof.get('id');
        let t = this.get('store').peekRecord('dietitianprofile',tid);
        c.set('dietitianpending',t);
        c.save();
    },
    cancelRequest() {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
        let c = this.get('store').peekRecord('clientprofile',cid)
        c.set('dietitianpending',null)
        c.save();    
    },
    rmDiet() {
        var cid = this.get('auth.user.basicprofile.clientprofile.id')
        let c = this.get('store').peekRecord('clientprofile',cid)
        c.set('dietitian',null)
        c.save();    
    },
   
    }
});
