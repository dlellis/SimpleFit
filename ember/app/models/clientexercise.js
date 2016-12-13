import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	suggestreps: DS.attr('number'),
	suggestsets: DS.attr('number'),
	actualreps: DS.attr('number'),
	actualsets: DS.attr('number'),
	workout: DS.belongsTo('clientworkout', {async: true}),

});
