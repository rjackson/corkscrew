import Customer from 'appkit/models/customer';

var CustomersRoute = Ember.Route.extend({
  model: function() {
    return Customer.find();
  }
});

export default CustomersRoute;

