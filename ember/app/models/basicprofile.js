import DS from 'ember-data';

export default DS.Model.extend({
	clientprofile: DS.belongsTo('clientprofile'),
	firstname: DS.attr('string'),
	lastname: DS.attr('string'),
	gender: DS.attr('string'),
	age: DS.attr('number'),
	city: DS.attr('string'),
	state: DS.attr('string'),
	ip: DS.attr('string'),
	

});
