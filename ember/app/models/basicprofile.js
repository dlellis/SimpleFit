import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user',),
	trainerprofile: DS.belongsTo('trainerprofile',{async: true}),
	dietitianprofile: DS.belongsTo('dietitianprofile', {async: true}),
	clientprofile: DS.belongsTo('clientprofile',{async: true}),
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	gender: DS.attr('string'),
	age: DS.attr('number'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	ip: DS.attr('string'),
	membertype: DS.attr('string'),
	

});
