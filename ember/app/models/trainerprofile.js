import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user',),
	basicinfo: DS.belongsTo('basicprofile',),
	certification: DS.attr('string'),
	clientprofile: DS.hasMany('clientprofile',)
});
