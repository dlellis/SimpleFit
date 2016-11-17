import Ember from 'ember';
import DS from 'ember-data';

export default Ember.Service.extend({
  isauthenticated: DS.attr('boolean'),
  userid: DS.attr('number'),
  username: DS.attr('string'),
  membertype: DS.attr('string'),
});
