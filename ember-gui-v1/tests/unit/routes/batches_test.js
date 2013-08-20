import App from 'appkit/app';
import Batch from 'appkit/models/batch';

var route;

module("Unit - BatchesRoute", {
  setup: function(){
    route = App.__container__.lookup('route:batches');
  }
});

test("it exists", function(){
  ok(route);
  ok(route instanceof Ember.Route);
});

test("#model", function(){
  ok(route.model());
  equal(route.model().length, Batch.find().length);
});

