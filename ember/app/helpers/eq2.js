import Ember from 'ember';

export function eq2(params/*, hash*/) {
	var result = (params[0] == params[1]);
	



  return result;
}

export default Ember.Helper.helper(eq2);
