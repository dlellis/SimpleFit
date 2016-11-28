import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user'),
	basicprofile: DS.belongsTo('basicprofile'),
	certification: DS.attr('string'),

});
