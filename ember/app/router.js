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
  this.route('market', function() {});
  this.route('recipes');
  this.route('recipe', {path: 'recipes/:recipe_name'});
  this.route('vchat');
  this.route('dclient');
  this.route('user', {path: 'users/:user_url'});
  this.route('register');
  this.route('newfeature');
  this.route('cregister');
  this.route('dregister');
  this.route('tregister');
  this.route('dmarket');
  this.route('createworkout', {path: 'createworkout/:basicprofile_id'});
  this.route('viewworkouts', {path: 'viewworkouts/:basicprofile_id'});
});

export default Router;
