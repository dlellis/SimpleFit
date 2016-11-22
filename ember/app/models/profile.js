import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user'),
	roles: DS.attr('role', {defaultValue: {admin: false, researcher: false, subject: false}}),
	age: DS.attr('number'),
	gender: DS.attr('string'),
	educationlevel: DS.attr('string'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	ip: DS.attr('string'),
	rolesPrint: function(){
		var roles = this.get('roles');
		var roleString = '';
		roleString += roles.admin ? 'Admin':'';
		roleString += roles.researcher ? (roleString==='' ? 'Researcher':', Researcher'):'';
		roleString += roles.subject ? (roleString==='' ? 'Subject':', Subject'):'';
		return roleString;
	}.property('roles'),
	selectorId: function(){
		return "#"+this.get('id');
	}.property('id'),
	accordianId: function(){
		return "accordion"+this.get('id');
	}.property('id'),
	accordianSelectorId: function(){
		return "accordion"+this.get('id');
	}.property('id'),
});