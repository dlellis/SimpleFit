import Ember from 'ember';

export default Ember.Route.extend({
	auth: Ember.inject.service('session'),
	store: Ember.inject.service(),
	 model: function() {
	 	
	 	
	 	// return this.store.findAll('basicprofile');
	 	// var t = this.get('auth').get('user').get('basicprofile').get('id')
	 	// if (t == 'trainer'){
	 	// 	console.log('true')
	 	// }
	 	// else{
	 	// 	console.log(t)
	 	// }
	 	// console.log(t+'hi')
    // return this.get('auth').get('user');
  	}
	// model() {
	// 	// var cid = this.auth.get('user.basicprofile.id')
	// 	// console.log(cid)	
	// 	// // var test = this.store.findRecord('clientprofile',cid);//,content.get('user').get('clientprofile').get('id'))//.then(function(response){
	// 	// // console.log(this.store.get(auth.user.userid))
	// 	// });

		
		
	// }
});

