var Action = DS.Model.extend({
  batch_type_id: DS.attr('number'),
  action_type_id: DS.attr('number'),
  trigger_age: DS.attr('number'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  batchType: DS.belongsTo('App.BatchType')
});

export default Action;

