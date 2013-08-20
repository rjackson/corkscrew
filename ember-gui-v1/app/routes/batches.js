import Batch from 'appkit/models/batch';

var BatchesRoute = Ember.Route.extend({
  model: function() {
    return Batch.find();
  }
});

export default BatchesRoute;

