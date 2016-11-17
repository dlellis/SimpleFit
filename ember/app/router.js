import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.routerRootURL
});

Router.map(function() {
  this.route('login');
  this.route('trainer');
  this.route('dietitian');
  this.route('market');
  this.route('recipes');
  this.route('recipe', {path: 'recipes/:recipe_name'});
  this.route('vchat');
  this.route('dclient');
  this.route('user', {path: 'users/:user_url'});
});

export default Router;
