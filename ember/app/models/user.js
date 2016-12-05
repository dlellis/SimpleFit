import DS from 'ember-data';

export default DS.Model.extend({
	basicprofile: DS.belongsTo('basicprofile', {async: true}),
	username: DS.attr('string'),
	email: DS.attr('string'),
	password: DS.attr('string')

});
