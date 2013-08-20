import App from 'appkit/app';
import BatchType from 'appkit/models/batch_type';

var route;

module("Unit - BatchTypesRoute", {
  setup: function(){
    route = routeFor('batch_types');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});

test("#model", function(){
  ok(route.model());
  equal(route.model().length, BatchType.find().length);
});

