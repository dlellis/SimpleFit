import Ember from 'ember';

export default Ember.Controller.extend({
  confirmpassword: '',
  showPolicy: false,
  success: false,
  genders: ['Male', 'Female', 'Other'],
  states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
  agree: false,
  err: [],


  //client-side validators
  usernameChanged: Ember.observer('content.user.username', function(){
    var user = this.get('content').user;
    //leave it up to server side(has to call anyways)
  }),
  passwordChanged: Ember.observer('content.user.password', function(err){
    var user = this.get('content').user;
    var one = 'Passwords don\'t match'
    var two = 'You must specify a password.'
    var three = 'Your password must be at least 8 characters'


    if (user.get('password')!=undefined&&user.get('password')==''){
        this.err.removeObject(three)
        this.set('passworderror', two);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(two);
    }
    else if (user.get('password')!=undefined&&user.get('password').length<8){
      this.err.removeObject(two)
      this.set('passworderror', three);
      this.set('passwordclasses', 'has-error');
      this.err.addObject(three);
    }
    else {
      this.err.removeObjects([one,two,three])
      this.get('validationErrorMsg', this.err);
      this.set('passworderror', null);
      this.set('passwordclasses', '');
      
    }
  }),
  firstnameChange: Ember.observer('content.basicprofile.firstname', function(err){
    var basicprofile = this.get('content').basicprofile;
    var one = 'Your first name must contain only letters';
    var two = 'Uhm.. your first name should only be 30 characters or less';
    if (!/^[a-z]+$/i.test(basicprofile.get('firstname'))){
      this.err.removeObject(two),
      this.set('firstnameerror', one);
      this.set('firstnameclasses', 'has-error');
      this.err.addObject(one);
      //this.set('validationErrorMsg', this.err);
    }
    else if (basicprofile.get('firstname')!=undefined&&basicprofile.get('firstname').length>30){
      this.err.removeObject(one)
      
      console.log(this.get('validationErrorMsg'))
      this.set('firstnameerror', two);
      this.set('firstnameclasses', 'has-error'); 
      //this.set('validationErrorMsg', ['less than 30'])
      this.err.addObject(two);
      //this.set('validationErrorMsg', this.err);   
    }

    else{
      this.err.removeObjects([one,two]);
      this.get('validationErrorMsg', this.err);
      this.set('firstnameerror', null);
      this.set('firstnameclasses', '');
    }
  }),
  lastnameChange: Ember.observer('content.basicprofile.lastname', function(){
    var basicprofile = this.get('content').basicprofile;
    var one = 'Your last name must contain only letters';
    var two = 'Uhm.. your last name should only be 30 characters or less';
    if (!/^[a-z]+$/i.test(basicprofile.get('lastname'))){
      this.err.removeObject(two),
      this.err.addObject(one);
      this.set('lastnameerror', one);
      this.set('lastnameclasses', 'has-error');

    }
    else if (basicprofile.get('lastname')!=undefined&&basicprofile.get('lastname').length>30){
      this.err.removeObject(one),
      this.err.addObject(two);      
      this.set('lastnameerror', two);
      this.set('lastnameclasses', 'has-error'); 
          
    }
    else{
      this.err.removeObjects([one,two]);
      this.get('validationErrorMsg', this.err);
      this.set('lastnameerror', null);
      this.set('lastnameclasses', '');
    }
  }),
  emailChange: Ember.observer('content.user.email', function(){
    var user = this.get('content').user;
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var one = 'Not a valid email';
    
    if (user.get('email')!=undefined&&!reg.test(user.get('email'))){
      this.err.addObject(one);
      this.set('emailerror', one);
      this.set('emailclasses', 'has-error');

    }
    else{
      this.err.removeObjects([one]);
      this.get('validationErrorMsg', this.err);
      this.set('emailerror', null);
      this.set('emailclasses', '');

    }
  }),
  ageChange: Ember.observer('content.basicprofile.age', function(){
    var basicprofile = this.get('content').basicprofile;
    var one = 'Age must be a valid number';
    var two = 'Must be at least 12 years old to use this page';
    var three = 'You don\'t look a day over 130. Use your real age'

    if (basicprofile.get('age')!=undefined&&!/^\+?(0|[1-9]\d*)$/.test(basicprofile.get('age'))){
      this.err.addObject(one);
      this.err.removeObjects([two,three]);
      this.set('ageerror', one);
      this.set('ageclasses', 'has-error');


    }
    else if (basicprofile.get('age')<12){
      this.err.addObject(two);
      this.err.removeObjects([one,three]);
      this.set('ageerror', two);
      this.set('ageclasses', 'has-error');      

    }
    else if (basicprofile.get('age')>130){
      this.err.addObject(three);
      this.err.removeObjects([one,two]);
      this.set('ageerror', three);
      this.set('ageclasses', 'has-error');
    }
    else{
      this.err.removeObjects([one,two,three]);
      this.set('ageerror', null);
      this.set('ageclasses', '');    

    }

  }),
  genderChange: Ember.observer('content.basicprofile.gender', function(){
    //noneed for validators here
  }),
  cityChange: Ember.observer('content.basicprofile.city', function(){
    var basicprofile = this.get('content').basicprofile;
    var one = 'Your city must contain only letters';
    var two = 'Uhm.. your city should only be 30 characters or less';
    if (!/^[a-z]+$/i.test(basicprofile.get('city'))){
      this.err.removeObject(two),
      this.err.addObject(one);
      this.set('cityerror', one);
      this.set('cityclasses', 'has-error');

    }
    else if (basicprofile.get('city')!=undefined&&basicprofile.get('city').length>30){
      this.err.removeObject(one),
      this.err.addObject(two);      
      this.set('cityerror', two);
      this.set('cityclasses', 'has-error'); 
          
    }
    else{
      this.err.removeObjects([one,two]);
      this.get('validationErrorMsg', this.err);
      this.set('cityerror', null);
      this.set('cityclasses', '');
    }
  }),
  stateChange: Ember.observer('content.user.state', function(){
    //no need for validators here
  }),


  //actions
  actions: {
    showPolicy: function(){
      this.set('showPolicy', !this.get('showPolicy'));
    },
    cregister: function(err){
      this.set('validationErrorMsg', []);
      var user = this.get('content').user;
      var basicprofile = this.get('content').basicprofile;
      var t = this;
      if (user.get('username')==undefined||user.get('password')==undefined||user.get('email')==undefined||
        basicprofile.get('firstname')==undefined||basicprofile.get('lastname')==undefined||
        basicprofile.get('gender')==undefined||basicprofile.get('age')==undefined||basicprofile.get('city')==undefined||
        basicprofile.get('state')==undefined){
        this.err.addObject('No field can be blank. Sorry')
        this.set('validationErrorMsg', this.err)

      }
      else if (!(user.get('username')==undefined||user.get('password')==undefined||user.get('email')==undefined||
        basicprofile.get('firstname')==undefined||basicprofile.get('lastname')==undefined||
        basicprofile.get('gender')==undefined||basicprofile.get('age')==undefined||basicprofile.get('city')==undefined||
        basicprofile.get('state')==undefined)){
        this.err.removeObject('No field can be blank. Sorry')
        this.set('validationErrorMsg', this.err)
      if (!this.err[0]){
        var requestdata = {
          'username': user.get('username'),
          'password': user.get('password'),
          'email': user.get('email'),
          'firstname': basicprofile.get('firstname'),
          'lastname': basicprofile.get('lastname'),
          'gender': basicprofile.get('gender'),
          'age': basicprofile.get('age'),
          'city': basicprofile.get('city'),
          'state': basicprofile.get('state'),
          'membertype': basicprofile.get('membertype')
          
        };
        Ember.$.post('../api/cregister/', requestdata, function(response){
          //var errMsg = '';
          var errMsg = [];
          if(response.data.status ==="error"){
            if(response.data.username){
              errMsg.addObject(response.data.username)

            } 
            if(response.data.email){
              
              errMsg.addObject(response.data.email)
            }
            if(response.data.password){
              
              errMsg.addObject(response.data.password)
            }
            if(response.data.gender){
              errMsg.addObject(response.data.gender)
            }
            if(response.data.state){
              errMsg.addObject(response.data.state)
            }                        
            if(response.data.age){
              errMsg.addObject(response.data.age)
            } 
            if(response.data.firstname){
              errMsg.addObject(response.data.firstname)
            }             
            if(response.data.lastname){
              errMsg.addObject(response.data.lastname)
            }             
            if(response.data.city){
              errMsg.addObject(response.data.city)
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
        this.set('validationErrorMsg', this.err);
      }        
      }
      else{

      }


    },
    
  }
});