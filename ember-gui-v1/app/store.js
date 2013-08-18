var store = DS.Store.extend({
  revision: 13,
  adapter: DS.FixtureAdapter.create()
});

export default store;
