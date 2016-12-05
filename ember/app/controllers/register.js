import Ember from 'ember';

export default Ember.Controller.extend({
	confirmpassword: '',
	showPolicy: false,
	success: false,
	genders: ['Male', 'Female', 'Other'],
	states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
	agree: false,


  //client-side validators
  usernameChanged: Ember.observer('content.user.username', function(){
    //validate here
  }),
  passwordChanged: Ember.observer('content.user.password', function(){
    var user = this.get('content').user;
    if (user.get('password')==undefined||user.get('password')==''){
        this.set('passworderror', 'You must specify a password.');
        this.set('passwordclasses', 'has-error');
    }
    else if (user.get('password').length<8){
      this.set('passworderror', 'Your password must be at least 8 characters');
      this.set('passwordclasses', 'has-error');
    }
    else {
      this.set('passworderror', null);
      this.set('passwordclasses', '');
    }
  }),
  //...other validators go here

  //actions
	actions: {
		showPolicy: function(){
			this.set('showPolicy', !this.get('showPolicy'));
		},
		register: function(){
			this.set('validationErrorMsg', '');
			var user = this.get('content').user;
      var basicprofile = this.get('content').basicprofile;
      var clientprofile = this.get('content').clientprofile;
      var t = this;
      //probably want to do some additional validation here
			if(user.get('password') === this.get('confirmpassword')){
        var requestdata = {
          'username': user.get('username'),
          'password': user.get('password'),
          'certification': clientprofile.get('certification'),
          'email': user.get('email'),
          'firstname': basicprofile.get('firstname'),
          'lastname': basicprofile.get('lastname'),
          'gender': basicprofile.get('gender'),
          'age': basicprofile.get('age'),
          'city': basicprofile.get('city'),
          'state': basicprofile.get('state'),
        };
				Ember.$.post('../api/register/', requestdata, function(response){
          var errMsg = '';
          if(response.data.status ==="error"){
            if(response.data.username){
              errMsg = response.data.username;
            } 
            else if(response.data.email){
              errMsg = response.data.email;
            }
            else {
              errMsg = "An unknown error occured. Please try again";
            }
            t.set('validationErrorMsg', errMsg);
          }
          else{
            //success
            t.set('success', true);
            //could forward the user to another page (like home)
            //t.transitionTo('home');
          }
          
          
        });
			}
			else {
				this.set('validationErrorMsg', 'Passwords don\'t match');
			}

		},
		
	}
});