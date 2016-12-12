import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	exercise: DS.hasMany('exercise', {async: true}),

});
