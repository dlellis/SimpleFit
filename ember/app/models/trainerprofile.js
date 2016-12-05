import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user',),
	basicinfo: DS.belongsTo('basicprofile',),
	certification: DS.attr('string'),
	trainer: DS.hasMany('clientprofile', {async: true, inverse: 'trainer'}),
	trainerpending: DS.hasMany('clientprofile', {async: true, inverse: 'trainerpending'})
});
