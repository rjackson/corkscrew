import ActionType from 'appkit/models/action_type';

var ActionTypesRoute = Ember.Route.extend({
  model: function() {
    return ActionType.find();
  }
});

export default ActionTypesRoute;
