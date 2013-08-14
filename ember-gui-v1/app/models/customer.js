var Customer = DS.Model.extend({

  first_name: DS.attr('string'),

  last_name: DS.attr('string'),

  email: DS.attr('string'),

  phone: DS.attr('string'),

  address_line_1: DS.attr('string'),

  address_line_2: DS.attr('string'),

  city: DS.attr('string'),

  state: DS.attr('string'),

  zip: DS.attr('number'),

  created_at: DS.attr('date'),

  updated_at: DS.attr('date')

});

export default Customer;

