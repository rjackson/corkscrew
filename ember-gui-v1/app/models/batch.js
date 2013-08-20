var Batch = DS.Model.extend({
  batchTypeId: DS.attr('number'),
  customerId: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  actions: DS.hasMany('App.Action'),
  batchType: DS.belongsTo('App.BatchType'),
  customer: DS.belongsTo('App.Customer')
});

export default Batch;

