import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', {async: true}),
	basicinfo: DS.belongsTo('basicprofile', {async: true}),
	//certification: DS.attr('string'),
	//service: DS.attr('string'),
	trainer: DS.belongsTo('trainerprofile', {async: true, inverse: 'trainer'}),
	trainerpending: DS.belongsTo('trainerprofile', {async: true, inverse: 'trainerpending'})
});
