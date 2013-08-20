import BatchType from 'appkit/models/batch_type';

var BatchTypesRoute = Ember.Route.extend({
  model: function() {
    return BatchType.find();
  }
});

export default BatchTypesRoute;

