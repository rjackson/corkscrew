import Action from 'appkit/models/action';

var ActionsRoute = Ember.Route.extend({
  model: function() {
    return Action.find();
  }
});

export default ActionsRoute;


