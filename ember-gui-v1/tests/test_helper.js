document.write('<div id="ember-testing-container"><div id="ember-testing"></div></div>');

Ember.testing = true;

var App = requireModule('appkit/app');

App.rootElement = '#ember-testing';

function exists(selector) {
  return !!find(selector).length;
}

function equal(actual, expected, message) {
    message = message || QUnit.jsDump.parse(expected) + " expected but was " + QUnit.jsDump.parse(actual);
    QUnit.equal.call(this, expected, actual, message);
}

window.exists = exists;
window.equal = equal;

Ember.Container.prototype.stub = function(fullName, instance) {
  instance.destroy = instance.destroy || function() {};
  this.cache.dict[fullName] = instance;
};

Ember.Test.registerHelper('routeFor', function(app, routeName) {
  return app.__container__.lookup('route:' + routeName);
});

Ember.Test.registerHelper('controllerFor', function(app, controllerName) {
  return app.__container__.lookup('controller:' + controllerName);
});

Ember.Test.registerHelper('hasValidRoute', function(app, routeName, model){
  test("it exists", function(){
    var route = routeFor(routeName);

    ok(route);
    ok(route instanceof Ember.Route);
  });

  test("#model", function(){
    var route = routeFor(routeName);

    ok(route.model());
    equal(route.model().length, model.find().length);
  });
});

Ember.Test.registerHelper('hasAssociation', function(app, containerObject, associationName, associationType) {
  test('property: `'+associationName+'`', function(){
    expect(2);

    var property = containerObject.metaForProperty(associationName);

    equal(property.isRelationship, true,'Expected relationship');
    equal(property.kind, associationType);
  });
});

App.setupForTesting();
App.injectTestHelpers();
