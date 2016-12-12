import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	workout: DS.belongsTo('clientworkout', {async: true}),

});
