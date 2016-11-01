import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('trainer', function() {
    this.route('clients');
  });
  this.route('dietitian');
  this.route('market');
  this.route('recipes');
  this.route('recipe', {path: 'recipes/:recipe_name'});
  this.route('vchat');
});

export default Router;
