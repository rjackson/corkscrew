import Action from 'appkit/models/action';

module("Model - Action");

test('property: `batchType`', function(){
  expect(3);

  var property = Action.metaForProperty('batchType');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.BatchType');
  equal(property.kind, 'belongsTo');
});

test('property: `actionType`', function(){
  expect(3);

  var property = Action.metaForProperty('actionType');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.ActionType');
  equal(property.kind, 'belongsTo');
});

test('property: `triggerAge`', function(){
  expect(2);

  var property = Action.metaForProperty('triggerAge');

  equal(property.type, 'number', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});

test('property: `createdAt`', function(){
  expect(2);

  var property = Action.metaForProperty('createdAt');

  equal(property.type, 'date', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});

test('property: `updatedAt`', function(){
  expect(2);

  var property = Action.metaForProperty('updatedAt');

  equal(property.type, 'date', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});
