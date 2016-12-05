export function initialize(application) {
	application.inject('route', 'auth', 'service:session');
	application.inject('component', 'auth', 'service:session');
	application.inject('controller', 'auth', 'service:session');
	//application.inject('component', 'auth', 'service:session');
	//application.inject('model', 'auth', 'service:session');
	// application.inject('component', 'user', 'service:session');
}

export default {
  name: 'session',
  initialize: initialize
};
