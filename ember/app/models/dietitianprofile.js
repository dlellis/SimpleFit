import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user',),
	basicinfo: DS.belongsTo('basicprofile',),
	specialty: DS.attr('string'),
	dietitian: DS.hasMany('clientprofile', {async: true, inverse: 'dietitian'}),
	dietitianpending: DS.hasMany('clientprofile', {async: true, inverse: 'dietitianpending'})
});
