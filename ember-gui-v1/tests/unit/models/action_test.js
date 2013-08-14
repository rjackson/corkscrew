import Action from 'appkit/models/action';

module("Model - Action");

test('property: `triggerAge`', function(){
  var property = Action.metaForProperty('triggerAge');

  expect(2);
  equal(property.type, 'number', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});

test('property: `createdAt`', function(){
  var property = Action.metaForProperty('createdAt');

  expect(2);
  equal(property.type, 'date', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});

test('property: `updatedAt`', function(){
  var property = Action.metaForProperty('updatedAt');

  expect(2);
  equal(property.type, 'date', 'attribute type');
  ok(property.isAttribute, 'expected attribute');
});
