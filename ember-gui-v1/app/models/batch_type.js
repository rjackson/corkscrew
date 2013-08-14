var BatchType = DS.Model.extend({
  name: DS.attr('string'),
  created_at: DS.attr('date'),
  updated_at: DS.attr('date'),

  actions: DS.hasMany('App.Action')
});

export default BatchType;

