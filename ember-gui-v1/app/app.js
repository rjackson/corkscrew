import Resolver from 'resolver';

var App = Ember.Application.create({
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_MODULE_RESOLVER: true,
  modulePrefix: 'appkit', // TODO: loaded via config
  resolver: Resolver
});

import routes from 'appkit/routes';
App.Router.map(routes); // TODO: just resolve the router

import store from 'appkit/fixture_store';
App.Store = store;

export default App;
