import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', {async: true}),
	basicinfo: DS.belongsTo('basicprofile', {async: true}),
	trainer: DS.belongsTo('trainerprofile', {async: true, inverse: 'trainer'}),
	trainerpending: DS.belongsTo('trainerprofile', {async: true, inverse: 'trainerpending'}),
	dietitian: DS.belongsTo('dietitianprofile', {async: true, inverse: 'dietitian'}),
	dietitianpending: DS.belongsTo('dietitianprofile', {async: true, inverse: 'dietitianpending'}),
});
