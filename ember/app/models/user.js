import DS from 'ember-data';

export default DS.Model.extend({
	clientprofile: DS.belongsTo('clientprofile'),
	username: DS.attr('string'),
	email: DS.attr('string'),
	password: DS.attr('string')

});
