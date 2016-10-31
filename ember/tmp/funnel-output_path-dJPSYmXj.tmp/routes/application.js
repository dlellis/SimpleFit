import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    this.get('store').push({
      data: [{
        id: 1,
        type: 'clients',
        attributes: {
        firstName: "tom",
        lastName: "tomingson",
        services: "trainer, dietitian",
      },
      relationships: {}
    },
      {
        id: 2,
        type: 'clients',
        attributes: {
        firstName: "mary",
        lastName: "jane",
        services: "dietitian",
      },
      relationships: {}
    },
      {
        id: 3,
        type: 'clients',
        attributes: {
        firstName: "jane",
        lastName: "doe",
        services: "trainer",
      },
      relationships: {}
    },
      {
        id: 4,
        type: 'clients',
        attributes: {
        firstName: "jon",
        lastName: "doe",
        services: "trainer, dietitian",
      },
      relationships: {}
      }]
    });
  }
});
