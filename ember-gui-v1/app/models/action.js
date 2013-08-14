var Action = DS.Model.extend({
  batchTypeId: DS.attr('number'),
  actionTypeId: DS.attr('number'),
  triggerAge: DS.attr('number'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  batchType: DS.belongsTo('App.BatchType')
});

export default Action;

