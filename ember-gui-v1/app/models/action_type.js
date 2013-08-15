var ActionType = DS.Model.extend({
  name: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),

  actions: DS.hasMany('App.Action')
});

export default ActionType;

