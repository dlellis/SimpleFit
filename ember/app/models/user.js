import DS from 'ember-data';

export default DS.Model.extend({
	// profile: BS.belongsTo('profile')
	username: DS.attr('string'),
	// email: DS.attr('string'),
	password: DS.attr('string')

});
