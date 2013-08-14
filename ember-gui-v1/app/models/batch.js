var Batch = DS.Model.extend({

  batch_type_id: DS.attr('number'),

  customer_id: DS.attr('number'),

  created_at: DS.attr('date'),

  updated_at: DS.attr('date')

});

export default Batch;

