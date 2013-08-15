import ActionType from 'appkit/models/action_type';

module("Model - ActionType");

test('property: `actions`', function(){
  expect(3);

  var property = ActionType.metaForProperty('actions');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.Action');
  equal(property.kind, 'hasMany');
});

test('property: `name`', function(){
  expect(2);

  var property = ActionType.metaForProperty('name');

  equal(property.type, 'string', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});

