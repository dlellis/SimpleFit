import DS from 'ember-data';

export default DS.Model.extend({
	user: DS.belongsTo('user', {async: true}),
	basicinfo: DS.belongsTo('basicprofile', {async: true}),
	certification: DS.attr('string'),

});
