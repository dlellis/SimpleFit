"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('simple-fit/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    //host: 'http://localhost:8000/api/',
    namespace: 'api',
    buildURL: function buildURL(type, id, record) {
      return this._super(type, id, record) + '/';
    }

  });
});
define('simple-fit/adapters/trainer', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
		//host: 'http://localhost:8000/api/',
		//var clients = this.get('store').findAll('clients');
	});
});
define('simple-fit/app', ['exports', 'ember', 'simple-fit/resolver', 'ember-load-initializers', 'simple-fit/config/environment'], function (exports, _ember, _simpleFitResolver, _emberLoadInitializers, _simpleFitConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _simpleFitConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _simpleFitConfigEnvironment['default'].podModulePrefix,
    Resolver: _simpleFitResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _simpleFitConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('simple-fit/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'simple-fit/config/environment'], function (exports, _emberCliAppVersionComponentsAppVersion, _simpleFitConfigEnvironment) {

  var name = _simpleFitConfigEnvironment['default'].APP.name;
  var version = _simpleFitConfigEnvironment['default'].APP.version;

  exports['default'] = _emberCliAppVersionComponentsAppVersion['default'].extend({
    version: version,
    name: name
  });
});
define('simple-fit/components/auth-manager', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Component.extend({
				auth: _ember['default'].inject.service('session'),
				actions: {

						//   login: function(){
						// 	this.get('auth').login();
						// },
						logout: function logout() {
								this.get('auth').logout();
						}

				}

		});
});
define('simple-fit/components/bs-accordion-item', ['exports', 'ember-bootstrap/components/bs-accordion-item'], function (exports, _emberBootstrapComponentsBsAccordionItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordionItem['default'];
    }
  });
});
define('simple-fit/components/bs-accordion', ['exports', 'ember-bootstrap/components/bs-accordion'], function (exports, _emberBootstrapComponentsBsAccordion) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAccordion['default'];
    }
  });
});
define('simple-fit/components/bs-alert', ['exports', 'ember-bootstrap/components/bs-alert'], function (exports, _emberBootstrapComponentsBsAlert) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsAlert['default'];
    }
  });
});
define('simple-fit/components/bs-button-group', ['exports', 'ember-bootstrap/components/bs-button-group'], function (exports, _emberBootstrapComponentsBsButtonGroup) {
  exports['default'] = _emberBootstrapComponentsBsButtonGroup['default'];
});
define('simple-fit/components/bs-button', ['exports', 'ember-bootstrap/components/bs-button'], function (exports, _emberBootstrapComponentsBsButton) {
  exports['default'] = _emberBootstrapComponentsBsButton['default'];
});
define('simple-fit/components/bs-collapse', ['exports', 'ember-bootstrap/components/bs-collapse'], function (exports, _emberBootstrapComponentsBsCollapse) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsCollapse['default'];
    }
  });
});
define('simple-fit/components/bs-dropdown-button', ['exports', 'ember-bootstrap/components/bs-dropdown-button'], function (exports, _emberBootstrapComponentsBsDropdownButton) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownButton['default'];
    }
  });
});
define('simple-fit/components/bs-dropdown-menu', ['exports', 'ember-bootstrap/components/bs-dropdown-menu'], function (exports, _emberBootstrapComponentsBsDropdownMenu) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownMenu['default'];
    }
  });
});
define('simple-fit/components/bs-dropdown-toggle', ['exports', 'ember-bootstrap/components/bs-dropdown-toggle'], function (exports, _emberBootstrapComponentsBsDropdownToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdownToggle['default'];
    }
  });
});
define('simple-fit/components/bs-dropdown', ['exports', 'ember-bootstrap/components/bs-dropdown'], function (exports, _emberBootstrapComponentsBsDropdown) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsDropdown['default'];
    }
  });
});
define('simple-fit/components/bs-form-element', ['exports', 'ember-bootstrap/components/bs-form-element'], function (exports, _emberBootstrapComponentsBsFormElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormElement['default'];
    }
  });
});
define('simple-fit/components/bs-form-group', ['exports', 'ember-bootstrap/components/bs-form-group'], function (exports, _emberBootstrapComponentsBsFormGroup) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsFormGroup['default'];
    }
  });
});
define('simple-fit/components/bs-form', ['exports', 'ember-bootstrap/components/bs-form'], function (exports, _emberBootstrapComponentsBsForm) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsForm['default'];
    }
  });
});
define('simple-fit/components/bs-input', ['exports', 'ember-bootstrap/components/bs-input'], function (exports, _emberBootstrapComponentsBsInput) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsInput['default'];
    }
  });
});
define('simple-fit/components/bs-modal-backdrop', ['exports', 'ember-bootstrap/components/bs-modal-backdrop'], function (exports, _emberBootstrapComponentsBsModalBackdrop) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBackdrop['default'];
    }
  });
});
define('simple-fit/components/bs-modal-body', ['exports', 'ember-bootstrap/components/bs-modal-body'], function (exports, _emberBootstrapComponentsBsModalBody) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalBody['default'];
    }
  });
});
define('simple-fit/components/bs-modal-dialog', ['exports', 'ember-bootstrap/components/bs-modal-dialog'], function (exports, _emberBootstrapComponentsBsModalDialog) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalDialog['default'];
    }
  });
});
define('simple-fit/components/bs-modal-footer', ['exports', 'ember-bootstrap/components/bs-modal-footer'], function (exports, _emberBootstrapComponentsBsModalFooter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalFooter['default'];
    }
  });
});
define('simple-fit/components/bs-modal-header', ['exports', 'ember-bootstrap/components/bs-modal-header'], function (exports, _emberBootstrapComponentsBsModalHeader) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModalHeader['default'];
    }
  });
});
define('simple-fit/components/bs-modal', ['exports', 'ember-bootstrap/components/bs-modal'], function (exports, _emberBootstrapComponentsBsModal) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsModal['default'];
    }
  });
});
define('simple-fit/components/bs-nav-item', ['exports', 'ember-bootstrap/components/bs-nav-item'], function (exports, _emberBootstrapComponentsBsNavItem) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavItem['default'];
    }
  });
});
define('simple-fit/components/bs-nav', ['exports', 'ember-bootstrap/components/bs-nav'], function (exports, _emberBootstrapComponentsBsNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNav['default'];
    }
  });
});
define('simple-fit/components/bs-navbar-content', ['exports', 'ember-bootstrap/components/bs-navbar-content'], function (exports, _emberBootstrapComponentsBsNavbarContent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarContent['default'];
    }
  });
});
define('simple-fit/components/bs-navbar-nav', ['exports', 'ember-bootstrap/components/bs-navbar-nav'], function (exports, _emberBootstrapComponentsBsNavbarNav) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarNav['default'];
    }
  });
});
define('simple-fit/components/bs-navbar-toggle', ['exports', 'ember-bootstrap/components/bs-navbar-toggle'], function (exports, _emberBootstrapComponentsBsNavbarToggle) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbarToggle['default'];
    }
  });
});
define('simple-fit/components/bs-navbar', ['exports', 'ember-bootstrap/components/bs-navbar'], function (exports, _emberBootstrapComponentsBsNavbar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsNavbar['default'];
    }
  });
});
define('simple-fit/components/bs-popover-element', ['exports', 'ember-bootstrap/components/bs-popover-element'], function (exports, _emberBootstrapComponentsBsPopoverElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopoverElement['default'];
    }
  });
});
define('simple-fit/components/bs-popover', ['exports', 'ember-bootstrap/components/bs-popover'], function (exports, _emberBootstrapComponentsBsPopover) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsPopover['default'];
    }
  });
});
define('simple-fit/components/bs-progress-bar', ['exports', 'ember-bootstrap/components/bs-progress-bar'], function (exports, _emberBootstrapComponentsBsProgressBar) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgressBar['default'];
    }
  });
});
define('simple-fit/components/bs-progress', ['exports', 'ember-bootstrap/components/bs-progress'], function (exports, _emberBootstrapComponentsBsProgress) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsProgress['default'];
    }
  });
});
define('simple-fit/components/bs-select', ['exports', 'ember-bootstrap/components/bs-select'], function (exports, _emberBootstrapComponentsBsSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsSelect['default'];
    }
  });
});
define('simple-fit/components/bs-tab-pane', ['exports', 'ember-bootstrap/components/bs-tab-pane'], function (exports, _emberBootstrapComponentsBsTabPane) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTabPane['default'];
    }
  });
});
define('simple-fit/components/bs-tab', ['exports', 'ember-bootstrap/components/bs-tab'], function (exports, _emberBootstrapComponentsBsTab) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTab['default'];
    }
  });
});
define('simple-fit/components/bs-textarea', ['exports', 'ember-bootstrap/components/bs-textarea'], function (exports, _emberBootstrapComponentsBsTextarea) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTextarea['default'];
    }
  });
});
define('simple-fit/components/bs-tooltip-element', ['exports', 'ember-bootstrap/components/bs-tooltip-element'], function (exports, _emberBootstrapComponentsBsTooltipElement) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltipElement['default'];
    }
  });
});
define('simple-fit/components/bs-tooltip', ['exports', 'ember-bootstrap/components/bs-tooltip'], function (exports, _emberBootstrapComponentsBsTooltip) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapComponentsBsTooltip['default'];
    }
  });
});
define('simple-fit/components/category-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    expanded: [],
    actions: {
      toggleExercise: function toggleExercise(value) {
        this.expanded.forEach(function (element) {
          element.toggleProperty('showExercise');
        });
        this.expanded.clear();
        value.toggleProperty('showExercise');
        this.expanded.addObject(value);
      }
    }
  });

  // expand(item) {
  //   if (!item) {
  //     return;
  //   }
  //   item.toggleProperty('isExpanded', true);
  // }
});
define('simple-fit/components/client-reg', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    confirmpassword: '',
    showPolicy: false,
    success: false,
    genders: ['Male', 'Female', 'Other'],
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    agree: false,

    //client-side validators
    usernameChanged: _ember['default'].observer('content.user.username', function () {
      //validate here
    }),
    passwordChanged: _ember['default'].observer('content.user.password', function () {
      var user = this.get('content').user;
      if (user.get('password') == undefined || user.get('password') == '') {
        this.set('passworderror', 'You must specify a password.');
        this.set('passwordclasses', 'has-error');
      } else if (user.get('password').length < 8) {
        this.set('passworderror', 'Your password must be at least 8 characters');
        this.set('passwordclasses', 'has-error');
      } else {
        this.set('passworderror', null);
        this.set('passwordclasses', '');
      }
    }),
    //...other validators go here

    //actions
    actions: {
      showPolicy: function showPolicy() {
        this.set('showPolicy', !this.get('showPolicy'));
      },
      cregister: function cregister() {
        this.set('validationErrorMsg', '');
        var user = this.get('content').user;
        var basicprofile = this.get('content').basicprofile;
        var trainerprofile = this.get('content').trainerprofile;
        var t = this;
        //probably want to do some additional validation here
        if (user.get('password') === this.get('confirmpassword')) {
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
          _ember['default'].$.post('../api/cregister/', requestdata, function (response) {
            //var errMsg = '';
            var errMsg = [];
            if (response.data.status === "error") {
              if (response.data.username) {
                errMsg.addObject(response.data.username);
              }
              if (response.data.email) {

                errMsg.addObject(response.data.email);
              }
              if (response.data.email) {

                errMsg.addObject(response.data.email);
              }
              if (response.data.gender) {
                errMsg.addObject(response.data.gender);
              }

              t.set('validationErrorMsg', errMsg);
            } else {
              //success
              t.set('success', true);
              //could forward the user to another page (like home)
              //t.transitionTo('home');
            }
          });
        } else {
            this.set('validationErrorMsg', ['Passwords don\'t match']);
          }
      }

    }
  });
});
define('simple-fit/components/ember-wormhole', ['exports', 'ember-wormhole/components/ember-wormhole'], function (exports, _emberWormholeComponentsEmberWormhole) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWormholeComponentsEmberWormhole['default'];
    }
  });
});
define('simple-fit/components/exercise-list', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('simple-fit/components/login-form', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Component.extend({
				auth: _ember['default'].inject.service('session'),
				actions: {

						login: function login() {
								this.get('auth').login();
						}
				}
		});
});
// logout: function(){
// 		this.get('auth').logout();
// 	}
define('simple-fit/components/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({});
});
define('simple-fit/components/navigation-menu', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		//auth: Ember.inject.service('session'),
		value: false,
		actions: {
			showNotifications: function showNotifications() {
				this.set('showNotifications', !this.get('showNotifications'));
				this.set('value', true);
			}
		}

	});
});
define('simple-fit/components/notification-alert', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Component.extend({
				// actions: {
				// showNotifications: function(){
				// 	this.set('showNotifications', !this.get('showNotifications'));
				// },

				// }
		});
});
define('simple-fit/components/register-modal', ['exports', 'ember'], function (exports, _ember) {
		exports['default'] = _ember['default'].Component.extend({});
});
define('simple-fit/components/request-list', ['exports', 'ember'], function (exports, _ember) {
   exports['default'] = _ember['default'].Component.extend({
      store: _ember['default'].inject.service(),

      actions: {
         approveClient: function approveClient(clientprofile) {
            var cid = clientprofile.get('id');
            var c = this.get('store').peekRecord('clientprofile', cid);
            var tid = this.get('auth.user.basicprofile.trainerprofile.id');
            var t = this.get('store').peekRecord('trainerprofile', tid);
            //console.log(Ember.typeOf(t))
            c.set('trainer', t);
            c.set('trainerpending', null);
            c.save();

            //var cid = this.get('auth').get('user').get('basicprofile').get('clientprofile').get('id')
            //let c = this.get('store').peekRecord('clientprofile',cid);
            //var tid = basicprofile.get('trainerprofile').get('id');
            //let t = this.get('store').peekRecord('trainerprofile',tid);
            //c.set('trainerpending',t);
            //c.save();
         }
      }

   });
});
define('simple-fit/components/test-component', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		//auth: Ember.inject.service('session'),
		//test: console.log('auth.user.username')

	});
});
define('simple-fit/components/trainer-login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Component.extend({
		actions: {

			login: function login(item) {
				t;
			}

		}
	});
});
define('simple-fit/components/trainer-search', ['exports', 'ember'], function (exports, _ember) {
    exports['default'] = _ember['default'].Component.extend({
        store: _ember['default'].inject.service(),

        actions: {
            requestTrainer: function requestTrainer(basicprofile) {
                var cid = this.get('auth.user.basicprofile.clientprofile.id');
                var c = this.get('store').peekRecord('clientprofile', cid);
                var tid = basicprofile.get('trainerprofile').get('id');
                var t = this.get('store').peekRecord('trainerprofile', tid);
                c.set('trainerpending', t);
                c.save();
            },
            cancelRequest: function cancelRequest() {
                var cid = this.get('auth.user.basicprofile.clientprofile.id');
                var c = this.get('store').peekRecord('clientprofile', cid);
                c.set('trainerpending', null);
                c.save();
            }

        }
    });
});
define('simple-fit/components/x-option', ['exports', 'emberx-select/components/x-option'], function (exports, _emberxSelectComponentsXOption) {
  exports['default'] = _emberxSelectComponentsXOption['default'];
});
define('simple-fit/components/x-select', ['exports', 'emberx-select/components/x-select'], function (exports, _emberxSelectComponentsXSelect) {
  exports['default'] = _emberxSelectComponentsXSelect['default'];
});
define('simple-fit/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({});
});
define('simple-fit/controllers/cregister', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    confirmpassword: '',
    showPolicy: false,
    success: false,
    genders: ['Male', 'Female', 'Other'],
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    agree: false,
    err: [],

    //client-side validators
    usernameChanged: _ember['default'].observer('content.user.username', function () {
      var user = this.get('content').user;
      //leave it up to server side(has to call anyways)
    }),
    passwordChanged: _ember['default'].observer('content.user.password', function (err) {
      var user = this.get('content').user;
      var one = 'Passwords don\'t match';
      var two = 'You must specify a password.';
      var three = 'Your password must be at least 8 characters';

      if (user.get('password') != undefined && user.get('password') == '') {
        this.err.removeObject(three);
        this.set('passworderror', two);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(two);
      } else if (user.get('password') != undefined && user.get('password').length < 8) {
        this.err.removeObject(two);
        this.set('passworderror', three);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(three);
      } else {
        this.err.removeObjects([one, two, three]);
        this.get('validationErrorMsg', this.err);
        this.set('passworderror', null);
        this.set('passwordclasses', '');
      }
    }),
    firstnameChange: _ember['default'].observer('content.basicprofile.firstname', function (err) {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your first name must contain only letters';
      var two = 'Uhm.. your first name should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('firstname'))) {
        this.err.removeObject(two), this.set('firstnameerror', one);
        this.set('firstnameclasses', 'has-error');
        this.err.addObject(one);
        //this.set('validationErrorMsg', this.err);
      } else if (basicprofile.get('firstname') != undefined && basicprofile.get('firstname').length > 30) {
          this.err.removeObject(one);

          console.log(this.get('validationErrorMsg'));
          this.set('firstnameerror', two);
          this.set('firstnameclasses', 'has-error');
          //this.set('validationErrorMsg', ['less than 30'])
          this.err.addObject(two);
          //this.set('validationErrorMsg', this.err); 
        } else {
            this.err.removeObjects([one, two]);
            this.get('validationErrorMsg', this.err);
            this.set('firstnameerror', null);
            this.set('firstnameclasses', '');
          }
    }),
    lastnameChange: _ember['default'].observer('content.basicprofile.lastname', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your last name must contain only letters';
      var two = 'Uhm.. your last name should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('lastname'))) {
        this.err.removeObject(two), this.err.addObject(one);
        this.set('lastnameerror', one);
        this.set('lastnameclasses', 'has-error');
      } else if (basicprofile.get('lastname') != undefined && basicprofile.get('lastname').length > 30) {
        this.err.removeObject(one), this.err.addObject(two);
        this.set('lastnameerror', two);
        this.set('lastnameclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('lastnameerror', null);
        this.set('lastnameclasses', '');
      }
    }),
    emailChange: _ember['default'].observer('content.user.email', function () {
      var user = this.get('content').user;
      var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var one = 'Not a valid email';

      if (user.get('email') != undefined && !reg.test(user.get('email'))) {
        this.err.addObject(one);
        this.set('emailerror', one);
        this.set('emailclasses', 'has-error');
      } else {
        this.err.removeObjects([one]);
        this.get('validationErrorMsg', this.err);
        this.set('emailerror', null);
        this.set('emailclasses', '');
      }
    }),
    ageChange: _ember['default'].observer('content.basicprofile.age', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Age must be a valid number';
      var two = 'Must be at least 12 years old to use this page';
      var three = 'You don\'t look a day over 130. Use your real age';

      if (basicprofile.get('age') != undefined && !/^\+?(0|[1-9]\d*)$/.test(basicprofile.get('age'))) {
        this.err.addObject(one);
        this.err.removeObjects([two, three]);
        this.set('ageerror', one);
        this.set('ageclasses', 'has-error');
      } else if (basicprofile.get('age') < 12) {
        this.err.addObject(two);
        this.err.removeObjects([one, three]);
        this.set('ageerror', two);
        this.set('ageclasses', 'has-error');
      } else if (basicprofile.get('age') > 130) {
        this.err.addObject(three);
        this.err.removeObjects([one, two]);
        this.set('ageerror', three);
        this.set('ageclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two, three]);
        this.set('ageerror', null);
        this.set('ageclasses', '');
      }
    }),
    genderChange: _ember['default'].observer('content.basicprofile.gender', function () {
      //noneed for validators here
    }),
    cityChange: _ember['default'].observer('content.basicprofile.city', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your city must contain only letters';
      var two = 'Uhm.. your city should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('city'))) {
        this.err.removeObject(two), this.err.addObject(one);
        this.set('cityerror', one);
        this.set('cityclasses', 'has-error');
      } else if (basicprofile.get('city') != undefined && basicprofile.get('city').length > 30) {
        this.err.removeObject(one), this.err.addObject(two);
        this.set('cityerror', two);
        this.set('cityclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('cityerror', null);
        this.set('cityclasses', '');
      }
    }),
    stateChange: _ember['default'].observer('content.user.state', function () {
      //no need for validators here
    }),

    //actions
    actions: {
      showPolicy: function showPolicy() {
        this.set('showPolicy', !this.get('showPolicy'));
      },
      cregister: function cregister(err) {
        this.set('validationErrorMsg', []);
        var user = this.get('content').user;
        var basicprofile = this.get('content').basicprofile;
        var t = this;
        if (user.get('username') == undefined || user.get('password') == undefined || user.get('email') == undefined || basicprofile.get('firstname') == undefined || basicprofile.get('lastname') == undefined || basicprofile.get('gender') == undefined || basicprofile.get('age') == undefined || basicprofile.get('city') == undefined || basicprofile.get('state') == undefined) {
          this.err.addObject('No field can be blank. Sorry');
          this.set('validationErrorMsg', this.err);
        } else if (!(user.get('username') == undefined || user.get('password') == undefined || user.get('email') == undefined || basicprofile.get('firstname') == undefined || basicprofile.get('lastname') == undefined || basicprofile.get('gender') == undefined || basicprofile.get('age') == undefined || basicprofile.get('city') == undefined || basicprofile.get('state') == undefined)) {
          this.err.removeObject('No field can be blank. Sorry');
          this.set('validationErrorMsg', this.err);
          if (!this.err[0]) {
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
            _ember['default'].$.post('../api/cregister/', requestdata, function (response) {
              //var errMsg = '';
              var errMsg = [];
              if (response.data.status === "error") {
                if (response.data.username) {
                  errMsg.addObject(response.data.username);
                }
                if (response.data.email) {

                  errMsg.addObject(response.data.email);
                }
                if (response.data.password) {

                  errMsg.addObject(response.data.password);
                }
                if (response.data.gender) {
                  errMsg.addObject(response.data.gender);
                }
                if (response.data.state) {
                  errMsg.addObject(response.data.state);
                }
                if (response.data.age) {
                  errMsg.addObject(response.data.age);
                }
                if (response.data.firstname) {
                  errMsg.addObject(response.data.firstname);
                }
                if (response.data.lastname) {
                  errMsg.addObject(response.data.lastname);
                }
                if (response.data.city) {
                  errMsg.addObject(response.data.city);
                }
                t.set('validationErrorMsg', errMsg);
              } else {
                //success
                t.set('success', true);
                //could forward the user to another page (like home)
                //t.transitionTo('home');
              }
            });
          } else {
              this.set('validationErrorMsg', this.err);
            }
        } else {}
      }

    }
  });
});
define('simple-fit/controllers/dregister', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    confirmpassword: '',
    showPolicy: false,
    success: false,
    genders: ['Male', 'Female', 'Other'],
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    agree: false,
    err: [],

    //client-side validators
    usernameChanged: _ember['default'].observer('content.user.username', function () {
      //leave it up to server side(has to call anyways)
    }),
    passwordChanged: _ember['default'].observer('content.user.password', function () {
      var user = this.get('content').user;
      var one = 'Passwords don\'t match';
      var two = 'You must specify a password.';
      var three = 'Your password must be at least 8 characters';

      if (user.get('password') != undefined && user.get('password') == '') {
        this.err.removeObject(three);
        this.set('passworderror', two);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(two);
      } else if (user.get('password') != undefined && user.get('password').length < 8) {
        this.err.removeObject(two);
        this.set('passworderror', three);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(three);
      } else {
        this.err.removeObjects([one, two, three]);
        this.get('validationErrorMsg', this.err);
        this.set('passworderror', null);
        this.set('passwordclasses', '');
      }
    }),
    firstnameChange: _ember['default'].observer('content.basicprofile.firstname', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your first name must contain only letters';
      var two = 'Uhm.. your first name should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('firstname'))) {
        this.err.removeObject(two);
        this.set('firstnameerror', one);
        this.set('firstnameclasses', 'has-error');
        this.err.addObject(one);
      } else if (basicprofile.get('firstname') != undefined && basicprofile.get('firstname').length > 30) {
        this.err.removeObject(one);
        this.set('firstnameerror', two);
        this.set('firstnameclasses', 'has-error');
        this.err.addObject(two);
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('firstnameerror', null);
        this.set('firstnameclasses', '');
      }
    }),
    lastnameChange: _ember['default'].observer('content.basicprofile.lastname', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your last name must contain only letters';
      var two = 'Uhm.. your last name should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('lastname'))) {
        this.err.removeObject(two), this.err.addObject(one);
        this.set('lastnameerror', one);
        this.set('lastnameclasses', 'has-error');
      } else if (basicprofile.get('lastname') != undefined && basicprofile.get('lastname').length > 30) {
        this.err.removeObject(one);
        this.err.addObject(two);
        this.set('lastnameerror', two);
        this.set('lastnameclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('lastnameerror', null);
        this.set('lastnameclasses', '');
      }
    }),
    emailChange: _ember['default'].observer('content.user.email', function () {
      var user = this.get('content').user;
      var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var one = 'Not a valid email';

      if (user.get('email') != undefined && !reg.test(user.get('email'))) {
        this.err.addObject(one);
        this.set('emailerror', one);
        this.set('emailclasses', 'has-error');
      } else {
        this.err.removeObjects([one]);
        this.get('validationErrorMsg', this.err);
        this.set('emailerror', null);
        this.set('emailclasses', '');
      }
    }),
    ageChange: _ember['default'].observer('content.basicprofile.age', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Age must be a valid number';
      var two = 'Must be at least 12 years old to use this page';
      var three = 'You don\'t look a day over 130. Use your real age';

      if (basicprofile.get('age') != undefined && !/^\+?(0|[1-9]\d*)$/.test(basicprofile.get('age'))) {
        this.err.addObject(one);
        this.err.removeObjects([two, three]);
        this.set('ageerror', one);
        this.set('ageclasses', 'has-error');
      } else if (basicprofile.get('age') < 12) {
        this.err.addObject(two);
        this.err.removeObjects([one, three]);
        this.set('ageerror', two);
        this.set('ageclasses', 'has-error');
      } else if (basicprofile.get('age') > 130) {
        this.err.addObject(three);
        this.err.removeObjects([one, two]);
        this.set('ageerror', three);
        this.set('ageclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two, three]);
        this.set('ageerror', null);
        this.set('ageclasses', '');
      }
    }),
    genderChange: _ember['default'].observer('content.basicprofile.gender', function () {
      //noneed for validators here
    }),
    cityChange: _ember['default'].observer('content.basicprofile.city', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your city must contain only letters';
      var two = 'Uhm.. your city should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('city'))) {
        this.err.removeObject(two), this.err.addObject(one);
        this.set('cityerror', one);
        this.set('cityclasses', 'has-error');
      } else if (basicprofile.get('city') != undefined && basicprofile.get('city').length > 30) {
        this.err.removeObject(one), this.err.addObject(two);
        this.set('cityerror', two);
        this.set('cityclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('cityerror', null);
        this.set('cityclasses', '');
      }
    }),
    stateChange: _ember['default'].observer('content.user.state', function () {
      //no need for validators here
    }),

    //actions
    actions: {
      showPolicy: function showPolicy() {
        this.set('showPolicy', !this.get('showPolicy'));
      },
      dregister: function dregister(err) {
        this.set('validationErrorMsg', []);
        var user = this.get('content').user;
        var basicprofile = this.get('content').basicprofile;
        var dietitianprofile = this.get('content').dietitianprofile;
        var t = this;
        if (user.get('username') == undefined || user.get('password') == undefined || user.get('email') == undefined || basicprofile.get('firstname') == undefined || basicprofile.get('lastname') == undefined || basicprofile.get('gender') == undefined || basicprofile.get('age') == undefined || basicprofile.get('city') == undefined || basicprofile.get('state') == undefined) {
          this.err.addObject('No field can be blank. Sorry');
          this.set('validationErrorMsg', this.err);
        } else if (!(user.get('username') == undefined || user.get('password') == undefined || user.get('email') == undefined || basicprofile.get('firstname') == undefined || basicprofile.get('lastname') == undefined || basicprofile.get('gender') == undefined || basicprofile.get('age') == undefined || basicprofile.get('city') == undefined || basicprofile.get('state') == undefined)) {
          this.err.removeObject('No field can be blank. Sorry');
          this.set('validationErrorMsg', this.err);
          if (!this.err[0]) {
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
              'membertype': basicprofile.get('membertype'),
              'specialty': dietitianprofile.get('specialty')

            };
            _ember['default'].$.post('../api/dregister/', requestdata, function (response) {
              //var errMsg = '';
              var errMsg = [];
              if (response.data.status === "error") {
                if (response.data.username) {
                  errMsg.addObject(response.data.username);
                }
                if (response.data.email) {

                  errMsg.addObject(response.data.email);
                }
                if (response.data.password) {

                  errMsg.addObject(response.data.password);
                }
                if (response.data.gender) {
                  errMsg.addObject(response.data.gender);
                }
                if (response.data.state) {
                  errMsg.addObject(response.data.state);
                }
                if (response.data.age) {
                  errMsg.addObject(response.data.age);
                }
                if (response.data.firstname) {
                  errMsg.addObject(response.data.firstname);
                }
                if (response.data.lastname) {
                  errMsg.addObject(response.data.lastname);
                }
                if (response.data.city) {
                  errMsg.addObject(response.data.city);
                }
                t.set('validationErrorMsg', errMsg);
              } else {
                //success
                t.set('success', true);
                //could forward the user to another page (like home)
                //t.transitionTo('home');
              }
            });
          } else {
              this.set('validationErrorMsg', this.err);
            }
        } else {}
      }

    }
  });
});
define('simple-fit/controllers/login', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		actions: {
			login: function login() {
				this.get('session'); //.setProperties({isLoggedIn: true,});
			}
		}
	});
});
define('simple-fit/controllers/newfeature', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Controller.extend({
		newfield: 'testdata',

		computedField: _ember['default'].computed('newfield', function () {
			var newfield = this.get('newfield');
			return newfield + "+";
		})
	});
});
define('simple-fit/controllers/register', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    confirmpassword: '',
    showPolicy: false,
    success: false,
    genders: ['Male', 'Female', 'Other'],
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    agree: false,

    //client-side validators
    usernameChanged: _ember['default'].observer('content.user.username', function () {
      //validate here
    }),
    passwordChanged: _ember['default'].observer('content.user.password', function () {
      var user = this.get('content').user;
      if (user.get('password') == undefined || user.get('password') == '') {
        this.set('passworderror', 'You must specify a password.');
        this.set('passwordclasses', 'has-error');
      } else if (user.get('password').length < 8) {
        this.set('passworderror', 'Your password must be at least 8 characters');
        this.set('passwordclasses', 'has-error');
      } else {
        this.set('passworderror', null);
        this.set('passwordclasses', '');
      }
    }),
    //...other validators go here

    //actions
    actions: {
      showPolicy: function showPolicy() {
        this.set('showPolicy', !this.get('showPolicy'));
      },
      register: function register() {
        this.set('validationErrorMsg', '');
        var user = this.get('content').user;
        var basicprofile = this.get('content').basicprofile;
        var clientprofile = this.get('content').clientprofile;
        var t = this;
        //probably want to do some additional validation here
        if (user.get('password') === this.get('confirmpassword')) {
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
            'state': basicprofile.get('state')
          };
          _ember['default'].$.post('../api/register/', requestdata, function (response) {
            var errMsg = '';
            if (response.data.status === "error") {
              if (response.data.username) {
                errMsg = response.data.username;
              } else if (response.data.email) {
                errMsg = response.data.email;
              } else {
                errMsg = "An unknown error occured. Please try again";
              }
              t.set('validationErrorMsg', errMsg);
            } else {
              //success
              t.set('success', true);
              //could forward the user to another page (like home)
              //t.transitionTo('home');
            }
          });
        } else {
            this.set('validationErrorMsg', 'Passwords don\'t match');
          }
      }

    }
  });
});
define('simple-fit/controllers/trainer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    actions: {
      addclient: function addclient() {
        var client = this.store.createRecord('client', {
          firstname: this.get('firstname'),
          lastname: this.get('lastname')
        });
        client.save();
        console.log(this.get('firstname'));
      },
      delclient: function delclient(client) {
        var del = this.store.findRecord('client', client.id, { backgroundReload: false }).then(function (post) {
          post.destroyRecord(); // => DELETE to /posts/2
        });
        console.log(client.get('firstname'));
      }
    }
  });
});
define('simple-fit/controllers/tregister', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    confirmpassword: '',
    showPolicy: false,
    success: false,
    genders: ['Male', 'Female', 'Other'],
    states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    agree: false,
    err: [],

    //client-side validators
    usernameChanged: _ember['default'].observer('content.user.username', function () {
      //leave it up to server side(has to call anyways)
    }),
    passwordChanged: _ember['default'].observer('content.user.password', function () {
      var user = this.get('content').user;
      var one = 'Passwords don\'t match';
      var two = 'You must specify a password.';
      var three = 'Your password must be at least 8 characters';

      if (user.get('password') != undefined && user.get('password') == '') {
        this.err.removeObject(three);
        this.set('passworderror', two);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(two);
      } else if (user.get('password') != undefined && user.get('password').length < 8) {
        this.err.removeObject(two);
        this.set('passworderror', three);
        this.set('passwordclasses', 'has-error');
        this.err.addObject(three);
      } else {
        this.err.removeObjects([one, two, three]);
        this.get('validationErrorMsg', this.err);
        this.set('passworderror', null);
        this.set('passwordclasses', '');
      }
    }),
    firstnameChange: _ember['default'].observer('content.basicprofile.firstname', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your first name must contain only letters';
      var two = 'Uhm.. your first name should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('firstname'))) {
        this.err.removeObject(two);
        this.set('firstnameerror', one);
        this.set('firstnameclasses', 'has-error');
        this.err.addObject(one);
      } else if (basicprofile.get('firstname') != undefined && basicprofile.get('firstname').length > 30) {
        this.err.removeObject(one);
        this.set('firstnameerror', two);
        this.set('firstnameclasses', 'has-error');
        this.err.addObject(two);
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('firstnameerror', null);
        this.set('firstnameclasses', '');
      }
    }),
    lastnameChange: _ember['default'].observer('content.basicprofile.lastname', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your last name must contain only letters';
      var two = 'Uhm.. your last name should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('lastname'))) {
        this.err.removeObject(two), this.err.addObject(one);
        this.set('lastnameerror', one);
        this.set('lastnameclasses', 'has-error');
      } else if (basicprofile.get('lastname') != undefined && basicprofile.get('lastname').length > 30) {
        this.err.removeObject(one);
        this.err.addObject(two);
        this.set('lastnameerror', two);
        this.set('lastnameclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('lastnameerror', null);
        this.set('lastnameclasses', '');
      }
    }),
    emailChange: _ember['default'].observer('content.user.email', function () {
      var user = this.get('content').user;
      var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var one = 'Not a valid email';

      if (user.get('email') != undefined && !reg.test(user.get('email'))) {
        this.err.addObject(one);
        this.set('emailerror', one);
        this.set('emailclasses', 'has-error');
      } else {
        this.err.removeObjects([one]);
        this.get('validationErrorMsg', this.err);
        this.set('emailerror', null);
        this.set('emailclasses', '');
      }
    }),
    ageChange: _ember['default'].observer('content.basicprofile.age', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Age must be a valid number';
      var two = 'Must be at least 12 years old to use this page';
      var three = 'You don\'t look a day over 130. Use your real age';

      if (basicprofile.get('age') != undefined && !/^\+?(0|[1-9]\d*)$/.test(basicprofile.get('age'))) {
        this.err.addObject(one);
        this.err.removeObjects([two, three]);
        this.set('ageerror', one);
        this.set('ageclasses', 'has-error');
      } else if (basicprofile.get('age') < 12) {
        this.err.addObject(two);
        this.err.removeObjects([one, three]);
        this.set('ageerror', two);
        this.set('ageclasses', 'has-error');
      } else if (basicprofile.get('age') > 130) {
        this.err.addObject(three);
        this.err.removeObjects([one, two]);
        this.set('ageerror', three);
        this.set('ageclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two, three]);
        this.set('ageerror', null);
        this.set('ageclasses', '');
      }
    }),
    genderChange: _ember['default'].observer('content.basicprofile.gender', function () {
      //noneed for validators here
    }),
    cityChange: _ember['default'].observer('content.basicprofile.city', function () {
      var basicprofile = this.get('content').basicprofile;
      var one = 'Your city must contain only letters';
      var two = 'Uhm.. your city should only be 30 characters or less';
      if (!/^[a-z]+$/i.test(basicprofile.get('city'))) {
        this.err.removeObject(two), this.err.addObject(one);
        this.set('cityerror', one);
        this.set('cityclasses', 'has-error');
      } else if (basicprofile.get('city') != undefined && basicprofile.get('city').length > 30) {
        this.err.removeObject(one), this.err.addObject(two);
        this.set('cityerror', two);
        this.set('cityclasses', 'has-error');
      } else {
        this.err.removeObjects([one, two]);
        this.get('validationErrorMsg', this.err);
        this.set('cityerror', null);
        this.set('cityclasses', '');
      }
    }),
    stateChange: _ember['default'].observer('content.user.state', function () {
      //no need for validators here
    }),

    //actions
    actions: {
      showPolicy: function showPolicy() {
        this.set('showPolicy', !this.get('showPolicy'));
      },
      tregister: function tregister(err) {
        this.set('validationErrorMsg', []);
        var user = this.get('content').user;
        var basicprofile = this.get('content').basicprofile;
        var trainerprofile = this.get('content').trainerprofile;
        var t = this;
        if (user.get('username') == undefined || user.get('password') == undefined || user.get('email') == undefined || basicprofile.get('firstname') == undefined || basicprofile.get('lastname') == undefined || basicprofile.get('gender') == undefined || basicprofile.get('age') == undefined || basicprofile.get('city') == undefined || basicprofile.get('state') == undefined) {
          this.err.addObject('No field can be blank. Sorry');
          this.set('validationErrorMsg', this.err);
        } else if (!(user.get('username') == undefined || user.get('password') == undefined || user.get('email') == undefined || basicprofile.get('firstname') == undefined || basicprofile.get('lastname') == undefined || basicprofile.get('gender') == undefined || basicprofile.get('age') == undefined || basicprofile.get('city') == undefined || basicprofile.get('state') == undefined)) {
          this.err.removeObject('No field can be blank. Sorry');
          this.set('validationErrorMsg', this.err);
          if (!this.err[0]) {
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
              'membertype': basicprofile.get('membertype'),
              'certification': trainerprofile.get('certification')

            };
            _ember['default'].$.post('../api/tregister/', requestdata, function (response) {
              //var errMsg = '';
              var errMsg = [];
              if (response.data.status === "error") {
                if (response.data.username) {
                  errMsg.addObject(response.data.username);
                }
                if (response.data.email) {

                  errMsg.addObject(response.data.email);
                }
                if (response.data.password) {

                  errMsg.addObject(response.data.password);
                }
                if (response.data.gender) {
                  errMsg.addObject(response.data.gender);
                }
                if (response.data.state) {
                  errMsg.addObject(response.data.state);
                }
                if (response.data.age) {
                  errMsg.addObject(response.data.age);
                }
                if (response.data.firstname) {
                  errMsg.addObject(response.data.firstname);
                }
                if (response.data.lastname) {
                  errMsg.addObject(response.data.lastname);
                }
                if (response.data.city) {
                  errMsg.addObject(response.data.city);
                }
                t.set('validationErrorMsg', errMsg);
              } else {
                //success
                t.set('success', true);
                //could forward the user to another page (like home)
                //t.transitionTo('home');
              }
            });
          } else {
              this.set('validationErrorMsg', this.err);
            }
        } else {}
      }

    }
  });
});
define('simple-fit/helpers/bs-contains', ['exports', 'ember-bootstrap/helpers/bs-contains'], function (exports, _emberBootstrapHelpersBsContains) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains['default'];
    }
  });
  Object.defineProperty(exports, 'bsContains', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsContains.bsContains;
    }
  });
});
define('simple-fit/helpers/bs-eq', ['exports', 'ember-bootstrap/helpers/bs-eq'], function (exports, _emberBootstrapHelpersBsEq) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq['default'];
    }
  });
  Object.defineProperty(exports, 'eq', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsEq.eq;
    }
  });
});
define('simple-fit/helpers/bs-not', ['exports', 'ember-bootstrap/helpers/bs-not'], function (exports, _emberBootstrapHelpersBsNot) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot['default'];
    }
  });
  Object.defineProperty(exports, 'not', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsNot.not;
    }
  });
});
define('simple-fit/helpers/bs-read-path', ['exports', 'ember-bootstrap/helpers/bs-read-path'], function (exports, _emberBootstrapHelpersBsReadPath) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath['default'];
    }
  });
  Object.defineProperty(exports, 'readPath', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapHelpersBsReadPath.readPath;
    }
  });
});
define('simple-fit/helpers/eq', ['exports', 'ember'], function (exports, _ember) {

  var eq = function eq(params) {
    return params[0] === params[1];
  };
  exports['default'] = _ember['default'].Helper.helper(eq);
});
define('simple-fit/helpers/eq2', ['exports', 'ember'], function (exports, _ember) {
  exports.eq2 = eq2;

  function eq2(params /*, hash*/) {
    store: _ember['default'].inject.service();

    return params;
  }

  exports['default'] = _ember['default'].Helper.helper(eq2);
});
define('simple-fit/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('simple-fit/helpers/pullid', ['exports', 'ember'], function (exports, _ember) {
  exports.pullid = pullid;

  function pullid(params /*, hash*/) {
    return params;
  }

  exports['default'] = _ember['default'].Helper.helper(pullid);
});
define('simple-fit/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('simple-fit/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'simple-fit/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _simpleFitConfigEnvironment) {
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(_simpleFitConfigEnvironment['default'].APP.name, _simpleFitConfigEnvironment['default'].APP.version)
  };
});
define('simple-fit/initializers/bootstrap-linkto', ['exports', 'ember-bootstrap/initializers/bootstrap-linkto'], function (exports, _emberBootstrapInitializersBootstrapLinkto) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberBootstrapInitializersBootstrapLinkto.initialize;
    }
  });
});
define('simple-fit/initializers/constants', ['exports'], function (exports) {
	exports.initialize = initialize;

	function initialize(application) {
		application.inject('route', 'constants', 'service:constants');
		application.inject('controller', 'constants', 'service:constants');
		application.inject('model', 'constants', 'service:constants');
	}

	exports['default'] = {
		name: 'constants',
		initialize: initialize
	};
});
define('simple-fit/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('simple-fit/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('simple-fit/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('simple-fit/initializers/export-application-global', ['exports', 'ember', 'simple-fit/config/environment'], function (exports, _ember, _simpleFitConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_simpleFitConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _simpleFitConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_simpleFitConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('simple-fit/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('simple-fit/initializers/load-bootstrap-config', ['exports', 'simple-fit/config/environment', 'ember-bootstrap/config'], function (exports, _simpleFitConfigEnvironment, _emberBootstrapConfig) {
  exports.initialize = initialize;

  function initialize() /* container, application */{
    _emberBootstrapConfig['default'].load(_simpleFitConfigEnvironment['default']['ember-bootstrap'] || {});
  }

  exports['default'] = {
    name: 'load-bootstrap-config',
    initialize: initialize
  };
});
define('simple-fit/initializers/modals-container', ['exports', 'ember-bootstrap/initializers/modals-container'], function (exports, _emberBootstrapInitializersModalsContainer) {
  exports['default'] = _emberBootstrapInitializersModalsContainer['default'];
});
define('simple-fit/initializers/session', ['exports'], function (exports) {
	exports.initialize = initialize;

	function initialize(application) {
		application.inject('route', 'auth', 'service:session');
		application.inject('component', 'auth', 'service:session');
		application.inject('controller', 'auth', 'service:session');
		//application.inject('component', 'auth', 'service:session');
		//application.inject('model', 'auth', 'service:session');
		// application.inject('component', 'user', 'service:session');
	}

	exports['default'] = {
		name: 'session',
		initialize: initialize
	};
});
define('simple-fit/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('simple-fit/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("simple-fit/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('simple-fit/models/basicprofile', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		user: _emberData['default'].belongsTo('user'),
		trainerprofile: _emberData['default'].belongsTo('trainerprofile', { async: true }),
		clientprofile: _emberData['default'].belongsTo('clientprofile', { async: true }),
		firstname: _emberData['default'].attr('string'),
		lastname: _emberData['default'].attr('string'),
		gender: _emberData['default'].attr('string'),
		age: _emberData['default'].attr('number'),
		city: _emberData['default'].attr('string'),
		state: _emberData['default'].attr('string'),
		ip: _emberData['default'].attr('string'),
		membertype: _emberData['default'].attr('string')

	});
});
define('simple-fit/models/category', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		exercise: _emberData['default'].hasMany('exercise', { async: true })

	});
});
define('simple-fit/models/client', ['exports', 'ember-data'], function (exports, _emberData) {
    exports['default'] = _emberData['default'].Model.extend({
        firstname: _emberData['default'].attr('string'),
        lastname: _emberData['default'].attr('string')
    });
});
define('simple-fit/models/clientexercise', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		workout: _emberData['default'].belongsTo('clientworkout', { async: true })

	});
});
define('simple-fit/models/clientprofile', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		user: _emberData['default'].belongsTo('user', { async: true }),
		basicinfo: _emberData['default'].belongsTo('basicprofile', { async: true }),
		trainer: _emberData['default'].belongsTo('trainerprofile', { async: true, inverse: 'trainer' }),
		trainerpending: _emberData['default'].belongsTo('trainerprofile', { async: true, inverse: 'trainerpending' }),
		dietitian: _emberData['default'].belongsTo('dietitianprofile', { async: true, inverse: 'dietitian' }),
		dietitianpending: _emberData['default'].belongsTo('dietitianprofile', { async: true, inverse: 'dietitianpending' })
	});
});
define('simple-fit/models/clientworkout', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		exercise: _emberData['default'].hasMany('clientexercise', { async: true })

	});
});
define('simple-fit/models/dietitianprofile', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		user: _emberData['default'].belongsTo('user'),
		basicinfo: _emberData['default'].belongsTo('basicprofile'),
		specialty: _emberData['default'].attr('string'),
		dietitian: _emberData['default'].hasMany('clientprofile', { async: true, inverse: 'dietitian' }),
		dietitianpending: _emberData['default'].hasMany('clientprofile', { async: true, inverse: 'dietitianpending' })
	});
});
define('simple-fit/models/exercise', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		name: _emberData['default'].attr('string'),
		category: _emberData['default'].belongsTo('category', { async: true })

	});
});
define('simple-fit/models/profile', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		//user: DS.belongsTo('user'),
		roles: _emberData['default'].attr('role', { defaultValue: { admin: false, researcher: false, subject: false } }),
		age: _emberData['default'].attr('number'),
		gender: _emberData['default'].attr('string'),
		educationlevel: _emberData['default'].attr('string'),
		city: _emberData['default'].attr('string'),
		state: _emberData['default'].attr('string'),
		ip: _emberData['default'].attr('string'),
		rolesPrint: (function () {
			var roles = this.get('roles');
			var roleString = '';
			roleString += roles.admin ? 'Admin' : '';
			roleString += roles.researcher ? roleString === '' ? 'Researcher' : ', Researcher' : '';
			roleString += roles.subject ? roleString === '' ? 'Subject' : ', Subject' : '';
			return roleString;
		}).property('roles'),
		selectorId: (function () {
			return "#" + this.get('id');
		}).property('id'),
		accordianId: (function () {
			return "accordion" + this.get('id');
		}).property('id'),
		accordianSelectorId: (function () {
			return "accordion" + this.get('id');
		}).property('id')
	});
});
define('simple-fit/models/recipes', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		title: _emberData['default'].attr(),
		image: _emberData['default'].attr(),
		ingredients: _emberData['default'].attr(),
		steps: _emberData['default'].attr(),
		link: _emberData['default'].attr()
	});
});
define('simple-fit/models/trainerprofile', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		user: _emberData['default'].belongsTo('user'),
		basicinfo: _emberData['default'].belongsTo('basicprofile'),
		certification: _emberData['default'].attr('string'),
		trainer: _emberData['default'].hasMany('clientprofile', { async: true, inverse: 'trainer' }),
		trainerpending: _emberData['default'].hasMany('clientprofile', { async: true, inverse: 'trainerpending' })
	});
});
define('simple-fit/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	exports['default'] = _emberData['default'].Model.extend({
		basicprofile: _emberData['default'].belongsTo('basicprofile', { async: true }),
		username: _emberData['default'].attr('string'),
		email: _emberData['default'].attr('string'),
		password: _emberData['default'].attr('string')

	});
});
define('simple-fit/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('simple-fit/router', ['exports', 'ember', 'simple-fit/config/environment'], function (exports, _ember, _simpleFitConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _simpleFitConfigEnvironment['default'].locationType,
    rootURL: _simpleFitConfigEnvironment['default'].routerRootURL
  });

  Router.map(function () {
    this.route('login');
    this.route('trainer');
    this.route('dietitian');
    this.route('market', function () {});
    this.route('recipes');
    this.route('recipe', { path: 'recipes/:recipe_name' });
    this.route('vchat');
    this.route('dclient');
    this.route('user', { path: 'users/:user_url' });
    this.route('register');
    this.route('newfeature');
    this.route('testing');
    this.route('cregister');
    this.route('dregister');
    this.route('tregister');
    this.route('fakeroute');
  });

  exports['default'] = Router;
});
define('simple-fit/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('simple-fit/routes/cregister', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _rsvp['default'].hash({
        user: this.store.createRecord('user'),
        basicprofile: this.store.createRecord('basicprofile'),
        clientprofile: this.store.createRecord('clientprofile')
      });
    }
  });
});
define('simple-fit/routes/dclient', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('simple-fit/routes/dietitian', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('clients');
    }
  });
});
define('simple-fit/routes/dregister', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _rsvp['default'].hash({
        user: this.store.createRecord('user'),
        basicprofile: this.store.createRecord('basicprofile'),
        dietitianprofile: this.store.createRecord('dietitianprofile')
      });
    }
  });
});
define('simple-fit/routes/fakeroute', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return _rsvp['default'].hash({
				category: this.store.findAll('category'),
				workout: this.store.findRecord('clientworkout', 1)

			});
		}
	});
});
define('simple-fit/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('simple-fit/routes/login', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _rsvp['default'].hash({
        user: this.store.createRecord('user'),
        basicprofile: this.store.createRecord('basicprofile'),
        clientprofile: this.store.createRecord('clientprofile')
      });
    }
  });
});
define('simple-fit/routes/market', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		model: function model() {
			return this.store.findAll('basicprofile');
		}
	});
});
define('simple-fit/routes/newfeature', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('simple-fit/routes/recipe', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('recipes', 6); //How do i get this dynamically?
      //params.id???
    }
  });
});
define('simple-fit/routes/recipes', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('recipes');
    }
  });
});
define('simple-fit/routes/register', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _rsvp['default'].hash({
        user: this.store.createRecord('user'),
        basicprofile: this.store.createRecord('basicprofile'),
        trainerprofile: this.store.createRecord('trainerprofile')
      });
    }
  });
});
define('simple-fit/routes/testing', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Route.extend({
		auth: _ember['default'].inject.service('session'),
		store: _ember['default'].inject.service(),
		model: function model() {}

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

		// model() {
		// 	// var cid = this.auth.get('user.basicprofile.id')
		// 	// console.log(cid)	
		// 	// // var test = this.store.findRecord('clientprofile',cid);//,content.get('user').get('clientprofile').get('id'))//.then(function(response){
		// 	// // console.log(this.store.get(auth.user.userid))
		// 	// });

		// }
	});
});
define('simple-fit/routes/trainer', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.store.findAll('client');
    }
  });
});
define('simple-fit/routes/tregister', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return _rsvp['default'].hash({
        user: this.store.createRecord('user'),
        basicprofile: this.store.createRecord('basicprofile'),
        trainerprofile: this.store.createRecord('trainerprofile')
      });
    }
  });
});
define('simple-fit/routes/user', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('simple-fit/routes/vchat', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('simple-fit/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define("simple-fit/services/constants", ["exports", "ember"], function (exports, _ember) {

	var month_names = [];
	month_names[month_names.length] = "Jan";
	month_names[month_names.length] = "Feb";
	month_names[month_names.length] = "Mar";
	month_names[month_names.length] = "Apr";
	month_names[month_names.length] = "May";
	month_names[month_names.length] = "Jun";
	month_names[month_names.length] = "Jul";
	month_names[month_names.length] = "Aug";
	month_names[month_names.length] = "Sep";
	month_names[month_names.length] = "Oct";
	month_names[month_names.length] = "Nov";
	month_names[month_names.length] = "Dec";

	exports["default"] = _ember["default"].Service.extend({
		debug: true,
		genders: ['Male', 'Female', 'Other'],
		educationLevels: ['some highschool', 'highschool', 'some college(2 years or less)', 'bachelor\'s degree', 'graduate degree'],
		states: ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District Of Columbia', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],

		month_names: month_names,
		secsToStr: function secsToStr(seconds) {
			//Helper function for creating Gmail/FB/Twitter style time strings of the form tt <unit>(s) ago, where unit = <year||day||hour||minutes||seconds>.
			var numberEnding = function numberEnding(number) {
				return number > 1 ? 's ' : ' ';
			};
			var years = Math.floor(seconds / 31536000);
			var days = Math.floor(seconds % 31536000 / 86400);
			var hours = Math.floor(seconds % 31536000 % 86400 / 3600);
			var mins = Math.floor(seconds % 31536000 % 86400 % 3600 / 60);
			var secs = Math.floor(seconds % 31536000 % 86400 % 3600 % 60);
			if (years > 0) {
				return years + " year" + numberEnding(years) + " ago";
			} else if (days > 0) {
				return days + " day" + numberEnding(days) + " ago";
			} else if (hours > 0) {
				return hours + " hour" + numberEnding(hours) + " ago";
			} else if (mins > 0) {
				return mins + " minute" + numberEnding(mins) + " ago";
			} else if (secs > 0) {
				return secs + " second" + numberEnding(secs) + " ago";
			} else if (secs === 0) {
				return "Just Now";
			}
		}
	});
});
define('simple-fit/services/session', ['exports', 'ember'], function (exports, _ember) {
	exports['default'] = _ember['default'].Service.extend({
		store: _ember['default'].inject.service('store'),
		routing: _ember['default'].inject.service('-routing'),

		//field vars
		username: '',
		password: '',
		remember: false,
		errorMsg: '',

		//stored data
		user: null,
		profile: null,
		isLoggedIn: false,
		login: function login() {
			console.log('Logging in:');

			//retrieve field data
			var username = this.get('username');
			var password = this.get('password');
			var remember = this.get('remember');

			var data = {
				'username': username,
				'password': password };
			var auth = this;

			//make api request
			_ember['default'].$.post('../api/session/', data, function (response) {
				if (response.data.isauthenticated) {
					//success
					auth.set('user', auth.get('store').findRecord('user', response.data.userid));
					//auth.set('profile', auth.get('store').findRecord('profile', response.data.userid));
					auth.set('isLoggedIn', true);
					auth.set('username', username);

					if (remember) {
						//save username and pass to local storage
						localStorage.setItem('remember', true);
						localStorage.setItem('username', auth.get('username'));
						localStorage.setItem('password', auth.get('password'));
					} else {
						localStorage.removeItem('remember');
						localStorage.removeItem('username');
						localStorage.removeItem('password');
					}
					auth.set('password', '');
					console.log('Login POST Request to ../api/session/ was successful.');
					// auth.get('routing').transitionTo('index');
				} else {
						//errors
						console.log('Login POST Request to ../api/session/ was unsuccessful.');
						auth.set('errorMsg', response.data.message);
					}
			});
		},
		logout: function logout() {
			console.log('Logging out');
			var auth = this;
			_ember['default'].$.ajax({ url: '../api/session/', type: 'DELETE' }).then(function (response) {
				console.log('Logout DELETE Request to ../api/session/ was successful:' + response);
				auth.set('isLoggedIn', false);
				// auth.set('errorMsg', '');
				auth.set('username', '');
				auth.set('user', null);
				// auth.set('profile', null);

				if (localStorage.remember) {
					auth.set('remember', localStorage.remember);
					auth.set('username', localStorage.username);
					auth.set('password', localStorage.password);
				}
			});
		},
		/**
  	called whenever the application loads to initialize any stored session/local variables
  **/
		init: function init() {
			this._super();
			var auth = this;

			//handle session and local variable loading
			this.set('remember', localStorage.remember);

			if (auth.get('remember')) {
				auth.set('username', localStorage.username);
				auth.set('password', localStorage.password);
			}

			//check to see if the user is logged into the API
			_ember['default'].$.get('../api/session/', function (response) {
				if (response.data.isauthenticated) {
					//success
					console.log('The user: \'' + response.data.username + '\' is currently logged in.');
					auth.set('user', auth.get('store').findRecord('user', response.data.userid));
					//sauth.set('profile', auth.get('store').findRecord('profile', response.data.userid));
					auth.set('isLoggedIn', true);
				} else {
					//errors
					console.log('The user is not currently logged in.');
				}
			});
		}
	});
});
define("simple-fit/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "container");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "navigation-menu", ["loc", [null, [1, 0], [1, 19]]], 0, 0, 0, 0], ["content", "outlet", ["loc", [null, [3, 2], [3, 12]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/auth-manager", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 7,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/auth-manager.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          dom.setAttribute(el1, "class", "auth-form");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "auth");
          var el3 = dom.createTextNode("Hello ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2, "type", "button");
          dom.setAttribute(el2, "class", "btn btn-default");
          var el3 = dom.createTextNode("Log out");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [2]);
          var element1 = dom.childAt(element0, [3]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["content", "auth.user.username", ["loc", [null, [3, 26], [3, 48]]], 0, 0, 0, 0], ["element", "action", ["logout"], [], ["loc", [null, [4, 48], [4, 67]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 2
              },
              "end": {
                "line": 14,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/components/auth-manager.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	      Login\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 18,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/auth-manager.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["block", "link-to", ["login"], ["class", "btn btn-default"], 0, null, ["loc", [null, [12, 2], [14, 17]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 19,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/auth-manager.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "auth.isLoggedIn", ["loc", [null, [1, 6], [1, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [18, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/bs-accordion-item", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-accordion-item.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "panel-body");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [10, 8], [10, 17]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/bs-accordion-item.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "role", "tab");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        dom.setAttribute(el2, "class", "panel-title");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("a");
        dom.setAttribute(el3, "href", "#");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        morphs[3] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["panel-heading ", ["subexpr", "if", [["get", "collapsed", ["loc", [null, [1, 68], [1, 77]]], 0, 0, 0, 0], "collapsed", "expanded"], [], ["loc", [null, [1, 63], [1, 102]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["toggleActive"], [], ["loc", [null, [1, 16], [1, 41]]], 0, 0], ["content", "title", ["loc", [null, [4, 12], [4, 21]]], 0, 0, 0, 0], ["block", "bs-collapse", [], ["collapsed", ["subexpr", "@mut", [["get", "collapsed", ["loc", [null, [8, 25], [8, 34]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "panel-collapse"], 0, null, ["loc", [null, [8, 0], [12, 16]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/bs-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 2,
                "column": 0
              },
              "end": {
                "line": 4,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/components/bs-alert.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("    ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "type", "button");
            dom.setAttribute(el1, "class", "close");
            dom.setAttribute(el1, "aria-label", "Close");
            var el2 = dom.createElement("span");
            dom.setAttribute(el2, "aria-hidden", "true");
            var el3 = dom.createTextNode("×");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["dismiss"], [], ["loc", [null, [3, 59], [3, 79]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "dismissible", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]], ["content", "yield", ["loc", [null, [5, 0], [5, 9]]], 0, 0, 0, 0]],
        locals: [],
        templates: [child0]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/bs-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "unless", [["get", "hidden", ["loc", [null, [1, 10], [1, 16]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [6, 11]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/bs-button", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 1,
              "column": 37
            }
          },
          "moduleName": "simple-fit/templates/components/bs-button.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("i");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [0]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "icon", ["loc", [null, [1, 24], [1, 28]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "simple-fit/templates/components/bs-button.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "icon", ["loc", [null, [1, 6], [1, 10]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [1, 44]]]], ["content", "text", ["loc", [null, [1, 44], [1, 52]]], 0, 0, 0, 0], ["content", "yield", ["loc", [null, [1, 52], [1, 61]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/bs-form-element", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 31
          }
        },
        "moduleName": "simple-fit/templates/components/bs-form-element.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "partial", [["get", "formElementTemplate", ["loc", [null, [1, 10], [1, 29]]], 0, 0, 0, 0]], [], ["loc", [null, [1, 0], [1, 31]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/bs-form-group", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 4,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-form-group.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [3, 41], [3, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/components/bs-form-group.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0], ["block", "if", [["get", "hasFeedback", ["loc", [null, [2, 6], [2, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [2, 0], [4, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/bs-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 9
          }
        },
        "moduleName": "simple-fit/templates/components/bs-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/bs-modal-dialog", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 8
            },
            "end": {
              "line": 5,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-modal-header", [], ["title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [4, 36], [4, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [4, 54], [4, 65]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 67]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 12
              },
              "end": {
                "line": 9,
                "column": 12
              }
            },
            "moduleName": "simple-fit/templates/components/bs-modal-dialog.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("                ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "yield", ["loc", [null, [8, 16], [8, 25]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 8
            },
            "end": {
              "line": 10,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-modal-body", [], [], 0, null, ["loc", [null, [7, 12], [9, 30]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 10,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "yield", ["loc", [null, [11, 12], [11, 21]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 8
            },
            "end": {
              "line": 16,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-dialog.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("            ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["content", "bs-modal-footer", ["loc", [null, [15, 12], [15, 31]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 6
          }
        },
        "moduleName": "simple-fit/templates/components/bs-modal-dialog.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-content");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 2, 2);
        morphs[3] = dom.createMorphAt(element1, 4, 4);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", ["modal-dialog ", ["get", "sizeClass", ["loc", [null, [1, 27], [1, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "header", ["loc", [null, [3, 14], [3, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [3, 8], [5, 15]]]], ["block", "if", [["get", "body", ["loc", [null, [6, 14], [6, 18]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [6, 8], [12, 15]]]], ["block", "if", [["get", "footer", ["loc", [null, [14, 14], [14, 20]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [14, 8], [16, 15]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});
define("simple-fit/templates/components/bs-modal-footer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [2, 12], [2, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [2, 4], [2, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 5,
                  "column": 8
                },
                "end": {
                  "line": 5,
                  "column": 66
                }
              },
              "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [5, 52], [5, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 6,
                  "column": 8
                },
                "end": {
                  "line": 6,
                  "column": 96
                }
              },
              "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "submitTitle", ["loc", [null, [6, 81], [6, 96]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "default", "action", "close"], 0, null, ["loc", [null, [5, 8], [5, 80]]]], ["block", "bs-button", [], ["type", "primary", "buttonType", "submit", "disabled", ["subexpr", "@mut", [["get", "submitDisabled", ["loc", [null, [6, 65], [6, 79]]], 0, 0, 0, 0]], [], [], 0, 0]], 1, null, ["loc", [null, [6, 8], [6, 110]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 8,
                  "column": 8
                },
                "end": {
                  "line": 8,
                  "column": 66
                }
              },
              "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["content", "closeTitle", ["loc", [null, [8, 52], [8, 66]]], 0, 0, 0, 0]],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 7,
                "column": 4
              },
              "end": {
                "line": 9,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "bs-button", [], ["type", "primary", "action", "close"], 0, null, ["loc", [null, [8, 8], [8, 80]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 10,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasSubmitButton", ["loc", [null, [4, 10], [4, 25]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 4], [9, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/components/bs-modal-footer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [10, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/bs-modal-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "type", "button");
          dom.setAttribute(el1, "class", "close");
          dom.setAttribute(el1, "aria-label", "Close");
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "aria-hidden", "true");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createElementMorph(element0);
          return morphs;
        },
        statements: [["element", "action", ["close"], [], ["loc", [null, [2, 59], [2, 77]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "this", ["loc", [null, [5, 12], [5, 16]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 18]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal-header.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h4");
          dom.setAttribute(el1, "class", "modal-title");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "title", ["loc", [null, [7, 28], [7, 37]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/bs-modal-header.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "closeButton", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("simple-fit/templates/components/bs-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 0
              },
              "end": {
                "line": 5,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "this", ["loc", [null, [4, 10], [4, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 2], [4, 16]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 10,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/components/bs-modal.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("  ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(2);
            morphs[0] = dom.createAttrMorph(element0, 'class');
            morphs[1] = dom.createAttrMorph(element0, 'id');
            return morphs;
          },
          statements: [["attribute", "class", ["concat", ["modal-backdrop ", ["subexpr", "if", [["get", "fade", ["loc", [null, [9, 34], [9, 38]]], 0, 0, 0, 0], "fade"], [], ["loc", [null, [9, 29], [9, 47]]], 0, 0], " ", ["subexpr", "if", [["get", "in", ["loc", [null, [9, 53], [9, 55]]], 0, 0, 0, 0], "in"], [], ["loc", [null, [9, 48], [9, 62]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "id", ["concat", [["get", "backdropId", ["loc", [null, [9, 70], [9, 80]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-modal.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 1, 1);
          return morphs;
        },
        statements: [["block", "bs-modal-dialog", [], ["close", ["subexpr", "action", ["close"], [], ["loc", [null, [3, 25], [3, 41]]], 0, 0], "fade", ["subexpr", "@mut", [["get", "fade", ["loc", [null, [3, 47], [3, 51]]], 0, 0, 0, 0]], [], [], 0, 0], "in", ["subexpr", "@mut", [["get", "in", ["loc", [null, [3, 55], [3, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "id", ["subexpr", "@mut", [["get", "modalId", ["loc", [null, [3, 61], [3, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "title", ["subexpr", "@mut", [["get", "title", ["loc", [null, [3, 75], [3, 80]]], 0, 0, 0, 0]], [], [], 0, 0], "closeButton", ["subexpr", "@mut", [["get", "closeButton", ["loc", [null, [3, 93], [3, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "keyboard", ["subexpr", "@mut", [["get", "keyboard", ["loc", [null, [3, 114], [3, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "header", ["subexpr", "@mut", [["get", "header", ["loc", [null, [3, 130], [3, 136]]], 0, 0, 0, 0]], [], [], 0, 0], "body", ["subexpr", "@mut", [["get", "body", ["loc", [null, [3, 142], [3, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "footer", ["subexpr", "@mut", [["get", "footer", ["loc", [null, [3, 154], [3, 160]]], 0, 0, 0, 0]], [], [], 0, 0], "size", ["subexpr", "@mut", [["get", "size", ["loc", [null, [3, 166], [3, 170]]], 0, 0, 0, 0]], [], [], 0, 0], "backdropClose", ["subexpr", "@mut", [["get", "backdropClose", ["loc", [null, [3, 185], [3, 198]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [3, 0], [5, 20]]]], ["block", "if", [["get", "showBackdrop", ["loc", [null, [8, 6], [8, 18]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [8, 0], [10, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 13,
            "column": 19
          }
        },
        "moduleName": "simple-fit/templates/components/bs-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "ember-wormhole", [], ["to", "ember-bootstrap-modal-container", "renderInPlace", ["subexpr", "@mut", [["get", "_renderInPlace", ["loc", [null, [1, 69], [1, 83]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [1, 0], [13, 19]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/bs-progress-bar", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 3,
                "column": 4
              },
              "end": {
                "line": 5,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [4, 16], [4, 30]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 8], [4, 32]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 5,
                "column": 4
              },
              "end": {
                "line": 7,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("%\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [6, 8], [6, 26]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 2,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [3, 10], [3, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [3, 4], [7, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 4
              },
              "end": {
                "line": 11,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "percentRounded", ["loc", [null, [10, 38], [10, 52]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 30], [10, 54]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 4
              },
              "end": {
                "line": 13,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("        ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "sr-only");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("%");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
            return morphs;
          },
          statements: [["content", "percentRounded", ["loc", [null, [12, 30], [12, 48]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          return morphs;
        },
        statements: [["block", "if", [["get", "hasBlock", ["loc", [null, [9, 10], [9, 18]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [9, 4], [13, 11]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 16,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/bs-progress-bar.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showLabel", ["loc", [null, [2, 6], [2, 15]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [2, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/bs-progress", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/bs-progress.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/bs-select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 5,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          dom.setAttribute(el1, "disabled", "");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createAttrMorph(element1, 'selected');
          morphs[1] = dom.createMorphAt(element1, 1, 1);
          return morphs;
        },
        statements: [["attribute", "selected", ["subexpr", "bs-not", [["get", "value", ["loc", [null, [2, 39], [2, 44]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [2, 46]]], 0, 0], 0, 0, 0, 0], ["content", "prompt", ["loc", [null, [3, 8], [3, 18]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/bs-select.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("option");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'value');
          morphs[1] = dom.createAttrMorph(element0, 'selected');
          morphs[2] = dom.createMorphAt(element0, 1, 1);
          return morphs;
        },
        statements: [["attribute", "value", ["concat", [["subexpr", "bs-read-path", [["get", "item", ["loc", [null, [8, 34], [8, 38]]], 0, 0, 0, 0], ["get", "optionValuePath", ["loc", [null, [8, 39], [8, 54]]], 0, 0, 0, 0]], [], ["loc", [null, [8, 19], [8, 56]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "selected", ["subexpr", "bs-eq", [["get", "item", ["loc", [null, [9, 29], [9, 33]]], 0, 0, 0, 0], ["get", "value", ["loc", [null, [9, 34], [9, 39]]], 0, 0, 0, 0]], [], ["loc", [null, [null, null], [9, 41]]], 0, 0], 0, 0, 0, 0], ["inline", "bs-read-path", [["get", "item", ["loc", [null, [10, 23], [10, 27]]], 0, 0, 0, 0], ["get", "optionLabelPath", ["loc", [null, [10, 28], [10, 43]]], 0, 0, 0, 0]], [], ["loc", [null, [10, 8], [10, 45]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 12,
            "column": 9
          }
        },
        "moduleName": "simple-fit/templates/components/bs-select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "prompt", ["loc", [null, [1, 6], [1, 12]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [5, 7]]]], ["block", "each", [["get", "content", ["loc", [null, [7, 8], [7, 15]]], 0, 0, 0, 0]], ["key", "@identity"], 1, null, ["loc", [null, [7, 0], [12, 9]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/category-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 2
            },
            "end": {
              "line": 9,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/components/category-list.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("			");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("button");
          dom.setAttribute(el1, "class", "list-group-item");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createElementMorph(element1);
          morphs[1] = dom.createMorphAt(element1, 0, 0);
          return morphs;
        },
        statements: [["element", "action", ["toggleExercise", ["get", "cat", ["loc", [null, [8, 60], [8, 63]]], 0, 0, 0, 0]], [], ["loc", [null, [8, 34], [8, 65]]], 0, 0], ["content", "cat.name", ["loc", [null, [8, 66], [8, 78]]], 0, 0, 0, 0]],
        locals: ["cat"],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 15,
                    "column": 4
                  },
                  "end": {
                    "line": 17,
                    "column": 4
                  }
                },
                "moduleName": "simple-fit/templates/components/category-list.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("					");
                dom.appendChild(el0, el1);
                var el1 = dom.createElement("button");
                dom.setAttribute(el1, "class", "list-group-item");
                var el2 = dom.createComment("");
                dom.appendChild(el1, el2);
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var element0 = dom.childAt(fragment, [1]);
                var morphs = new Array(2);
                morphs[0] = dom.createElementMorph(element0);
                morphs[1] = dom.createMorphAt(element0, 0, 0);
                return morphs;
              },
              statements: [["element", "action", [""], [], ["loc", [null, [16, 36], [16, 49]]], 0, 0], ["content", "ex.name", ["loc", [null, [16, 50], [16, 61]]], 0, 0, 0, 0]],
              locals: ["ex"],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 14,
                  "column": 3
                },
                "end": {
                  "line": 18,
                  "column": 3
                }
              },
              "moduleName": "simple-fit/templates/components/category-list.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "each", [["get", "cat.exercise", ["loc", [null, [15, 12], [15, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [15, 4], [17, 13]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 18,
                  "column": 3
                },
                "end": {
                  "line": 21,
                  "column": 3
                }
              },
              "moduleName": "simple-fit/templates/components/category-list.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 2
              },
              "end": {
                "line": 22,
                "column": 2
              }
            },
            "moduleName": "simple-fit/templates/components/category-list.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "if", [["get", "cat.showExercise", ["loc", [null, [14, 9], [14, 25]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 3], [21, 10]]]]],
          locals: ["cat"],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 2
            },
            "end": {
              "line": 23,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/components/category-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h2");
          var el2 = dom.createTextNode("Select Exercise");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "each", [["get", "model.category", ["loc", [null, [13, 10], [13, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [13, 2], [22, 11]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 23,
              "column": 2
            },
            "end": {
              "line": 25,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/components/category-list.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 40,
            "column": 9
          }
        },
        "moduleName": "simple-fit/templates/components/category-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Create Workout");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("hr");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-md-4");
        var el2 = dom.createTextNode("\n\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "list-group");
        var el3 = dom.createTextNode("\n	\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("	");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("hr");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "col-mod-4");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [3, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element2, 1, 1);
        morphs[1] = dom.createMorphAt(element2, 5, 5);
        morphs[2] = dom.createMorphAt(fragment, 8, 8, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "each", [["get", "model.category", ["loc", [null, [7, 10], [7, 24]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [7, 2], [9, 11]]]], ["block", "if", [["get", "expanded", ["loc", [null, [11, 8], [11, 16]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [11, 2], [25, 9]]]], ["content", "yield", ["loc", [null, [40, 0], [40, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("simple-fit/templates/components/client-reg", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/client-reg.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("Welcome ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "content.user.username", ["loc", [null, [2, 13], [2, 38]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 6
                },
                "end": {
                  "line": 15,
                  "column": 6
                }
              },
              "moduleName": "simple-fit/templates/components/client-reg.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col-sm-7 alert alert-warning fade in");
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["content", "error", ["loc", [null, [13, 6], [13, 15]]], 0, 0, 0, 0]],
            locals: ["error"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 5
              },
              "end": {
                "line": 18,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "validationErrorMsg", ["loc", [null, [11, 14], [11, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [15, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 38,
                "column": 5
              },
              "end": {
                "line": 42,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "usernameerror", ["loc", [null, [40, 28], [40, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 49,
                "column": 5
              },
              "end": {
                "line": 53,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "passworderror", ["loc", [null, [51, 28], [51, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 66,
                "column": 5
              },
              "end": {
                "line": 70,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "emailerror", ["loc", [null, [68, 28], [68, 42]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 83,
                  "column": 7
                },
                "end": {
                  "line": 83,
                  "column": 71
                }
              },
              "moduleName": "simple-fit/templates/components/client-reg.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select most applicable");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 85,
                    "column": 8
                  },
                  "end": {
                    "line": 85,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/components/client-reg.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "g", ["loc", [null, [85, 30], [85, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 84,
                  "column": 7
                },
                "end": {
                  "line": 87,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/components/client-reg.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "g", ["loc", [null, [85, 27], [85, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [85, 8], [85, 49]]]]],
            locals: ["g"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 82,
                "column": 6
              },
              "end": {
                "line": 88,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [83, 7], [83, 85]]]], ["block", "each", [["get", "genders", ["loc", [null, [84, 15], [84, 22]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [84, 7], [87, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child5 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 104,
                  "column": 7
                },
                "end": {
                  "line": 104,
                  "column": 73
                }
              },
              "moduleName": "simple-fit/templates/components/client-reg.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select current residence");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 106,
                    "column": 8
                  },
                  "end": {
                    "line": 106,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/components/client-reg.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "s", ["loc", [null, [106, 30], [106, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 105,
                  "column": 7
                },
                "end": {
                  "line": 108,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/components/client-reg.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "s", ["loc", [null, [106, 27], [106, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [106, 8], [106, 49]]]]],
            locals: ["s"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 103,
                "column": 6
              },
              "end": {
                "line": 109,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [104, 7], [104, 87]]]], ["block", "each", [["get", "states", ["loc", [null, [105, 15], [105, 21]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [105, 7], [108, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 114,
                "column": 6
              },
              "end": {
                "line": 116,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/components/client-reg.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "render", ["privacypolicy"], [], ["loc", [null, [115, 7], [115, 33]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 133,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/client-reg.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-12");
          dom.setAttribute(el2, "style", "margin-left: 15px;");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("form");
          dom.setAttribute(el3, "class", "form-inline");
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("			\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-1");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-left reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("First name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-2");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Last name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Username:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Confirm Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Email:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Age:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Gender:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("City you live in:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("State:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-10");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-block btn-warning");
          dom.setAttribute(el6, "type", "button");
          var el7 = dom.createTextNode("Read Privacy and informed consent policy");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createTextNode("\n							");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" I have read and agree to the privacy policy.\n						");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3 offset3");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "type", "button");
          dom.setAttribute(el6, "class", "btn btn-block btn-default");
          var el7 = dom.createTextNode("Sign Up as Client");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n			");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("/.row");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          var element1 = dom.childAt(element0, [7]);
          var element2 = dom.childAt(element0, [9]);
          var element3 = dom.childAt(element2, [3]);
          var element4 = dom.childAt(element0, [13]);
          var element5 = dom.childAt(element4, [3]);
          var element6 = dom.childAt(element0, [23, 1]);
          var element7 = dom.childAt(element6, [3]);
          var element8 = dom.childAt(element0, [25, 1, 1]);
          var morphs = new Array(20);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [3, 3]), 1, 1);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [5, 3]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element1, [3]), 1, 1);
          morphs[4] = dom.createMorphAt(element1, 5, 5);
          morphs[5] = dom.createAttrMorph(element3, 'class');
          morphs[6] = dom.createMorphAt(element3, 1, 1);
          morphs[7] = dom.createMorphAt(element2, 5, 5);
          morphs[8] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 1, 1);
          morphs[9] = dom.createAttrMorph(element5, 'class');
          morphs[10] = dom.createMorphAt(element5, 1, 1);
          morphs[11] = dom.createMorphAt(element4, 5, 5);
          morphs[12] = dom.createMorphAt(dom.childAt(element0, [15, 3]), 1, 1);
          morphs[13] = dom.createMorphAt(dom.childAt(element0, [17, 3]), 1, 1);
          morphs[14] = dom.createMorphAt(dom.childAt(element0, [19, 3]), 1, 1);
          morphs[15] = dom.createMorphAt(dom.childAt(element0, [21, 3]), 1, 1);
          morphs[16] = dom.createMorphAt(element6, 1, 1);
          morphs[17] = dom.createElementMorph(element7);
          morphs[18] = dom.createMorphAt(dom.childAt(element6, [5]), 1, 1);
          morphs[19] = dom.createElementMorph(element8);
          return morphs;
        },
        statements: [["block", "if", [["get", "validationErrorMsg", ["loc", [null, [9, 11], [9, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 5], [18, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.firstname", ["loc", [null, [24, 32], [24, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "firstname"], ["loc", [null, [24, 6], [24, 143]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.lastname", ["loc", [null, [30, 32], [30, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "lastname"], ["loc", [null, [30, 6], [30, 141]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.username", ["loc", [null, [36, 32], [36, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Username"], ["loc", [null, [36, 6], [36, 133]]], 0, 0], ["block", "if", [["get", "usernameerror", ["loc", [null, [38, 11], [38, 24]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [38, 5], [42, 12]]]], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "passwordclasses", ["loc", [null, [46, 28], [46, 43]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.password", ["loc", [null, [47, 32], [47, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Password", "type", "password"], ["loc", [null, [47, 6], [47, 149]]], 0, 0], ["block", "if", [["get", "passworderror", ["loc", [null, [49, 11], [49, 24]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [49, 5], [53, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "confirmpassword", ["loc", [null, [58, 32], [58, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Confirm Password", "type", "password"], ["loc", [null, [58, 6], [58, 151]]], 0, 0], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "emailclasses", ["loc", [null, [63, 28], [63, 40]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.email", ["loc", [null, [64, 32], [64, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Email"], ["loc", [null, [64, 6], [64, 127]]], 0, 0], ["block", "if", [["get", "emailerror", ["loc", [null, [66, 11], [66, 21]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [66, 5], [70, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.age", ["loc", [null, [75, 32], [75, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "age"], ["loc", [null, [75, 6], [75, 131]]], 0, 0], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.gender", ["loc", [null, [82, 61], [82, 88]]], 0, 0, 0, 0]], [], [], 0, 0]], 4, null, ["loc", [null, [82, 6], [88, 19]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.city", ["loc", [null, [97, 32], [97, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "city"], ["loc", [null, [97, 6], [97, 133]]], 0, 0], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.state", ["loc", [null, [103, 60], [103, 86]]], 0, 0, 0, 0]], [], [], 0, 0]], 5, null, ["loc", [null, [103, 6], [109, 19]]]], ["block", "bs-modal", [], ["open", ["subexpr", "@mut", [["get", "showPolicy", ["loc", [null, [114, 23], [114, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Privacy Policy", "footer", false], 6, null, ["loc", [null, [114, 6], [116, 19]]]], ["element", "action", ["showPolicy"], [], ["loc", [null, [117, 62], [117, 85]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "name", "doesAgree", "checked", ["subexpr", "@mut", [["get", "agree", ["loc", [null, [119, 56], [119, 61]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [119, 7], [119, 63]]], 0, 0], ["element", "action", ["cregister"], [], ["loc", [null, [126, 62], [126, 84]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 136,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/client-reg.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "success", ["loc", [null, [1, 6], [1, 13]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [133, 7]]]], ["content", "yield", ["loc", [null, [135, 0], [135, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/exercise-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/exercise-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [1, 0], [1, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/form-element/errors", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/errors.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "class", "help-block");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "validationMessages.firstObject", ["loc", [null, [2, 29], [2, 63]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/errors.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "showValidationMessages", ["loc", [null, [1, 6], [1, 28]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/form-element/feedback-icon", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/feedback-icon.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("span");
          dom.setAttribute(el1, "aria-hidden", "true");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(1);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["form-control-feedback ", ["get", "iconName", ["loc", [null, [2, 41], [2, 49]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/feedback-icon.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasFeedback", ["loc", [null, [1, 6], [1, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/form-element/horizontal/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 6
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/horizontal/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("label");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var element1 = dom.childAt(element0, [1, 1]);
        var morphs = new Array(4);
        morphs[0] = dom.createAttrMorph(element0, 'class');
        morphs[1] = dom.createMorphAt(element1, 1, 1);
        morphs[2] = dom.createMorphAt(element1, 3, 3);
        morphs[3] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [1, 14], [1, 38]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [1, 43], [1, 73]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 25], [4, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 54], [4, 59]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 69], [4, 77]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 87], [4, 95]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 12], [4, 97]]], 0, 0], ["content", "label", ["loc", [null, [4, 98], [4, 107]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [7, 4], [7, 48]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/form-element/horizontal/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 4,
                "column": 8
              },
              "end": {
                "line": 6,
                "column": 8
              }
            },
            "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 20], [5, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 26], [5, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 40], [5, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 12], [5, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 8
              },
              "end": {
                "line": 8,
                "column": 8
              }
            },
            "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 26], [7, 39]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 45], [7, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 55], [7, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 73], [7, 78]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 91], [7, 102]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 113], [7, 122]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 132], [7, 140]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 150], [7, 158]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 12], [7, 160]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 12,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 14], [4, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [4, 8], [8, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 8], [9, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 8], [10, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 16,
                "column": 8
              }
            },
            "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "yield", [["get", "value", ["loc", [null, [15, 20], [15, 25]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [15, 26], [15, 39]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [15, 40], [15, 50]]], 0, 0, 0, 0]], [], ["loc", [null, [15, 12], [15, 52]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 16,
                "column": 8
              },
              "end": {
                "line": 18,
                "column": 8
              }
            },
            "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("            ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "bs-input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [17, 28], [17, 32]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [17, 38], [17, 49]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [17, 56], [17, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [17, 74], [17, 85]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [17, 96], [17, 105]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [17, 115], [17, 123]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [17, 133], [17, 141]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 12], [17, 143]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 0
            },
            "end": {
              "line": 22,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [13, 18], [13, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [13, 47], [13, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "if", [["get", "hasBlock", ["loc", [null, [14, 14], [14, 22]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [14, 8], [18, 15]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [19, 8], [19, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [20, 8], [20, 52]]], 0, 0]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/horizontal/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [22, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/form-element/horizontal/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 23], [4, 36]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 42], [4, 46]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 55], [4, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 79], [4, 98]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 115], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 141], [4, 146]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 156], [4, 164]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 174], [4, 182]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 184]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/horizontal/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-select", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 25], [10, 29]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [10, 38], [10, 45]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [10, 62], [10, 81]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [10, 98], [10, 117]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 124], [10, 129]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 131]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/horizontal/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/form-element/horizontal/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element1 = dom.childAt(fragment, [1]);
          var element2 = dom.childAt(fragment, [3]);
          var morphs = new Array(7);
          morphs[0] = dom.createAttrMorph(element1, 'class');
          morphs[1] = dom.createAttrMorph(element1, 'for');
          morphs[2] = dom.createMorphAt(element1, 0, 0);
          morphs[3] = dom.createAttrMorph(element2, 'class');
          morphs[4] = dom.createMorphAt(element2, 1, 1);
          morphs[5] = dom.createMorphAt(element2, 3, 3);
          morphs[6] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["get", "horizontalLabelGridClass", ["loc", [null, [2, 34], [2, 58]]], 0, 0, 0, 0], " ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 66], [2, 80]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 61], [2, 92]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 101], [2, 114]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 118], [2, 127]]], 0, 0, 0, 0], ["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [3, 18], [3, 42]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 25], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 44], [4, 48]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 55], [4, 60]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 73], [4, 84]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 95], [4, 104]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 110], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 120], [4, 124]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 134], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 152], [4, 160]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 8], [4, 162]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 8], [5, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 8], [6, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 14,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/horizontal/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createMorphAt(element0, 1, 1);
          morphs[2] = dom.createMorphAt(element0, 3, 3);
          morphs[3] = dom.createMorphAt(element0, 5, 5);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", [["get", "horizontalInputGridClass", ["loc", [null, [9, 18], [9, 42]]], 0, 0, 0, 0], " ", ["get", "horizontalInputOffsetGridClass", ["loc", [null, [9, 47], [9, 77]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "bs-textarea", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [10, 27], [10, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [10, 38], [10, 43]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [10, 56], [10, 67]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [10, 78], [10, 87]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [10, 93], [10, 97]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [10, 103], [10, 107]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [10, 117], [10, 125]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [10, 135], [10, 143]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [10, 8], [10, 145]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [11, 8], [11, 59]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [12, 8], [12, 52]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/horizontal/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [14, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/form-element/inline/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 6
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/inline/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/form-element/inline/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/inline/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 10,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/inline/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("simple-fit/templates/components/form-element/inline/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/inline/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/inline/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/form-element/inline/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/inline/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/inline/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 36], [4, 40]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 47], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 102], [4, 106]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 112], [4, 116]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 126], [4, 134]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 144], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/form-element/vertical/checkbox", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 44
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/vertical/checkbox.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "checkbox");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode(" ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "input", [], ["name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [3, 21], [3, 25]]], 0, 0, 0, 0]], [], [], 0, 0], "type", "checkbox", "checked", ["subexpr", "@mut", [["get", "value", ["loc", [null, [3, 50], [3, 55]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [3, 65], [3, 73]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [3, 83], [3, 91]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 8], [3, 93]]], 0, 0], ["content", "label", ["loc", [null, [3, 94], [3, 103]]], 0, 0, 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/form-element/vertical/default", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 4,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "yield", [["get", "value", ["loc", [null, [5, 12], [5, 17]]], 0, 0, 0, 0], ["get", "formElementId", ["loc", [null, [5, 18], [5, 31]]], 0, 0, 0, 0], ["get", "validation", ["loc", [null, [5, 32], [5, 42]]], 0, 0, 0, 0]], [], ["loc", [null, [5, 4], [5, 44]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 8,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/vertical/default.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["inline", "bs-input", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [7, 18], [7, 31]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [7, 37], [7, 41]]], 0, 0, 0, 0]], [], [], 0, 0], "type", ["subexpr", "@mut", [["get", "controlType", ["loc", [null, [7, 47], [7, 58]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [7, 65], [7, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [7, 83], [7, 94]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [7, 105], [7, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [7, 124], [7, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [7, 142], [7, 150]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [7, 4], [7, 152]]], 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 11,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/vertical/default.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["block", "if", [["get", "hasBlock", ["loc", [null, [4, 6], [4, 14]]], 0, 0, 0, 0]], [], 1, 2, ["loc", [null, [4, 0], [8, 7]]]], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [9, 0], [9, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [10, 0], [10, 44]]], 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("simple-fit/templates/components/form-element/vertical/select", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/vertical/select.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/vertical/select.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-select", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 15], [4, 28]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 34], [4, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "content", ["subexpr", "@mut", [["get", "choices", ["loc", [null, [4, 47], [4, 54]]], 0, 0, 0, 0]], [], [], 0, 0], "optionValuePath", ["subexpr", "@mut", [["get", "choiceValueProperty", ["loc", [null, [4, 71], [4, 90]]], 0, 0, 0, 0]], [], [], 0, 0], "optionLabelPath", ["subexpr", "@mut", [["get", "choiceLabelProperty", ["loc", [null, [4, 107], [4, 126]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 133], [4, 138]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 148], [4, 156]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 166], [4, 174]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 176]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/form-element/vertical/textarea", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/form-element/vertical/textarea.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("label");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(3);
          morphs[0] = dom.createAttrMorph(element0, 'class');
          morphs[1] = dom.createAttrMorph(element0, 'for');
          morphs[2] = dom.createMorphAt(element0, 0, 0);
          return morphs;
        },
        statements: [["attribute", "class", ["concat", ["control-label ", ["subexpr", "if", [["get", "invisibleLabel", ["loc", [null, [2, 37], [2, 51]]], 0, 0, 0, 0], "sr-only"], [], ["loc", [null, [2, 32], [2, 63]]], 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "for", ["concat", [["get", "formElementId", ["loc", [null, [2, 72], [2, 85]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "label", ["loc", [null, [2, 89], [2, 98]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 7,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/form-element/vertical/textarea.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 5, 5, contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [["block", "if", [["get", "hasLabel", ["loc", [null, [1, 6], [1, 14]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [1, 0], [3, 7]]]], ["inline", "bs-textarea", [], ["id", ["subexpr", "@mut", [["get", "formElementId", ["loc", [null, [4, 17], [4, 30]]], 0, 0, 0, 0]], [], [], 0, 0], "value", ["subexpr", "@mut", [["get", "value", ["loc", [null, [4, 37], [4, 42]]], 0, 0, 0, 0]], [], [], 0, 0], "name", ["subexpr", "@mut", [["get", "name", ["loc", [null, [4, 48], [4, 52]]], 0, 0, 0, 0]], [], [], 0, 0], "placeholder", ["subexpr", "@mut", [["get", "placeholder", ["loc", [null, [4, 65], [4, 76]]], 0, 0, 0, 0]], [], [], 0, 0], "autofocus", ["subexpr", "@mut", [["get", "autofocus", ["loc", [null, [4, 87], [4, 96]]], 0, 0, 0, 0]], [], [], 0, 0], "disabled", ["subexpr", "@mut", [["get", "disabled", ["loc", [null, [4, 106], [4, 114]]], 0, 0, 0, 0]], [], [], 0, 0], "required", ["subexpr", "@mut", [["get", "required", ["loc", [null, [4, 124], [4, 132]]], 0, 0, 0, 0]], [], [], 0, 0], "cols", ["subexpr", "@mut", [["get", "cols", ["loc", [null, [4, 138], [4, 142]]], 0, 0, 0, 0]], [], [], 0, 0], "rows", ["subexpr", "@mut", [["get", "rows", ["loc", [null, [4, 148], [4, 152]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [4, 0], [4, 154]]], 0, 0], ["inline", "partial", ["components/form-element/feedback-icon"], [], ["loc", [null, [5, 0], [5, 51]]], 0, 0], ["inline", "partial", ["components/form-element/errors"], [], ["loc", [null, [6, 0], [6, 44]]], 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/login-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 1
            },
            "end": {
              "line": 17,
              "column": 1
            }
          },
          "moduleName": "simple-fit/templates/components/login-form.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("		");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "auth-error alert");
          var el2 = dom.createTextNode("\n			");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "auth.errorMsg", ["loc", [null, [15, 3], [15, 20]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 30,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/components/login-form.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-inline pull-right");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("label");
        dom.setAttribute(el2, "class", "checkbox");
        var el3 = dom.createTextNode("\n		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n		Remember me\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("button");
        dom.setAttribute(el2, "type", "submit");
        dom.setAttribute(el2, "class", "btn btn-default btn-sm");
        var el3 = dom.createTextNode("Sign in");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n	");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("p");
        dom.setAttribute(el2, "class", "right margin-3");
        var el3 = dom.createTextNode("Don't have an account yet? \n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("		");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n	");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [9]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(element0, 1, 1);
        morphs[1] = dom.createMorphAt(element0, 3, 3);
        morphs[2] = dom.createMorphAt(element0, 5, 5);
        morphs[3] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
        morphs[4] = dom.createElementMorph(element1);
        morphs[5] = dom.createMorphAt(dom.childAt(element0, [13]), 2, 2);
        return morphs;
      },
      statements: [["block", "if", [["get", "auth.errorMsg", ["loc", [null, [13, 7], [13, 20]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [13, 1], [17, 8]]]], ["inline", "input", [], ["type", "text", "class", "input-sm form-control", "value", ["subexpr", "@mut", [["get", "auth.username", ["loc", [null, [18, 57], [18, 70]]], 0, 0, 0, 0]], [], [], 0, 0], "enter", "login", "placeholder", "Username"], ["loc", [null, [18, 1], [18, 109]]], 0, 0], ["inline", "input", [], ["type", "text", "class", "input-sm form-control", "value", ["subexpr", "@mut", [["get", "auth.password", ["loc", [null, [19, 56], [19, 69]]], 0, 0, 0, 0]], [], [], 0, 0], "enter", "login", "placeholder", "Password", "type", "password"], ["loc", [null, [19, 1], [19, 124]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "checked", ["subexpr", "@mut", [["get", "auth.remember", ["loc", [null, [21, 34], [21, 47]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [21, 2], [21, 49]]], 0, 0], ["element", "action", ["login"], [], ["loc", [null, [24, 54], [24, 72]]], 0, 0], ["content", "register-modal", ["loc", [null, [28, 7], [28, 25]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/components/navigation-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 6
            },
            "end": {
              "line": 8,
              "column": 6
            }
          },
          "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      Simple\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 8
              },
              "end": {
                "line": 13,
                "column": 66
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Trainer ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "caret");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 16,
                    "column": 14
                  },
                  "end": {
                    "line": 16,
                    "column": 48
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Trainer Home");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 15,
                  "column": 10
                },
                "end": {
                  "line": 17,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["block", "link-to", ["trainer"], [], 0, null, ["loc", [null, [16, 14], [16, 60]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 18,
                    "column": 14
                  },
                  "end": {
                    "line": 18,
                    "column": 45
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Client Home");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 17,
                  "column": 10
                },
                "end": {
                  "line": 19,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["block", "link-to", ["index"], [], 0, null, ["loc", [null, [18, 14], [18, 57]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 14,
                "column": 8
              },
              "end": {
                "line": 21,
                "column": 8
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [15, 20], [15, 53]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [15, 16], [15, 64]]], 0, 0]], [], 0, 1, ["loc", [null, [15, 10], [19, 17]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 22,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-dropdown-toggle", [], [], 0, null, ["loc", [null, [13, 8], [13, 89]]]], ["block", "bs-dropdown-menu", [], [], 1, null, ["loc", [null, [14, 8], [21, 29]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child2 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 25,
                "column": 8
              },
              "end": {
                "line": 25,
                "column": 68
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Dietitian ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("span");
            dom.setAttribute(el1, "class", "caret");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 28,
                    "column": 14
                  },
                  "end": {
                    "line": 28,
                    "column": 52
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Dietitian Home");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 10
                },
                "end": {
                  "line": 29,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["block", "link-to", ["dietitian"], [], 0, null, ["loc", [null, [28, 14], [28, 64]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 30,
                    "column": 14
                  },
                  "end": {
                    "line": 30,
                    "column": 47
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Client Home");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 29,
                  "column": 10
                },
                "end": {
                  "line": 31,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("          ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              return morphs;
            },
            statements: [["block", "link-to", ["dclient"], [], 0, null, ["loc", [null, [30, 14], [30, 59]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child2 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 32,
                  "column": 14
                },
                "end": {
                  "line": 32,
                  "column": 43
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Recipes");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child3 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 33,
                  "column": 14
                },
                "end": {
                  "line": 33,
                  "column": 44
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Video Chat");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 8
              },
              "end": {
                "line": 35,
                "column": 8
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            var el2 = dom.createComment("");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n        \n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(3);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 0, 0);
            morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 0, 0);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [27, 20], [27, 53]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [27, 16], [27, 64]]], 0, 0]], [], 0, 1, ["loc", [null, [27, 10], [31, 17]]]], ["block", "link-to", ["recipes"], [], 2, null, ["loc", [null, [32, 14], [32, 55]]]], ["block", "link-to", ["vchat"], [], 3, null, ["loc", [null, [33, 14], [33, 56]]]]],
          locals: [],
          templates: [child0, child1, child2, child3]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 24,
              "column": 8
            },
            "end": {
              "line": 36,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-dropdown-toggle", [], [], 0, null, ["loc", [null, [25, 8], [25, 91]]]], ["block", "bs-dropdown-menu", [], [], 1, null, ["loc", [null, [26, 8], [35, 29]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child3 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 40,
                  "column": 10
                },
                "end": {
                  "line": 40,
                  "column": 72
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Marketplace ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("span");
              dom.setAttribute(el1, "class", "caret");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 42,
                    "column": 16
                  },
                  "end": {
                    "line": 42,
                    "column": 51
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Trainer Market");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          var child1 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 43,
                    "column": 16
                  },
                  "end": {
                    "line": 43,
                    "column": 53
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("Dietitian Market");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes() {
                return [];
              },
              statements: [],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 41,
                  "column": 10
                },
                "end": {
                  "line": 44,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n            ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("li");
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
              morphs[1] = dom.createMorphAt(dom.childAt(fragment, [3]), 0, 0);
              return morphs;
            },
            statements: [["block", "link-to", ["market"], [], 0, null, ["loc", [null, [42, 16], [42, 63]]]], ["block", "link-to", ["market"], [], 1, null, ["loc", [null, [43, 16], [43, 65]]]]],
            locals: [],
            templates: [child0, child1]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 39,
                "column": 10
              },
              "end": {
                "line": 45,
                "column": 10
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "bs-dropdown-toggle", [], [], 0, null, ["loc", [null, [40, 10], [40, 95]]]], ["block", "bs-dropdown-menu", [], [], 1, null, ["loc", [null, [41, 10], [44, 31]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 38,
              "column": 8
            },
            "end": {
              "line": 46,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "bs-dropdown", [], ["tagName", "li"], 0, null, ["loc", [null, [39, 10], [45, 26]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child4 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 50,
                    "column": 10
                  },
                  "end": {
                    "line": 52,
                    "column": 10
                  }
                },
                "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createTextNode("            ");
                dom.appendChild(el0, el1);
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                var el1 = dom.createTextNode("\n");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
                return morphs;
              },
              statements: [["inline", "render", ["notifications"], [], ["loc", [null, [51, 12], [51, 38]]], 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 49,
                  "column": 10
                },
                "end": {
                  "line": 53,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
              dom.insertBoundary(fragment, 0);
              dom.insertBoundary(fragment, null);
              return morphs;
            },
            statements: [["block", "bs-modal", [], ["open", ["subexpr", "@mut", [["get", "showNotifications", ["loc", [null, [50, 27], [50, 44]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Notifications", "footer", false], 0, null, ["loc", [null, [50, 10], [52, 23]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        var child1 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 53,
                  "column": 10
                },
                "end": {
                  "line": 54,
                  "column": 10
                }
              },
              "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
            },
            isEmpty: true,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 10
              },
              "end": {
                "line": 57,
                "column": 10
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "btn btn-danger navbar-btn");
            dom.setAttribute(el1, "type", "button");
            var el2 = dom.createTextNode("new alert!");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element1 = dom.childAt(fragment, [2]);
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            morphs[1] = dom.createElementMorph(element1);
            dom.insertBoundary(fragment, 0);
            return morphs;
          },
          statements: [["block", "if", [["get", "value", ["loc", [null, [49, 16], [49, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [49, 10], [54, 17]]]], ["element", "action", ["showNotifications"], [], ["loc", [null, [56, 66], [56, 96]]], 0, 0]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 57,
                "column": 10
              },
              "end": {
                "line": 60,
                "column": 10
              }
            },
            "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("          ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("button");
            dom.setAttribute(el1, "class", "btn navbar-btn");
            dom.setAttribute(el1, "type", "button");
            var el2 = dom.createTextNode("no alerts");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element0 = dom.childAt(fragment, [1]);
            var morphs = new Array(1);
            morphs[0] = dom.createElementMorph(element0);
            return morphs;
          },
          statements: [["element", "action", ["showNotifications"], [], ["loc", [null, [58, 55], [58, 85]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 47,
              "column": 8
            },
            "end": {
              "line": 61,
              "column": 8
            }
          },
          "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
          dom.insertBoundary(fragment, 0);
          dom.insertBoundary(fragment, null);
          return morphs;
        },
        statements: [["block", "if", [["get", "auth.user.basicprofile.trainerprofile.trainerpending", ["loc", [null, [48, 16], [48, 68]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [48, 10], [60, 17]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 75,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/navigation-menu.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("nav");
        dom.setAttribute(el1, "class", "navbar navbar-inverse navbar-fixed-top");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container-fluid");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "navbar-header");
        var el4 = dom.createTextNode("\n\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n      ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "nav navbar-nav");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("  \n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "nav-login");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("ul");
        dom.setAttribute(el4, "class", "nav navbar-nav navbar-right");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("li");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    \n    \n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element2 = dom.childAt(fragment, [1, 1]);
        var element3 = dom.childAt(element2, [3]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [1]), 1, 1);
        morphs[1] = dom.createMorphAt(element3, 1, 1);
        morphs[2] = dom.createMorphAt(element3, 3, 3);
        morphs[3] = dom.createMorphAt(element3, 5, 5);
        morphs[4] = dom.createMorphAt(element3, 6, 6);
        morphs[5] = dom.createMorphAt(dom.childAt(element2, [5, 1, 1]), 1, 1);
        return morphs;
      },
      statements: [["block", "link-to", ["application"], ["class", "navbar-brand"], 0, null, ["loc", [null, [6, 6], [8, 18]]]], ["block", "bs-dropdown", [], ["tagName", "li"], 1, null, ["loc", [null, [12, 8], [22, 24]]]], ["block", "bs-dropdown", [], ["tagName", "li"], 2, null, ["loc", [null, [24, 8], [36, 24]]]], ["block", "unless", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [38, 22], [38, 55]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [38, 18], [38, 66]]], 0, 0]], [], 3, null, ["loc", [null, [38, 8], [46, 19]]]], ["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [47, 18], [47, 51]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [47, 14], [47, 62]]], 0, 0]], [], 4, null, ["loc", [null, [47, 8], [61, 15]]]], ["content", "auth-manager", ["loc", [null, [67, 10], [67, 26]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2, child3, child4]
    };
  })());
});
define("simple-fit/templates/components/notification-alert", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 11,
                "column": 0
              },
              "end": {
                "line": 26,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/components/notification-alert.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	\n	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("table");
            dom.setAttribute(el1, "class", "table");
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "container-fluid");
            var el3 = dom.createTextNode("\n	");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n  	\n\n	\n\n    \n   	");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n   	");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n  \n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "request-list", [], ["client", ["subexpr", "@mut", [["get", "clientprofile", ["loc", [null, [15, 23], [15, 36]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [15, 1], [15, 38]]], 0, 0]],
          locals: ["clientprofile"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/notification-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "each", [["get", "auth.user.basicprofile.trainerprofile.trainerpending", ["loc", [null, [11, 8], [11, 60]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 0], [26, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 30,
              "column": 0
            },
            "end": {
              "line": 33,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/notification-alert.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("You must login as trainer to view trainer trainer notifications\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/notification-alert.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [1, 10], [1, 43]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [1, 6], [1, 54]]], 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [33, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/register-modal", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 43,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/register-modal.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "button");
        dom.setAttribute(el1, "class", "btn btn-link");
        dom.setAttribute(el1, "data-toggle", "modal");
        dom.setAttribute(el1, "data-target", "#myModal");
        var el2 = dom.createTextNode("Register!");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "modal");
        dom.setAttribute(el1, "id", "myModal");
        dom.setAttribute(el1, "tabindex", "0");
        dom.setAttribute(el1, "role", "dialog");
        dom.setAttribute(el1, "aria-hidden", "true");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog modal-lg modal-offset-top");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5, "class", "container");
        var el6 = dom.createTextNode("\n				  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createComment(" <h2>Registration by user type</h2> ");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("ul");
        dom.setAttribute(el6, "class", "nav nav-tabs");
        var el7 = dom.createTextNode("\n				    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        dom.setAttribute(el7, "class", "active");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "data-toggle", "tab");
        dom.setAttribute(el8, "href", "#clientr");
        var el9 = dom.createTextNode("Client");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "data-toggle", "tab");
        dom.setAttribute(el8, "href", "#trainerr");
        var el9 = dom.createTextNode("Trainer");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("li");
        var el8 = dom.createElement("a");
        dom.setAttribute(el8, "data-toggle", "tab");
        dom.setAttribute(el8, "href", "#dietitianr");
        var el9 = dom.createTextNode("Dietitian");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n				  ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6, "class", "tab-content");
        var el7 = dom.createTextNode("\n				    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "clientr");
        dom.setAttribute(el7, "class", "tab-pane fade in active");
        var el8 = dom.createTextNode("\n				      	");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "");
        var el9 = dom.createElement("h1");
        var el10 = dom.createTextNode(" Register as client");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n						");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("button");
        dom.setAttribute(el9, "class", "btn btn-default");
        dom.setAttribute(el9, "onclick", "window.location='cregister';");
        dom.setAttribute(el9, "data-dismiss", "modal");
        var el10 = dom.createTextNode("Client");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n						");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n				    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "trainerr");
        dom.setAttribute(el7, "class", "tab-pane fade");
        var el8 = dom.createTextNode("\n				      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "");
        var el9 = dom.createElement("h1");
        var el10 = dom.createTextNode(" Register as trainer");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n					  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("button");
        dom.setAttribute(el9, "class", "btn btn-default");
        dom.setAttribute(el9, "onclick", "window.location='cregister';");
        dom.setAttribute(el9, "data-dismiss", "modal");
        var el10 = dom.createTextNode("Trainer");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n					  ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n				    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				    ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("div");
        dom.setAttribute(el7, "id", "dietitianr");
        dom.setAttribute(el7, "class", "tab-pane fade");
        var el8 = dom.createTextNode("\n				      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("div");
        dom.setAttribute(el8, "class", "");
        var el9 = dom.createElement("h1");
        var el10 = dom.createTextNode(" Register as dietitian");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n					  ");
        dom.appendChild(el8, el9);
        var el9 = dom.createElement("button");
        dom.setAttribute(el9, "class", "btn btn-default");
        dom.setAttribute(el9, "onclick", "window.location='cregister';");
        dom.setAttribute(el9, "data-dismiss", "modal");
        var el10 = dom.createTextNode("Dietitian");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        var el9 = dom.createTextNode("\n					  ");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n				    ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n				  ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n				");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "yield", ["loc", [null, [42, 0], [42, 9]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/request-list", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 84
          }
        },
        "moduleName": "simple-fit/templates/components/request-list.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("First Name: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nLast Name: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("button");
        dom.setAttribute(el1, "type", "submit");
        dom.setAttribute(el1, "class", "btn");
        var el2 = dom.createTextNode("Approve");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [7]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [["content", "client.basicinfo.firstname", ["loc", [null, [2, 12], [2, 42]]], 0, 0, 0, 0], ["content", "client.basicinfo.lastname", ["loc", [null, [3, 11], [3, 40]]], 0, 0, 0, 0], ["element", "action", ["approveClient", ["get", "client", ["loc", [null, [4, 59], [4, 65]]], 0, 0, 0, 0]], [], ["loc", [null, [4, 34], [4, 67]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/test-component", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 7,
              "column": 0
            },
            "end": {
              "line": 11,
              "column": 1
            }
          },
          "moduleName": "simple-fit/templates/components/test-component.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("CONGRATS!! YOU ARE A trainer!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("b");
          var el2 = dom.createTextNode("Certification:");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode(" ");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 5, 5, contextualElement);
          return morphs;
        },
        statements: [["content", "auth.user.basicprofile.trainerprofile.certification", ["loc", [null, [9, 24], [9, 79]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 1
            },
            "end": {
              "line": 13,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/test-component.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode(" not trainer!\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/test-component.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Username: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nUser id: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nFirst name: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h3");
        var el2 = dom.createTextNode("Type:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        morphs[2] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        morphs[3] = dom.createMorphAt(fragment, 14, 14, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["content", "auth.user.username", ["loc", [null, [1, 10], [1, 32]]], 0, 0, 0, 0], ["content", "auth.user.id", ["loc", [null, [2, 9], [2, 25]]], 0, 0, 0, 0], ["content", "auth.user.basicprofile.firstname", ["loc", [null, [3, 12], [3, 48]]], 0, 0, 0, 0], ["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [7, 10], [7, 43]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [7, 6], [7, 54]]], 0, 0]], [], 0, 1, ["loc", [null, [7, 0], [13, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/components/trainer-login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/components/trainer-login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/components/trainer-search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 0
              },
              "end": {
                "line": 13,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/components/trainer-search.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("You have a trainer.\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 16,
                  "column": 0
                },
                "end": {
                  "line": 27,
                  "column": 0
                }
              },
              "moduleName": "simple-fit/templates/components/trainer-search.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("  You have a pending trainer request. ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("br");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n   Name of trainer you requested: ");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("br");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n   Cancel request?");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("br");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n   ");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("button");
              dom.setAttribute(el1, "type", "submit");
              dom.setAttribute(el1, "class", "btn");
              var el2 = dom.createTextNode("Cancel");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n    \n  \n\n\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var element3 = dom.childAt(fragment, [8]);
              var morphs = new Array(2);
              morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
              morphs[1] = dom.createElementMorph(element3);
              return morphs;
            },
            statements: [["content", "auth.user.basicprofile.clientprofile.trainerpending.basicinfo.firstname", ["loc", [null, [18, 34], [18, 109]]], 0, 0, 0, 0], ["element", "action", ["cancelRequest"], [], ["loc", [null, [20, 37], [20, 63]]], 0, 0]],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            var child0 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.8.2+31ba4c74",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 31,
                      "column": 2
                    },
                    "end": {
                      "line": 39,
                      "column": 4
                    }
                  },
                  "moduleName": "simple-fit/templates/components/trainer-search.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("    ");
                  dom.appendChild(el0, el1);
                  var el1 = dom.createElement("li");
                  dom.setAttribute(el1, "class", "market");
                  var el2 = dom.createTextNode("\n    ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("h4");
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createTextNode(" ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n    ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("h4");
                  var el3 = dom.createTextNode("Gender: ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n    ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("h4");
                  var el3 = dom.createTextNode("Age: ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n    ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("h4");
                  var el3 = dom.createTextNode("Certification: ");
                  dom.appendChild(el2, el3);
                  var el3 = dom.createComment("");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n    ");
                  dom.appendChild(el1, el2);
                  var el2 = dom.createElement("button");
                  dom.setAttribute(el2, "type", "submit");
                  dom.setAttribute(el2, "class", "btn");
                  var el3 = dom.createTextNode("Request");
                  dom.appendChild(el2, el3);
                  dom.appendChild(el1, el2);
                  var el2 = dom.createTextNode("\n    ");
                  dom.appendChild(el1, el2);
                  dom.appendChild(el0, el1);
                  var el1 = dom.createTextNode("\n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                  var element0 = dom.childAt(fragment, [1]);
                  var element1 = dom.childAt(element0, [1]);
                  var element2 = dom.childAt(element0, [9]);
                  var morphs = new Array(6);
                  morphs[0] = dom.createMorphAt(element1, 0, 0);
                  morphs[1] = dom.createMorphAt(element1, 2, 2);
                  morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
                  morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]), 1, 1);
                  morphs[4] = dom.createMorphAt(dom.childAt(element0, [7]), 1, 1);
                  morphs[5] = dom.createElementMorph(element2);
                  return morphs;
                },
                statements: [["content", "basicprofile.firstname", ["loc", [null, [33, 8], [33, 34]]], 0, 0, 0, 0], ["content", "basicprofile.lastname", ["loc", [null, [33, 35], [33, 60]]], 0, 0, 0, 0], ["content", "basicprofile.gender", ["loc", [null, [34, 16], [34, 39]]], 0, 0, 0, 0], ["content", "basicprofile.age", ["loc", [null, [35, 13], [35, 33]]], 0, 0, 0, 0], ["content", "basicprofile.trainerprofile.certification", ["loc", [null, [36, 23], [36, 68]]], 0, 0, 0, 0], ["element", "action", ["requestTrainer", ["get", "basicprofile", ["loc", [null, [37, 64], [37, 76]]], 0, 0, 0, 0]], [], ["loc", [null, [37, 38], [37, 78]]], 0, 0]],
                locals: [],
                templates: []
              };
            })();
            var child1 = (function () {
              return {
                meta: {
                  "revision": "Ember@2.8.2+31ba4c74",
                  "loc": {
                    "source": null,
                    "start": {
                      "line": 39,
                      "column": 4
                    },
                    "end": {
                      "line": 41,
                      "column": 4
                    }
                  },
                  "moduleName": "simple-fit/templates/components/trainer-search.hbs"
                },
                isEmpty: false,
                arity: 0,
                cachedFragment: null,
                hasRendered: false,
                buildFragment: function buildFragment(dom) {
                  var el0 = dom.createDocumentFragment();
                  var el1 = dom.createTextNode("  \n");
                  dom.appendChild(el0, el1);
                  return el0;
                },
                buildRenderNodes: function buildRenderNodes() {
                  return [];
                },
                statements: [],
                locals: [],
                templates: []
              };
            })();
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 30,
                    "column": 0
                  },
                  "end": {
                    "line": 42,
                    "column": 0
                  }
                },
                "moduleName": "simple-fit/templates/components/trainer-search.hbs"
              },
              isEmpty: false,
              arity: 1,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["block", "if", [["subexpr", "eq", [["get", "basicprofile.membertype", ["loc", [null, [31, 12], [31, 35]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [31, 8], [31, 46]]], 0, 0]], [], 0, 1, ["loc", [null, [31, 2], [41, 11]]]]],
              locals: ["basicprofile"],
              templates: [child0, child1]
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 27,
                  "column": 0
                },
                "end": {
                  "line": 45,
                  "column": 1
                }
              },
              "moduleName": "simple-fit/templates/components/trainer-search.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createElement("h1");
              var el2 = dom.createTextNode("Available Trainers:");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("ul");
              dom.setAttribute(el1, "class", "row-fluid block-grid-3");
              var el2 = dom.createTextNode("\n");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]), 1, 1);
              return morphs;
            },
            statements: [["block", "each", [["get", "model", ["loc", [null, [30, 8], [30, 13]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [30, 0], [42, 9]]]]],
            locals: [],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 13,
                "column": 0
              },
              "end": {
                "line": 49,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/components/trainer-search.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "if", [["get", "auth.user.basicprofile.clientprofile.trainerpending.id", ["loc", [null, [16, 6], [16, 60]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [16, 0], [45, 8]]]]],
          locals: [],
          templates: [child0, child1]
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 51,
              "column": 1
            }
          },
          "moduleName": "simple-fit/templates/components/trainer-search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "if", [["get", "auth.user.basicprofile.clientprofile.trainer.id", ["loc", [null, [10, 6], [10, 53]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [10, 0], [49, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 51,
              "column": 1
            },
            "end": {
              "line": 55,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/components/trainer-search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\nLogin as client user to do this\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 55,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/components/trainer-search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.market {\n  border: 1px solid black;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [8, 10], [8, 43]]], 0, 0, 0, 0], "client"], [], ["loc", [null, [8, 6], [8, 53]]], 0, 0]], [], 0, 1, ["loc", [null, [8, 0], [55, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define('simple-fit/templates/components/x-select', ['exports', 'emberx-select/templates/components/x-select'], function (exports, _emberxSelectTemplatesComponentsXSelect) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberxSelectTemplatesComponentsXSelect['default'];
    }
  });
});
define("simple-fit/templates/cregister", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/cregister.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("Welcome ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "content.user.username", ["loc", [null, [2, 13], [2, 38]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 6
                },
                "end": {
                  "line": 15,
                  "column": 6
                }
              },
              "moduleName": "simple-fit/templates/cregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col-sm-7 alert alert-warning fade in");
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["content", "error", ["loc", [null, [13, 6], [13, 15]]], 0, 0, 0, 0]],
            locals: ["error"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 5
              },
              "end": {
                "line": 18,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "validationErrorMsg", ["loc", [null, [11, 14], [11, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [15, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 5
              },
              "end": {
                "line": 30,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "firstnameerror", ["loc", [null, [28, 28], [28, 46]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 5
              },
              "end": {
                "line": 41,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "lastnameerror", ["loc", [null, [39, 28], [39, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 5
              },
              "end": {
                "line": 52,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "usernameerror", ["loc", [null, [50, 28], [50, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 59,
                "column": 5
              },
              "end": {
                "line": 63,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "passworderror", ["loc", [null, [61, 28], [61, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 5
              },
              "end": {
                "line": 80,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "emailerror", ["loc", [null, [78, 28], [78, 42]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 87,
                "column": 5
              },
              "end": {
                "line": 91,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "ageerror", ["loc", [null, [89, 28], [89, 40]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child7 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 98,
                  "column": 7
                },
                "end": {
                  "line": 98,
                  "column": 71
                }
              },
              "moduleName": "simple-fit/templates/cregister.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select most applicable");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 100,
                    "column": 8
                  },
                  "end": {
                    "line": 100,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/cregister.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "g", ["loc", [null, [100, 30], [100, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 99,
                  "column": 7
                },
                "end": {
                  "line": 102,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/cregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "g", ["loc", [null, [100, 27], [100, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [100, 8], [100, 49]]]]],
            locals: ["g"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 97,
                "column": 6
              },
              "end": {
                "line": 103,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [98, 7], [98, 85]]]], ["block", "each", [["get", "genders", ["loc", [null, [99, 15], [99, 22]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [99, 7], [102, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child8 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 114,
                "column": 5
              },
              "end": {
                "line": 118,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "cityerror", ["loc", [null, [116, 28], [116, 41]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child9 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 124,
                  "column": 7
                },
                "end": {
                  "line": 124,
                  "column": 73
                }
              },
              "moduleName": "simple-fit/templates/cregister.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select current residence");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 126,
                    "column": 8
                  },
                  "end": {
                    "line": 126,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/cregister.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "s", ["loc", [null, [126, 30], [126, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 125,
                  "column": 7
                },
                "end": {
                  "line": 128,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/cregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "s", ["loc", [null, [126, 27], [126, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [126, 8], [126, 49]]]]],
            locals: ["s"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 123,
                "column": 6
              },
              "end": {
                "line": 129,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [124, 7], [124, 87]]]], ["block", "each", [["get", "states", ["loc", [null, [125, 15], [125, 21]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [125, 7], [128, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child10 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 134,
                "column": 6
              },
              "end": {
                "line": 136,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/cregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "render", ["privacypolicy"], [], ["loc", [null, [135, 7], [135, 33]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 153,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/cregister.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-12");
          dom.setAttribute(el2, "style", "margin-left: 15px;");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("form");
          dom.setAttribute(el3, "class", "form-inline");
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("			\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("First name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Last name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Username:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Confirm Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Email:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Age:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Gender:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("City you live in:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("State:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-10");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-block btn-warning");
          dom.setAttribute(el6, "type", "button");
          var el7 = dom.createTextNode("Read Privacy and informed consent policy");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createTextNode("\n							");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" I have read and agree to the privacy policy.\n						");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3 offset3");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "type", "button");
          dom.setAttribute(el6, "class", "btn btn-block btn-default");
          var el7 = dom.createTextNode("Sign Up as Client");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n			");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("/.row");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element1, [3]);
          var element3 = dom.childAt(element0, [5]);
          var element4 = dom.childAt(element3, [3]);
          var element5 = dom.childAt(element0, [7]);
          var element6 = dom.childAt(element0, [9]);
          var element7 = dom.childAt(element6, [3]);
          var element8 = dom.childAt(element0, [13]);
          var element9 = dom.childAt(element8, [3]);
          var element10 = dom.childAt(element0, [15]);
          var element11 = dom.childAt(element10, [3]);
          var element12 = dom.childAt(element0, [19]);
          var element13 = dom.childAt(element12, [3]);
          var element14 = dom.childAt(element0, [23, 1]);
          var element15 = dom.childAt(element14, [3]);
          var element16 = dom.childAt(element0, [25, 1, 1]);
          var morphs = new Array(28);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createMorphAt(element2, 1, 1);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          morphs[4] = dom.createElementMorph(element4);
          morphs[5] = dom.createMorphAt(element4, 1, 1);
          morphs[6] = dom.createMorphAt(element3, 5, 5);
          morphs[7] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
          morphs[8] = dom.createMorphAt(element5, 5, 5);
          morphs[9] = dom.createAttrMorph(element7, 'class');
          morphs[10] = dom.createMorphAt(element7, 1, 1);
          morphs[11] = dom.createMorphAt(element6, 5, 5);
          morphs[12] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 1, 1);
          morphs[13] = dom.createAttrMorph(element9, 'class');
          morphs[14] = dom.createMorphAt(element9, 1, 1);
          morphs[15] = dom.createMorphAt(element8, 5, 5);
          morphs[16] = dom.createElementMorph(element11);
          morphs[17] = dom.createMorphAt(element11, 1, 1);
          morphs[18] = dom.createMorphAt(element10, 5, 5);
          morphs[19] = dom.createMorphAt(dom.childAt(element0, [17, 3]), 1, 1);
          morphs[20] = dom.createElementMorph(element13);
          morphs[21] = dom.createMorphAt(element13, 1, 1);
          morphs[22] = dom.createMorphAt(element12, 5, 5);
          morphs[23] = dom.createMorphAt(dom.childAt(element0, [21, 3]), 1, 1);
          morphs[24] = dom.createMorphAt(element14, 1, 1);
          morphs[25] = dom.createElementMorph(element15);
          morphs[26] = dom.createMorphAt(dom.childAt(element14, [5]), 1, 1);
          morphs[27] = dom.createElementMorph(element16);
          return morphs;
        },
        statements: [["block", "if", [["get", "validationErrorMsg", ["loc", [null, [9, 11], [9, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 5], [18, 12]]]], ["element", "firstnameclasses", [], [], ["loc", [null, [23, 27], [23, 47]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.firstname", ["loc", [null, [24, 32], [24, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "firstname"], ["loc", [null, [24, 6], [24, 143]]], 0, 0], ["block", "if", [["get", "firstnameerror", ["loc", [null, [26, 11], [26, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [26, 5], [30, 12]]]], ["element", "lastnameclasses", [], [], ["loc", [null, [34, 27], [34, 46]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.lastname", ["loc", [null, [35, 32], [35, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "lastname"], ["loc", [null, [35, 6], [35, 141]]], 0, 0], ["block", "if", [["get", "lastnameerror", ["loc", [null, [37, 11], [37, 24]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [37, 5], [41, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.username", ["loc", [null, [46, 32], [46, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Username"], ["loc", [null, [46, 6], [46, 133]]], 0, 0], ["block", "if", [["get", "usernameerror", ["loc", [null, [48, 11], [48, 24]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [48, 5], [52, 12]]]], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "passwordclasses", ["loc", [null, [56, 28], [56, 43]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.password", ["loc", [null, [57, 32], [57, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Password", "type", "password"], ["loc", [null, [57, 6], [57, 149]]], 0, 0], ["block", "if", [["get", "passworderror", ["loc", [null, [59, 11], [59, 24]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [59, 5], [63, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "confirmpassword", ["loc", [null, [68, 32], [68, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Confirm Password", "type", "password"], ["loc", [null, [68, 6], [68, 151]]], 0, 0], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "emailclasses", ["loc", [null, [73, 28], [73, 40]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.email", ["loc", [null, [74, 32], [74, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "Email"], ["loc", [null, [74, 6], [74, 127]]], 0, 0], ["block", "if", [["get", "emailerror", ["loc", [null, [76, 11], [76, 21]]], 0, 0, 0, 0]], [], 5, null, ["loc", [null, [76, 5], [80, 12]]]], ["element", "ageclasses", [], [], ["loc", [null, [84, 27], [84, 41]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.age", ["loc", [null, [85, 32], [85, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "age"], ["loc", [null, [85, 6], [85, 131]]], 0, 0], ["block", "if", [["get", "ageerror", ["loc", [null, [87, 11], [87, 19]]], 0, 0, 0, 0]], [], 6, null, ["loc", [null, [87, 5], [91, 12]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.gender", ["loc", [null, [97, 61], [97, 88]]], 0, 0, 0, 0]], [], [], 0, 0]], 7, null, ["loc", [null, [97, 6], [103, 19]]]], ["element", "cityclasses", [], [], ["loc", [null, [111, 27], [111, 42]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.city", ["loc", [null, [112, 32], [112, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "cregister", "placeholder", "city"], ["loc", [null, [112, 6], [112, 133]]], 0, 0], ["block", "if", [["get", "cityerror", ["loc", [null, [114, 11], [114, 20]]], 0, 0, 0, 0]], [], 8, null, ["loc", [null, [114, 5], [118, 12]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.state", ["loc", [null, [123, 60], [123, 86]]], 0, 0, 0, 0]], [], [], 0, 0]], 9, null, ["loc", [null, [123, 6], [129, 19]]]], ["block", "bs-modal", [], ["open", ["subexpr", "@mut", [["get", "showPolicy", ["loc", [null, [134, 23], [134, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Privacy Policy", "footer", false], 10, null, ["loc", [null, [134, 6], [136, 19]]]], ["element", "action", ["showPolicy"], [], ["loc", [null, [137, 62], [137, 85]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "name", "doesAgree", "checked", ["subexpr", "@mut", [["get", "agree", ["loc", [null, [139, 56], [139, 61]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [139, 7], [139, 63]]], 0, 0], ["element", "action", ["cregister"], [], ["loc", [null, [146, 62], [146, 84]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 153,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/cregister.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "success", ["loc", [null, [1, 6], [1, 13]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [153, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/dclient", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 177,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/dclient.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n* {box-sizing:border-box;}\nul {list-style-type: none;}\nbody {font-family: Verdana,sans-serif;}\n\n.month {\n    padding: 70px 25px;\n    width: 100%;\n    background: #4169E1;\n}\n\n.month ul {\n    margin: 0;\n    padding: 0;\n}\n\n.month ul li {\n    color: white;\n    font-size: 20px;\n    text-transform: uppercase;\n    letter-spacing: 3px;\n}\n\n.month .prev {\n    float: left;\n    padding-top: 10px;\n}\n\n.month .next {\n    float: right;\n    padding-top: 10px;\n}\n\n.weekdays {\n    margin: 0;\n    padding: 10px 0;\n    background-color: #ddd;\n}\n\n.weekdays li {\n    display: inline-block;\n    width: 13.6%;\n    color: #666;\n    text-align: center;\n}\n\n.days {\n    padding: 10px 0;\n    background: #eee;\n    margin: 0;\n}\n\n.days li {\n    list-style-type: none;\n    display: inline-block;\n    width: 13.6%;\n    text-align: center;\n    margin-bottom: 5px;\n    font-size:12px;\n    color: #777;\n}\n\n.days li .active {\n    padding: 5px;\n    background: #4169E1;\n    color: white !important\n}\n\n/* Add media queries for smaller screens */\n@media screen and (max-width:720px) {\n    .weekdays li, .days li {width: 13.1%;}\n}\n\n@media screen and (max-width: 420px) {\n    .weekdays li, .days li {width: 12.5%;}\n    .days li .active {padding: 2px;}\n}\n\n@media screen and (max-width: 290px) {\n    .weekdays li, .days li {width: 12.2%;}\n}\n\n.button {\n  color: black;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "wrap");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Client Home Page");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Meal Logging");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "action", "saveMeal");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        dom.setAttribute(el3, "class", "meallog");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n      Meal Title: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "class", "button");
        dom.setAttribute(el5, "value", "title/");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode(" ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("enter=\"someAction\"");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n      Meal Date/Time: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "date");
        dom.setAttribute(el5, "class", "button");
        dom.setAttribute(el5, "value", "mealday/");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("http://sul.im/ember-cli-bootstrap-datepicker/");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n      Allow as many food items as the user wants to enter");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      Item 1: ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "text");
        dom.setAttribute(el5, "value", "MenuItem");
        dom.setAttribute(el5, "class", "button");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("    ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "button");
        dom.setAttribute(el5, "value", "Add Item");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "button");
        dom.setAttribute(el5, "value", "Submit");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\nView Meals for the day/week\nWaiting for update of ember-calendar for 2.8\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h3");
        var el3 = dom.createTextNode("Food Calendar");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("http://www.w3schools.com/howto/howto_css_calendar.asp");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "month");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("ul");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "prev");
        var el5 = dom.createTextNode("❮");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "class", "next");
        var el5 = dom.createTextNode("❯");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("li");
        dom.setAttribute(el4, "style", "text-align:center");
        var el5 = dom.createTextNode("\n      November");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("br");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5, "style", "font-size:18px");
        var el6 = dom.createTextNode("2016");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n    ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "weekdays");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Mo");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Tu");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("We");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Th");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Fr");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Sa");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("Su");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "days");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("31");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("1");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("2");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("3");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("4");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("5");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("6");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("7");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("8");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("9");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createElement("span");
        dom.setAttribute(el4, "class", "active");
        var el5 = dom.createTextNode("10");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("11");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("12");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("13");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("14");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("15");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("16");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("17");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("18");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("19");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("20");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("21");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("22");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("23");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("24");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("25");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("26");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("27");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("28");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("29");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("li");
        var el4 = dom.createTextNode("30");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [176, 0], [176, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/dietitian", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 14,
              "column": 4
            },
            "end": {
              "line": 25,
              "column": 4
            }
          },
          "moduleName": "simple-fit/templates/dietitian.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("      ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "client");
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "height", "120");
          dom.setAttribute(el2, "widtch", "120");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n          Cool graphing and tracking and stuff\n        ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          dom.setAttribute(el2, "href", "/vchat");
          var el3 = dom.createTextNode("Initiate Video Conference");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("User Profile");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [3]);
          var element3 = dom.childAt(element0, [11]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(element1, 0, 0);
          morphs[1] = dom.createMorphAt(element1, 2, 2);
          morphs[2] = dom.createAttrMorph(element2, 'src');
          morphs[3] = dom.createAttrMorph(element3, 'href');
          return morphs;
        },
        statements: [["content", "client.firstName", ["loc", [null, [16, 12], [16, 32]]], 0, 0, 0, 0], ["content", "client.lastName", ["loc", [null, [16, 33], [16, 52]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "client.photo", ["loc", [null, [17, 20], [17, 32]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["/users/", ["get", "client.url", ["loc", [null, [23, 26], [23, 36]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
        locals: ["client"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 34,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/dietitian.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.client {\n  border: 1px solid black;\n}\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "class", "wrap");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Dietitian Home Page");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Alerts");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("a");
        dom.setAttribute(el2, "href", "alerts");
        var el3 = dom.createTextNode("View client progress alerts");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Client List");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        dom.setAttribute(el2, "class", "row-fluid block-grid-3");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h2");
        var el3 = dom.createTextNode("Add Client");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ul");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("input");
        dom.setAttribute(el3, "type", "button");
        dom.setAttribute(el3, "value", "Generate Pairing Code");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2, 9]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [14, 12], [14, 17]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [14, 4], [25, 13]]]], ["content", "outlet", ["loc", [null, [33, 0], [33, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/dregister", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/dregister.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("Welcome ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "content.user.username", ["loc", [null, [2, 13], [2, 38]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 6
                },
                "end": {
                  "line": 15,
                  "column": 6
                }
              },
              "moduleName": "simple-fit/templates/dregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col-sm-7 alert alert-warning fade in");
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["content", "error", ["loc", [null, [13, 6], [13, 15]]], 0, 0, 0, 0]],
            locals: ["error"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 5
              },
              "end": {
                "line": 18,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "validationErrorMsg", ["loc", [null, [11, 14], [11, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [15, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 5
              },
              "end": {
                "line": 30,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "firstnameerror", ["loc", [null, [28, 28], [28, 46]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 5
              },
              "end": {
                "line": 41,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "lastnameerror", ["loc", [null, [39, 28], [39, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 5
              },
              "end": {
                "line": 52,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "usernameerror", ["loc", [null, [50, 28], [50, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 59,
                "column": 5
              },
              "end": {
                "line": 63,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "passworderror", ["loc", [null, [61, 28], [61, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 5
              },
              "end": {
                "line": 80,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "emailerror", ["loc", [null, [78, 28], [78, 42]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 87,
                "column": 5
              },
              "end": {
                "line": 91,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "ageerror", ["loc", [null, [89, 28], [89, 40]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child7 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 98,
                  "column": 7
                },
                "end": {
                  "line": 98,
                  "column": 71
                }
              },
              "moduleName": "simple-fit/templates/dregister.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select most applicable");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 100,
                    "column": 8
                  },
                  "end": {
                    "line": 100,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/dregister.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "g", ["loc", [null, [100, 30], [100, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 99,
                  "column": 7
                },
                "end": {
                  "line": 102,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/dregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "g", ["loc", [null, [100, 27], [100, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [100, 8], [100, 49]]]]],
            locals: ["g"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 97,
                "column": 6
              },
              "end": {
                "line": 103,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [98, 7], [98, 85]]]], ["block", "each", [["get", "genders", ["loc", [null, [99, 15], [99, 22]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [99, 7], [102, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child8 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 114,
                "column": 5
              },
              "end": {
                "line": 118,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "cityerror", ["loc", [null, [116, 28], [116, 41]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child9 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 124,
                  "column": 7
                },
                "end": {
                  "line": 124,
                  "column": 73
                }
              },
              "moduleName": "simple-fit/templates/dregister.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select current residence");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 126,
                    "column": 8
                  },
                  "end": {
                    "line": 126,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/dregister.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "s", ["loc", [null, [126, 30], [126, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 125,
                  "column": 7
                },
                "end": {
                  "line": 128,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/dregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "s", ["loc", [null, [126, 27], [126, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [126, 8], [126, 49]]]]],
            locals: ["s"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 123,
                "column": 6
              },
              "end": {
                "line": 129,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [124, 7], [124, 87]]]], ["block", "each", [["get", "states", ["loc", [null, [125, 15], [125, 21]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [125, 7], [128, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child10 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 140,
                "column": 6
              },
              "end": {
                "line": 142,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/dregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "render", ["privacypolicy"], [], ["loc", [null, [141, 7], [141, 33]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 160,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/dregister.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-12");
          dom.setAttribute(el2, "style", "margin-left: 15px;");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("form");
          dom.setAttribute(el3, "class", "form-inline");
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("			\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("First name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Last name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Username:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Confirm Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Email:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Age:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Gender:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("City you live in:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("State:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Specialty:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-10");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-block btn-warning");
          dom.setAttribute(el6, "type", "button");
          var el7 = dom.createTextNode("Read Privacy and informed consent policy");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createTextNode("\n							");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" I have read and agree to the privacy policy.\n						");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3 offset3");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "type", "button");
          dom.setAttribute(el6, "class", "btn btn-block btn-default");
          var el7 = dom.createTextNode("Sign Up as Dietitian");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n			");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("/.row");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element1, [3]);
          var element3 = dom.childAt(element0, [5]);
          var element4 = dom.childAt(element3, [3]);
          var element5 = dom.childAt(element0, [7]);
          var element6 = dom.childAt(element0, [9]);
          var element7 = dom.childAt(element6, [3]);
          var element8 = dom.childAt(element0, [13]);
          var element9 = dom.childAt(element8, [3]);
          var element10 = dom.childAt(element0, [15]);
          var element11 = dom.childAt(element10, [3]);
          var element12 = dom.childAt(element0, [19]);
          var element13 = dom.childAt(element12, [3]);
          var element14 = dom.childAt(element0, [25, 1]);
          var element15 = dom.childAt(element14, [3]);
          var element16 = dom.childAt(element0, [27, 1, 1]);
          var morphs = new Array(29);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createMorphAt(element2, 1, 1);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          morphs[4] = dom.createElementMorph(element4);
          morphs[5] = dom.createMorphAt(element4, 1, 1);
          morphs[6] = dom.createMorphAt(element3, 5, 5);
          morphs[7] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
          morphs[8] = dom.createMorphAt(element5, 5, 5);
          morphs[9] = dom.createAttrMorph(element7, 'class');
          morphs[10] = dom.createMorphAt(element7, 1, 1);
          morphs[11] = dom.createMorphAt(element6, 5, 5);
          morphs[12] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 1, 1);
          morphs[13] = dom.createAttrMorph(element9, 'class');
          morphs[14] = dom.createMorphAt(element9, 1, 1);
          morphs[15] = dom.createMorphAt(element8, 5, 5);
          morphs[16] = dom.createElementMorph(element11);
          morphs[17] = dom.createMorphAt(element11, 1, 1);
          morphs[18] = dom.createMorphAt(element10, 5, 5);
          morphs[19] = dom.createMorphAt(dom.childAt(element0, [17, 3]), 1, 1);
          morphs[20] = dom.createElementMorph(element13);
          morphs[21] = dom.createMorphAt(element13, 1, 1);
          morphs[22] = dom.createMorphAt(element12, 5, 5);
          morphs[23] = dom.createMorphAt(dom.childAt(element0, [21, 3]), 1, 1);
          morphs[24] = dom.createMorphAt(dom.childAt(element0, [23, 3]), 1, 1);
          morphs[25] = dom.createMorphAt(element14, 1, 1);
          morphs[26] = dom.createElementMorph(element15);
          morphs[27] = dom.createMorphAt(dom.childAt(element14, [5]), 1, 1);
          morphs[28] = dom.createElementMorph(element16);
          return morphs;
        },
        statements: [["block", "if", [["get", "validationErrorMsg", ["loc", [null, [9, 11], [9, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 5], [18, 12]]]], ["element", "firstnameclasses", [], [], ["loc", [null, [23, 27], [23, 47]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.firstname", ["loc", [null, [24, 32], [24, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "firstname"], ["loc", [null, [24, 6], [24, 143]]], 0, 0], ["block", "if", [["get", "firstnameerror", ["loc", [null, [26, 11], [26, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [26, 5], [30, 12]]]], ["element", "lastnameclasses", [], [], ["loc", [null, [34, 27], [34, 46]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.lastname", ["loc", [null, [35, 32], [35, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "lastname"], ["loc", [null, [35, 6], [35, 141]]], 0, 0], ["block", "if", [["get", "lastnameerror", ["loc", [null, [37, 11], [37, 24]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [37, 5], [41, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.username", ["loc", [null, [46, 32], [46, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "Username"], ["loc", [null, [46, 6], [46, 133]]], 0, 0], ["block", "if", [["get", "usernameerror", ["loc", [null, [48, 11], [48, 24]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [48, 5], [52, 12]]]], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "passwordclasses", ["loc", [null, [56, 28], [56, 43]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.password", ["loc", [null, [57, 32], [57, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "Password", "type", "password"], ["loc", [null, [57, 6], [57, 149]]], 0, 0], ["block", "if", [["get", "passworderror", ["loc", [null, [59, 11], [59, 24]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [59, 5], [63, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "confirmpassword", ["loc", [null, [68, 32], [68, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "Confirm Password", "type", "password"], ["loc", [null, [68, 6], [68, 151]]], 0, 0], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "emailclasses", ["loc", [null, [73, 28], [73, 40]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.email", ["loc", [null, [74, 32], [74, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "Email"], ["loc", [null, [74, 6], [74, 127]]], 0, 0], ["block", "if", [["get", "emailerror", ["loc", [null, [76, 11], [76, 21]]], 0, 0, 0, 0]], [], 5, null, ["loc", [null, [76, 5], [80, 12]]]], ["element", "ageclasses", [], [], ["loc", [null, [84, 27], [84, 41]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.age", ["loc", [null, [85, 32], [85, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "age"], ["loc", [null, [85, 6], [85, 131]]], 0, 0], ["block", "if", [["get", "ageerror", ["loc", [null, [87, 11], [87, 19]]], 0, 0, 0, 0]], [], 6, null, ["loc", [null, [87, 5], [91, 12]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.gender", ["loc", [null, [97, 61], [97, 88]]], 0, 0, 0, 0]], [], [], 0, 0]], 7, null, ["loc", [null, [97, 6], [103, 19]]]], ["element", "cityclasses", [], [], ["loc", [null, [111, 27], [111, 42]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.city", ["loc", [null, [112, 32], [112, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "city"], ["loc", [null, [112, 6], [112, 133]]], 0, 0], ["block", "if", [["get", "cityerror", ["loc", [null, [114, 11], [114, 20]]], 0, 0, 0, 0]], [], 8, null, ["loc", [null, [114, 5], [118, 12]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.state", ["loc", [null, [123, 60], [123, 86]]], 0, 0, 0, 0]], [], [], 0, 0]], 9, null, ["loc", [null, [123, 6], [129, 19]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.dietitianprofile.specialty", ["loc", [null, [135, 32], [135, 66]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "dregister", "placeholder", "specialty"], ["loc", [null, [135, 6], [135, 147]]], 0, 0], ["block", "bs-modal", [], ["open", ["subexpr", "@mut", [["get", "showPolicy", ["loc", [null, [140, 23], [140, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Privacy Policy", "footer", false], 10, null, ["loc", [null, [140, 6], [142, 19]]]], ["element", "action", ["showPolicy"], [], ["loc", [null, [143, 62], [143, 85]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "name", "doesAgree", "checked", ["subexpr", "@mut", [["get", "agree", ["loc", [null, [145, 56], [145, 61]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [145, 7], [145, 63]]], 0, 0], ["element", "action", ["dregister"], [], ["loc", [null, [153, 62], [153, 84]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 160,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/dregister.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "success", ["loc", [null, [1, 6], [1, 13]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [160, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/fakeroute", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 10
          }
        },
        "moduleName": "simple-fit/templates/fakeroute.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "category-list", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [16, 22], [16, 27]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [16, 0], [16, 29]]], 0, 0], ["content", "outlet", ["loc", [null, [17, 0], [17, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 2
            },
            "end": {
              "line": 3,
              "column": 28
            }
          },
          "moduleName": "simple-fit/templates/index.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("test");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 6
          }
        },
        "moduleName": "simple-fit/templates/index.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "logo");
        dom.setAttribute(el1, "class", "col-md-4 col-md-offset-3");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 2, 2);
        return morphs;
      },
      statements: [["block", "link-to", ["testing"], [], 0, null, ["loc", [null, [3, 2], [3, 40]]]]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/login", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 14,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/login.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment(" Eventually add some if statements ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1, "class", "form-group");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "form-group");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "col-md-4 col-md-offset-4");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var morphs = new Array(2);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [1, 1]), 1, 1);
        return morphs;
      },
      statements: [["element", "action", ["login"], ["on", "submit"], ["loc", [null, [2, 25], [2, 55]]], 0, 0], ["content", "login-form", ["loc", [null, [6, 4], [6, 18]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/market", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 10
          }
        },
        "moduleName": "simple-fit/templates/market.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Marketplace for Personal Trainers");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["inline", "trainer-search", [], ["model", ["subexpr", "@mut", [["get", "model", ["loc", [null, [3, 23], [3, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 0], [3, 30]]], 0, 0], ["content", "outlet", ["loc", [null, [5, 0], [5, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/newfeature", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/newfeature.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("New Field: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nComputed Field: ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
        morphs[1] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "newfield", ["loc", [null, [1, 11], [1, 23]]], 0, 0, 0, 0], ["content", "computedField", ["loc", [null, [2, 16], [2, 33]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/notifications", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 13,
                  "column": 0
                },
                "end": {
                  "line": 21,
                  "column": 0
                }
              },
              "moduleName": "simple-fit/templates/notifications.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("	\n	");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("table");
              dom.setAttribute(el1, "class", "table");
              var el2 = dom.createTextNode("\n	");
              dom.appendChild(el1, el2);
              var el2 = dom.createElement("div");
              dom.setAttribute(el2, "class", "container-fluid");
              var el3 = dom.createTextNode("\n		");
              dom.appendChild(el2, el3);
              var el3 = dom.createComment("");
              dom.appendChild(el2, el3);
              var el3 = dom.createTextNode("\n   	");
              dom.appendChild(el2, el3);
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n   	");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n  \n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
              return morphs;
            },
            statements: [["inline", "request-list", [], ["client", ["subexpr", "@mut", [["get", "clientprofile", ["loc", [null, [17, 24], [17, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [17, 2], [17, 39]]], 0, 0]],
            locals: ["clientprofile"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 10,
                "column": 0
              },
              "end": {
                "line": 24,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/notifications.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("\n\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "auth.user.basicprofile.trainerprofile.trainerpending", ["loc", [null, [13, 8], [13, 60]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [13, 0], [21, 9]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 24,
                "column": 0
              },
              "end": {
                "line": 28,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/notifications.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("You have no notifications\n\n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 6,
              "column": 0
            },
            "end": {
              "line": 32,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/notifications.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "if", [["get", "auth.user.basicprofile.trainerprofile.trainerpending", ["loc", [null, [10, 6], [10, 58]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [10, 0], [28, 7]]]]],
        locals: [],
        templates: [child0, child1]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 32,
              "column": 0
            },
            "end": {
              "line": 35,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/notifications.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("You must login as trainer to view trainer trainer notifications\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/notifications.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Notification:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [6, 10], [6, 43]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [6, 6], [6, 54]]], 0, 0]], [], 0, 1, ["loc", [null, [6, 0], [35, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/privacypolicy", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 8
          }
        },
        "moduleName": "simple-fit/templates/privacypolicy.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("Policies");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() {
        return [];
      },
      statements: [],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/recipe", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/recipe.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "ing", ["loc", [null, [10, 8], [10, 15]]], 0, 0, 0, 0]],
        locals: ["ing"],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 16,
              "column": 2
            },
            "end": {
              "line": 18,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/recipe.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
          return morphs;
        },
        statements: [["content", "model.steps", ["loc", [null, [17, 8], [17, 23]]], 0, 0, 0, 0]],
        locals: ["step"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 23,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/recipe.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("img");
        dom.setAttribute(el1, "height", "200");
        dom.setAttribute(el1, "widtch", "200");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("br");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Ingredient List");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h4");
        var el3 = dom.createTextNode("Steps");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("ol");
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [5]);
        var morphs = new Array(5);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 0, 0);
        morphs[1] = dom.createAttrMorph(element0, 'src');
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [11]), 3, 3);
        morphs[3] = dom.createMorphAt(dom.childAt(fragment, [13, 3]), 1, 1);
        morphs[4] = dom.createMorphAt(fragment, 15, 15, contextualElement);
        return morphs;
      },
      statements: [["content", "model.title", ["loc", [null, [2, 4], [2, 19]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "model.image", ["loc", [null, [4, 12], [4, 23]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["block", "each", [["get", "model.ingredients", ["loc", [null, [9, 10], [9, 27]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 2], [11, 11]]]], ["block", "each", [["get", "model.steps", ["loc", [null, [16, 10], [16, 21]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [16, 2], [18, 11]]]], ["content", "outlet", ["loc", [null, [22, 0], [22, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/recipes", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 11,
              "column": 2
            },
            "end": {
              "line": 20,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/recipes.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "recipe");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("img");
          dom.setAttribute(el2, "height", "120");
          dom.setAttribute(el2, "widtch", "120");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("p");
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("a");
          var el4 = dom.createTextNode("Click here to go to recipe!");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" replace with short desc{{recipe.desc}}");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n        ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element0, [5]);
          var element3 = dom.childAt(element2, [1]);
          var morphs = new Array(4);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createAttrMorph(element1, 'src');
          morphs[2] = dom.createAttrMorph(element3, 'href');
          morphs[3] = dom.createMorphAt(element2, 5, 5);
          return morphs;
        },
        statements: [["content", "recipe.title", ["loc", [null, [13, 10], [13, 26]]], 0, 0, 0, 0], ["attribute", "src", ["concat", [["get", "recipe.image", ["loc", [null, [14, 18], [14, 30]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["/recipes/", ["get", "recipe.link", ["loc", [null, [16, 28], [16, 39]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["content", "recipe.url", ["loc", [null, [17, 12], [17, 26]]], 0, 0, 0, 0]],
        locals: ["recipe"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 24,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/recipes.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.recipe {\n  border: 1px solid black;\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Recipe Home Page");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "row-fluid block-grid-3");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [5]), 1, 1);
        morphs[1] = dom.createMorphAt(fragment, 7, 7, contextualElement);
        return morphs;
      },
      statements: [["block", "each", [["get", "model", ["loc", [null, [11, 10], [11, 15]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 2], [20, 11]]]], ["content", "outlet", ["loc", [null, [23, 0], [23, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0]
    };
  })());
});
define("simple-fit/templates/register", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/register.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("Welcome ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "content.user.username", ["loc", [null, [2, 13], [2, 38]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 6,
                "column": 0
              },
              "end": {
                "line": 6,
                "column": 28
              }
            },
            "moduleName": "simple-fit/templates/register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Here");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 0
              },
              "end": {
                "line": 9,
                "column": 28
              }
            },
            "moduleName": "simple-fit/templates/register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Here");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 12,
                "column": 0
              },
              "end": {
                "line": 12,
                "column": 28
              }
            },
            "moduleName": "simple-fit/templates/register.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("Here");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes() {
            return [];
          },
          statements: [],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 15,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/register.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createElement("h1");
          var el3 = dom.createTextNode(" Register as client");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createElement("h1");
          var el3 = dom.createTextNode(" Register as trainer");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("(Works)");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "");
          var el2 = dom.createElement("h1");
          var el3 = dom.createTextNode(" Register as dietitian");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createTextNode("(In progress)");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]), 2, 2);
          morphs[1] = dom.createMorphAt(dom.childAt(fragment, [2]), 2, 2);
          morphs[2] = dom.createMorphAt(dom.childAt(fragment, [4]), 2, 2);
          return morphs;
        },
        statements: [["block", "link-to", ["cregister"], [], 0, null, ["loc", [null, [6, 0], [6, 40]]]], ["block", "link-to", ["tregister"], [], 1, null, ["loc", [null, [9, 0], [9, 40]]]], ["block", "link-to", ["dregister"], [], 2, null, ["loc", [null, [12, 0], [12, 40]]]]],
        locals: [],
        templates: [child0, child1, child2]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 15,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/register.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "success", ["loc", [null, [1, 6], [1, 13]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [15, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/testing", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 8,
                "column": 0
              },
              "end": {
                "line": 23,
                "column": 0
              }
            },
            "moduleName": "simple-fit/templates/testing.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("	\n	");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("table");
            dom.setAttribute(el1, "class", "table");
            var el2 = dom.createTextNode("\n	");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("div");
            dom.setAttribute(el2, "class", "container-fluid");
            var el3 = dom.createTextNode("\n	");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode("\n  	\n\n	\n\n    \n   	");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n\n   	");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n  \n\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 1, 1);
            return morphs;
          },
          statements: [["inline", "request-list", [], ["client", ["subexpr", "@mut", [["get", "clientprofile", ["loc", [null, [12, 23], [12, 36]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [12, 1], [12, 38]]], 0, 0]],
          locals: ["clientprofile"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 27,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/testing.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n\n\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
          return morphs;
        },
        statements: [["block", "each", [["get", "auth.user.basicprofile.trainerprofile.trainerpending", ["loc", [null, [8, 8], [8, 60]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [8, 0], [23, 9]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 27,
              "column": 0
            },
            "end": {
              "line": 30,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/testing.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("You must login as trainer to view trainer trainer notifications\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 31,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/testing.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Test component:");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode(" \n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [3, 10], [3, 43]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [3, 6], [3, 54]]], 0, 0]], [], 0, 1, ["loc", [null, [3, 0], [30, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/trainer", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      var child0 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 19,
                "column": 4
              },
              "end": {
                "line": 34,
                "column": 4
              }
            },
            "moduleName": "simple-fit/templates/trainer.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("      ");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("li");
            dom.setAttribute(el1, "class", "client");
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("h4");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            var el3 = dom.createTextNode(" ");
            dom.appendChild(el2, el3);
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("img");
            dom.setAttribute(el2, "src", "http://www.unomaha.edu/college-of-information-science-and-technology/_files/images/faculty/Profile%20Head%20Shots/Matt%20Hale.jpg");
            dom.setAttribute(el2, "height", "180");
            dom.setAttribute(el2, "widtch", "180");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            var el3 = dom.createTextNode("\n          Cool graphing and tracking and stuff\n        ");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createTextNode("Initiate Video Conference");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("a");
            var el3 = dom.createTextNode("User Profile");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("br");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createComment(" Trigger the modal with a button ");
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n        ");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("button");
            dom.setAttribute(el2, "type", "button");
            dom.setAttribute(el2, "class", "btn btn-primary");
            dom.setAttribute(el2, "data-toggle", "modal");
            dom.setAttribute(el2, "data-target", "#myModal");
            var el3 = dom.createTextNode("Actions");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n      ");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var element2 = dom.childAt(fragment, [1]);
            var element3 = dom.childAt(element2, [1]);
            var element4 = dom.childAt(element2, [9]);
            var element5 = dom.childAt(element2, [13]);
            var morphs = new Array(4);
            morphs[0] = dom.createMorphAt(element3, 0, 0);
            morphs[1] = dom.createMorphAt(element3, 2, 2);
            morphs[2] = dom.createAttrMorph(element4, 'href');
            morphs[3] = dom.createAttrMorph(element5, 'href');
            return morphs;
          },
          statements: [["content", "client.basicinfo.firstname", ["loc", [null, [21, 12], [21, 42]]], 0, 0, 0, 0], ["content", "client.basicinfo.lastname", ["loc", [null, [21, 43], [21, 72]]], 0, 0, 0, 0], ["attribute", "href", ["concat", ["/vchat/", ["get", "client.id", ["loc", [null, [27, 26], [27, 35]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["attribute", "href", ["concat", ["/users/", ["get", "client.id", ["loc", [null, [29, 26], [29, 35]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0]],
          locals: ["client"],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 8,
              "column": 0
            },
            "end": {
              "line": 40,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/trainer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "wrap");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h1");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" Home Page");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h2");
          var el3 = dom.createTextNode("Client List");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("ul");
          dom.setAttribute(el2, "class", "row-fluid block-grid-3");
          var el3 = dom.createTextNode("\n");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("  ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element6 = dom.childAt(fragment, [2]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element6, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element6, [5]), 1, 1);
          return morphs;
        },
        statements: [["content", "auth.user.basicprofile.firstname", ["loc", [null, [15, 6], [15, 42]]], 0, 0, 0, 0], ["block", "each", [["get", "auth.user.basicprofile.trainerprofile.trainer", ["loc", [null, [19, 12], [19, 57]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [19, 4], [34, 13]]]]],
        locals: [],
        templates: [child0]
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 40,
              "column": 0
            },
            "end": {
              "line": 43,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/trainer.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("h2");
          var el2 = dom.createTextNode("You must login as trainer to view trainer clients");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 55,
              "column": 2
            },
            "end": {
              "line": 61,
              "column": 2
            }
          },
          "moduleName": "simple-fit/templates/trainer.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("    ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("li");
          dom.setAttribute(el1, "class", "client");
          var el2 = dom.createTextNode("\n      ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h4");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3, "type", "submit");
          dom.setAttribute(el3, "class", "btn btn-xs glyphicon glyphicon-remove");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1]);
          var element1 = dom.childAt(element0, [4]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0, 0, 0);
          morphs[1] = dom.createMorphAt(element0, 2, 2);
          morphs[2] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [["content", "client.firstname", ["loc", [null, [57, 10], [57, 30]]], 0, 0, 0, 0], ["content", "client.lastname", ["loc", [null, [57, 31], [57, 50]]], 0, 0, 0, 0], ["element", "action", ["delclient", ["get", "client", ["loc", [null, [58, 96], [58, 102]]], 0, 0, 0, 0]], [], ["loc", [null, [58, 74], [58, 104]]], 0, 0]],
        locals: ["client"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 92,
            "column": 10
          }
        },
        "moduleName": "simple-fit/templates/trainer.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("style");
        var el2 = dom.createTextNode("\n.client {\n  border: 1px solid black;\n}\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n\n\n\n\n\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h2");
        var el2 = dom.createTextNode("Fake Client List");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\nLeave this here. You will want to use this as example of how to modify data.\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("ul");
        dom.setAttribute(el1, "class", "row-fluid");
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("form");
        dom.setAttribute(el2, "class", "");
        dom.setAttribute(el2, "method", "post");
        var el3 = dom.createTextNode("\n    First name: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    Last name: ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("button");
        dom.setAttribute(el3, "type", "submit");
        dom.setAttribute(el3, "class", "btn");
        var el4 = dom.createTextNode("Save");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" Modal ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "id", "myModal");
        dom.setAttribute(el1, "class", "modal fade");
        dom.setAttribute(el1, "role", "dialog");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "modal-dialog");
        var el3 = dom.createTextNode("\n\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" Modal content");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "close");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("×");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5, "class", "modal-title");
        var el6 = dom.createTextNode("Modal Header");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("p");
        var el6 = dom.createTextNode("Some text in the modal.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "modal-footer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "btn btn-default");
        dom.setAttribute(el5, "data-dismiss", "modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element7 = dom.childAt(fragment, [7]);
        var element8 = dom.childAt(element7, [4]);
        var morphs = new Array(6);
        morphs[0] = dom.createMorphAt(fragment, 3, 3, contextualElement);
        morphs[1] = dom.createMorphAt(element7, 1, 1);
        morphs[2] = dom.createElementMorph(element8);
        morphs[3] = dom.createMorphAt(element8, 1, 1);
        morphs[4] = dom.createMorphAt(element8, 3, 3);
        morphs[5] = dom.createMorphAt(fragment, 13, 13, contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["subexpr", "eq", [["get", "auth.user.basicprofile.membertype", ["loc", [null, [8, 10], [8, 43]]], 0, 0, 0, 0], "trainer"], [], ["loc", [null, [8, 6], [8, 54]]], 0, 0]], [], 0, 1, ["loc", [null, [8, 0], [43, 7]]]], ["block", "each", [["get", "model", ["loc", [null, [55, 10], [55, 15]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [55, 2], [61, 11]]]], ["element", "action", ["addclient"], ["on", "submit"], ["loc", [null, [63, 29], [63, 64]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "firstname", ["loc", [null, [64, 30], [64, 39]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [64, 16], [64, 41]]], 0, 0], ["inline", "input", [], ["value", ["subexpr", "@mut", [["get", "lastname", ["loc", [null, [65, 29], [65, 37]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [65, 15], [65, 39]]], 0, 0], ["content", "outlet", ["loc", [null, [92, 0], [92, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1, child2]
    };
  })());
});
define("simple-fit/templates/tregister", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/tregister.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("h1");
          var el2 = dom.createTextNode("Welcome ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("!");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
          return morphs;
        },
        statements: [["content", "content.user.username", ["loc", [null, [2, 13], [2, 38]]], 0, 0, 0, 0]],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      var child0 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 11,
                  "column": 6
                },
                "end": {
                  "line": 15,
                  "column": 6
                }
              },
              "moduleName": "simple-fit/templates/tregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("						");
              dom.appendChild(el0, el1);
              var el1 = dom.createElement("div");
              dom.setAttribute(el1, "class", "col-sm-7 alert alert-warning fade in");
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              var el2 = dom.createComment("");
              dom.appendChild(el1, el2);
              var el2 = dom.createTextNode("\n						");
              dom.appendChild(el1, el2);
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1]), 1, 1);
              return morphs;
            },
            statements: [["content", "error", ["loc", [null, [13, 6], [13, 15]]], 0, 0, 0, 0]],
            locals: ["error"],
            templates: []
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 9,
                "column": 5
              },
              "end": {
                "line": 18,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n						\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["block", "each", [["get", "validationErrorMsg", ["loc", [null, [11, 14], [11, 32]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [11, 6], [15, 15]]]]],
          locals: [],
          templates: [child0]
        };
      })();
      var child1 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 26,
                "column": 5
              },
              "end": {
                "line": 30,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "firstnameerror", ["loc", [null, [28, 28], [28, 46]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child2 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 37,
                "column": 5
              },
              "end": {
                "line": 41,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "lastnameerror", ["loc", [null, [39, 28], [39, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child3 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 48,
                "column": 5
              },
              "end": {
                "line": 52,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "usernameerror", ["loc", [null, [50, 28], [50, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child4 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 59,
                "column": 5
              },
              "end": {
                "line": 63,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "passworderror", ["loc", [null, [61, 28], [61, 45]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child5 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 76,
                "column": 5
              },
              "end": {
                "line": 80,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "emailerror", ["loc", [null, [78, 28], [78, 42]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child6 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 87,
                "column": 5
              },
              "end": {
                "line": 91,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "ageerror", ["loc", [null, [89, 28], [89, 40]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child7 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 98,
                  "column": 7
                },
                "end": {
                  "line": 98,
                  "column": 71
                }
              },
              "moduleName": "simple-fit/templates/tregister.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select most applicable");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 100,
                    "column": 8
                  },
                  "end": {
                    "line": 100,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/tregister.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "g", ["loc", [null, [100, 30], [100, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 99,
                  "column": 7
                },
                "end": {
                  "line": 102,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/tregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "g", ["loc", [null, [100, 27], [100, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [100, 8], [100, 49]]]]],
            locals: ["g"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 97,
                "column": 6
              },
              "end": {
                "line": 103,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [98, 7], [98, 85]]]], ["block", "each", [["get", "genders", ["loc", [null, [99, 15], [99, 22]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [99, 7], [102, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child8 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 114,
                "column": 5
              },
              "end": {
                "line": 118,
                "column": 5
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("						");
            dom.appendChild(el0, el1);
            var el1 = dom.createElement("div");
            dom.setAttribute(el1, "class", "col-sm-5");
            var el2 = dom.createTextNode("\n							");
            dom.appendChild(el1, el2);
            var el2 = dom.createElement("p");
            dom.setAttribute(el2, "class", "reg-label");
            var el3 = dom.createComment("");
            dom.appendChild(el2, el3);
            dom.appendChild(el1, el2);
            var el2 = dom.createTextNode("\n						");
            dom.appendChild(el1, el2);
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(dom.childAt(fragment, [1, 1]), 0, 0);
            return morphs;
          },
          statements: [["content", "cityerror", ["loc", [null, [116, 28], [116, 41]]], 0, 0, 0, 0]],
          locals: [],
          templates: []
        };
      })();
      var child9 = (function () {
        var child0 = (function () {
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 124,
                  "column": 7
                },
                "end": {
                  "line": 124,
                  "column": 73
                }
              },
              "moduleName": "simple-fit/templates/tregister.hbs"
            },
            isEmpty: false,
            arity: 0,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("Select current residence");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes() {
              return [];
            },
            statements: [],
            locals: [],
            templates: []
          };
        })();
        var child1 = (function () {
          var child0 = (function () {
            return {
              meta: {
                "revision": "Ember@2.8.2+31ba4c74",
                "loc": {
                  "source": null,
                  "start": {
                    "line": 126,
                    "column": 8
                  },
                  "end": {
                    "line": 126,
                    "column": 35
                  }
                },
                "moduleName": "simple-fit/templates/tregister.hbs"
              },
              isEmpty: false,
              arity: 0,
              cachedFragment: null,
              hasRendered: false,
              buildFragment: function buildFragment(dom) {
                var el0 = dom.createDocumentFragment();
                var el1 = dom.createComment("");
                dom.appendChild(el0, el1);
                return el0;
              },
              buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
                var morphs = new Array(1);
                morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
                dom.insertBoundary(fragment, 0);
                dom.insertBoundary(fragment, null);
                return morphs;
              },
              statements: [["content", "s", ["loc", [null, [126, 30], [126, 35]]], 0, 0, 0, 0]],
              locals: [],
              templates: []
            };
          })();
          return {
            meta: {
              "revision": "Ember@2.8.2+31ba4c74",
              "loc": {
                "source": null,
                "start": {
                  "line": 125,
                  "column": 7
                },
                "end": {
                  "line": 128,
                  "column": 7
                }
              },
              "moduleName": "simple-fit/templates/tregister.hbs"
            },
            isEmpty: false,
            arity: 1,
            cachedFragment: null,
            hasRendered: false,
            buildFragment: function buildFragment(dom) {
              var el0 = dom.createDocumentFragment();
              var el1 = dom.createTextNode("								");
              dom.appendChild(el0, el1);
              var el1 = dom.createComment("");
              dom.appendChild(el0, el1);
              var el1 = dom.createTextNode("\n								\n");
              dom.appendChild(el0, el1);
              return el0;
            },
            buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
              var morphs = new Array(1);
              morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
              return morphs;
            },
            statements: [["block", "xs.option", [], ["value", ["subexpr", "@mut", [["get", "s", ["loc", [null, [126, 27], [126, 28]]], 0, 0, 0, 0]], [], [], 0, 0]], 0, null, ["loc", [null, [126, 8], [126, 49]]]]],
            locals: ["s"],
            templates: [child0]
          };
        })();
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 123,
                "column": 6
              },
              "end": {
                "line": 129,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 1,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(2);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            morphs[1] = dom.createMorphAt(fragment, 3, 3, contextualElement);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [["block", "xs.option", [], ["disabled", true, "selected", true], 0, null, ["loc", [null, [124, 7], [124, 87]]]], ["block", "each", [["get", "states", ["loc", [null, [125, 15], [125, 21]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [125, 7], [128, 16]]]]],
          locals: ["xs"],
          templates: [child0, child1]
        };
      })();
      var child10 = (function () {
        return {
          meta: {
            "revision": "Ember@2.8.2+31ba4c74",
            "loc": {
              "source": null,
              "start": {
                "line": 140,
                "column": 6
              },
              "end": {
                "line": 142,
                "column": 6
              }
            },
            "moduleName": "simple-fit/templates/tregister.hbs"
          },
          isEmpty: false,
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createTextNode("							");
            dom.appendChild(el0, el1);
            var el1 = dom.createComment("");
            dom.appendChild(el0, el1);
            var el1 = dom.createTextNode("\n");
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 1, 1, contextualElement);
            return morphs;
          },
          statements: [["inline", "render", ["privacypolicy"], [], ["loc", [null, [141, 7], [141, 33]]], 0, 0]],
          locals: [],
          templates: []
        };
      })();
      return {
        meta: {
          "revision": "Ember@2.8.2+31ba4c74",
          "loc": {
            "source": null,
            "start": {
              "line": 3,
              "column": 0
            },
            "end": {
              "line": 160,
              "column": 0
            }
          },
          "moduleName": "simple-fit/templates/tregister.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("	");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "class", "row");
          var el2 = dom.createTextNode("\n		");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("div");
          dom.setAttribute(el2, "class", "col-xs-12");
          dom.setAttribute(el2, "style", "margin-left: 15px;");
          var el3 = dom.createTextNode("\n			");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("form");
          dom.setAttribute(el3, "class", "form-inline");
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("			\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("First name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Last name:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Username:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Confirm Password:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Email:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Age:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Gender:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("City you live in:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n");
          dom.appendChild(el4, el5);
          var el5 = dom.createComment("");
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("State:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3");
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createElement("b");
          var el8 = dom.createTextNode("Certifications:");
          dom.appendChild(el7, el8);
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-4");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-10");
          var el6 = dom.createTextNode("\n");
          dom.appendChild(el5, el6);
          var el6 = dom.createComment("");
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "class", "btn btn-block btn-warning");
          dom.setAttribute(el6, "type", "button");
          var el7 = dom.createTextNode("Read Privacy and informed consent policy");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("p");
          dom.setAttribute(el6, "class", "pull-right reg-label");
          var el7 = dom.createTextNode("\n							");
          dom.appendChild(el6, el7);
          var el7 = dom.createComment("");
          dom.appendChild(el6, el7);
          var el7 = dom.createTextNode(" I have read and agree to the privacy policy.\n						");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n\n				");
          dom.appendChild(el3, el4);
          var el4 = dom.createElement("div");
          dom.setAttribute(el4, "class", "row");
          var el5 = dom.createTextNode("\n					");
          dom.appendChild(el4, el5);
          var el5 = dom.createElement("div");
          dom.setAttribute(el5, "class", "col-sm-3 offset3");
          var el6 = dom.createTextNode("\n						");
          dom.appendChild(el5, el6);
          var el6 = dom.createElement("button");
          dom.setAttribute(el6, "type", "button");
          dom.setAttribute(el6, "class", "btn btn-block btn-default");
          var el7 = dom.createTextNode("Sign Up as Trainer");
          dom.appendChild(el6, el7);
          dom.appendChild(el5, el6);
          var el6 = dom.createTextNode("\n					");
          dom.appendChild(el5, el6);
          dom.appendChild(el4, el5);
          var el5 = dom.createTextNode("\n				");
          dom.appendChild(el4, el5);
          dom.appendChild(el3, el4);
          var el4 = dom.createTextNode("\n\n			");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n		");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n	");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createComment("/.row");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1, 1, 1]);
          var element1 = dom.childAt(element0, [3]);
          var element2 = dom.childAt(element1, [3]);
          var element3 = dom.childAt(element0, [5]);
          var element4 = dom.childAt(element3, [3]);
          var element5 = dom.childAt(element0, [7]);
          var element6 = dom.childAt(element0, [9]);
          var element7 = dom.childAt(element6, [3]);
          var element8 = dom.childAt(element0, [13]);
          var element9 = dom.childAt(element8, [3]);
          var element10 = dom.childAt(element0, [15]);
          var element11 = dom.childAt(element10, [3]);
          var element12 = dom.childAt(element0, [19]);
          var element13 = dom.childAt(element12, [3]);
          var element14 = dom.childAt(element0, [25, 1]);
          var element15 = dom.childAt(element14, [3]);
          var element16 = dom.childAt(element0, [27, 1, 1]);
          var morphs = new Array(29);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 1, 1);
          morphs[1] = dom.createElementMorph(element2);
          morphs[2] = dom.createMorphAt(element2, 1, 1);
          morphs[3] = dom.createMorphAt(element1, 5, 5);
          morphs[4] = dom.createElementMorph(element4);
          morphs[5] = dom.createMorphAt(element4, 1, 1);
          morphs[6] = dom.createMorphAt(element3, 5, 5);
          morphs[7] = dom.createMorphAt(dom.childAt(element5, [3]), 1, 1);
          morphs[8] = dom.createMorphAt(element5, 5, 5);
          morphs[9] = dom.createAttrMorph(element7, 'class');
          morphs[10] = dom.createMorphAt(element7, 1, 1);
          morphs[11] = dom.createMorphAt(element6, 5, 5);
          morphs[12] = dom.createMorphAt(dom.childAt(element0, [11, 3]), 1, 1);
          morphs[13] = dom.createAttrMorph(element9, 'class');
          morphs[14] = dom.createMorphAt(element9, 1, 1);
          morphs[15] = dom.createMorphAt(element8, 5, 5);
          morphs[16] = dom.createElementMorph(element11);
          morphs[17] = dom.createMorphAt(element11, 1, 1);
          morphs[18] = dom.createMorphAt(element10, 5, 5);
          morphs[19] = dom.createMorphAt(dom.childAt(element0, [17, 3]), 1, 1);
          morphs[20] = dom.createElementMorph(element13);
          morphs[21] = dom.createMorphAt(element13, 1, 1);
          morphs[22] = dom.createMorphAt(element12, 5, 5);
          morphs[23] = dom.createMorphAt(dom.childAt(element0, [21, 3]), 1, 1);
          morphs[24] = dom.createMorphAt(dom.childAt(element0, [23, 3]), 1, 1);
          morphs[25] = dom.createMorphAt(element14, 1, 1);
          morphs[26] = dom.createElementMorph(element15);
          morphs[27] = dom.createMorphAt(dom.childAt(element14, [5]), 1, 1);
          morphs[28] = dom.createElementMorph(element16);
          return morphs;
        },
        statements: [["block", "if", [["get", "validationErrorMsg", ["loc", [null, [9, 11], [9, 29]]], 0, 0, 0, 0]], [], 0, null, ["loc", [null, [9, 5], [18, 12]]]], ["element", "firstnameclasses", [], [], ["loc", [null, [23, 27], [23, 47]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.firstname", ["loc", [null, [24, 32], [24, 62]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "firstname"], ["loc", [null, [24, 6], [24, 143]]], 0, 0], ["block", "if", [["get", "firstnameerror", ["loc", [null, [26, 11], [26, 25]]], 0, 0, 0, 0]], [], 1, null, ["loc", [null, [26, 5], [30, 12]]]], ["element", "lastnameclasses", [], [], ["loc", [null, [34, 27], [34, 46]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.lastname", ["loc", [null, [35, 32], [35, 61]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "lastname"], ["loc", [null, [35, 6], [35, 141]]], 0, 0], ["block", "if", [["get", "lastnameerror", ["loc", [null, [37, 11], [37, 24]]], 0, 0, 0, 0]], [], 2, null, ["loc", [null, [37, 5], [41, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.username", ["loc", [null, [46, 32], [46, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "Username"], ["loc", [null, [46, 6], [46, 133]]], 0, 0], ["block", "if", [["get", "usernameerror", ["loc", [null, [48, 11], [48, 24]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [48, 5], [52, 12]]]], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "passwordclasses", ["loc", [null, [56, 28], [56, 43]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.password", ["loc", [null, [57, 32], [57, 53]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "Password", "type", "password"], ["loc", [null, [57, 6], [57, 149]]], 0, 0], ["block", "if", [["get", "passworderror", ["loc", [null, [59, 11], [59, 24]]], 0, 0, 0, 0]], [], 4, null, ["loc", [null, [59, 5], [63, 12]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "confirmpassword", ["loc", [null, [68, 32], [68, 47]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "Confirm Password", "type", "password"], ["loc", [null, [68, 6], [68, 151]]], 0, 0], ["attribute", "class", ["concat", ["col-sm-4 ", ["get", "emailclasses", ["loc", [null, [73, 28], [73, 40]]], 0, 0, 0, 0]], 0, 0, 0, 0, 0], 0, 0, 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.user.email", ["loc", [null, [74, 32], [74, 50]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "Email"], ["loc", [null, [74, 6], [74, 127]]], 0, 0], ["block", "if", [["get", "emailerror", ["loc", [null, [76, 11], [76, 21]]], 0, 0, 0, 0]], [], 5, null, ["loc", [null, [76, 5], [80, 12]]]], ["element", "ageclasses", [], [], ["loc", [null, [84, 27], [84, 41]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.age", ["loc", [null, [85, 32], [85, 56]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "age"], ["loc", [null, [85, 6], [85, 131]]], 0, 0], ["block", "if", [["get", "ageerror", ["loc", [null, [87, 11], [87, 19]]], 0, 0, 0, 0]], [], 6, null, ["loc", [null, [87, 5], [91, 12]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.gender", ["loc", [null, [97, 61], [97, 88]]], 0, 0, 0, 0]], [], [], 0, 0]], 7, null, ["loc", [null, [97, 6], [103, 19]]]], ["element", "cityclasses", [], [], ["loc", [null, [111, 27], [111, 42]]], 0, 0], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.basicprofile.city", ["loc", [null, [112, 32], [112, 57]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "city"], ["loc", [null, [112, 6], [112, 133]]], 0, 0], ["block", "if", [["get", "cityerror", ["loc", [null, [114, 11], [114, 20]]], 0, 0, 0, 0]], [], 8, null, ["loc", [null, [114, 5], [118, 12]]]], ["block", "x-select", [], ["class", "form-control reg-input-field", "value", ["subexpr", "@mut", [["get", "content.basicprofile.state", ["loc", [null, [123, 60], [123, 86]]], 0, 0, 0, 0]], [], [], 0, 0]], 9, null, ["loc", [null, [123, 6], [129, 19]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "content.trainerprofile.certification", ["loc", [null, [135, 32], [135, 68]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "form-control reg-input-field", "enter", "tregister", "placeholder", "certification"], ["loc", [null, [135, 6], [135, 153]]], 0, 0], ["block", "bs-modal", [], ["open", ["subexpr", "@mut", [["get", "showPolicy", ["loc", [null, [140, 23], [140, 33]]], 0, 0, 0, 0]], [], [], 0, 0], "title", "Privacy Policy", "footer", false], 10, null, ["loc", [null, [140, 6], [142, 19]]]], ["element", "action", ["showPolicy"], [], ["loc", [null, [143, 62], [143, 85]]], 0, 0], ["inline", "input", [], ["type", "checkbox", "name", "doesAgree", "checked", ["subexpr", "@mut", [["get", "agree", ["loc", [null, [145, 56], [145, 61]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [145, 7], [145, 63]]], 0, 0], ["element", "action", ["tregister"], [], ["loc", [null, [153, 62], [153, 84]]], 0, 0]],
        locals: [],
        templates: [child0, child1, child2, child3, child4, child5, child6, child7, child8, child9, child10]
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 160,
            "column": 7
          }
        },
        "moduleName": "simple-fit/templates/tregister.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [["block", "if", [["get", "success", ["loc", [null, [1, 6], [1, 13]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [1, 0], [160, 7]]]]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});
define("simple-fit/templates/user", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/user.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("User Profile");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [3, 0], [3, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("simple-fit/templates/vchat", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.8.2+31ba4c74",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 0
          }
        },
        "moduleName": "simple-fit/templates/vchat.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("iframe");
        dom.setAttribute(el2, "id", "iframechat");
        dom.setAttribute(el2, "src", "https://appear.in/secwebdev");
        dom.setAttribute(el2, "style", "border: 0");
        dom.setAttribute(el2, "height", "600");
        dom.setAttribute(el2, "width", "100%");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" UPDATE APPEAR TO BE DYNAMIC WITH TRIANER USER NAME OR SPECIAL ID");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 4, 4, contextualElement);
        return morphs;
      },
      statements: [["content", "outlet", ["loc", [null, [5, 0], [5, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('simple-fit/config/environment', ['ember'], function(Ember) {
  var prefix = 'simple-fit';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("simple-fit/app")["default"].create({"name":"simple-fit","version":"0.0.0+8375100a"});
}

/* jshint ignore:end */
//# sourceMappingURL=simple-fit.map
