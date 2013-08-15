import Batch from 'appkit/models/batch';

module("Model - Batch");

test('property: `actions`', function(){
  expect(3);

  var property = Batch.metaForProperty('actions');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.Action');
  equal(property.kind, 'hasMany');
});

test('property: `batchType`', function(){
  expect(3);

  var property = Batch.metaForProperty('batchType');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.BatchType');
  equal(property.kind, 'belongsTo');
});

test('property: `customer`', function(){
  expect(3);

  var property = Batch.metaForProperty('customer');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.Customer');
  equal(property.kind, 'belongsTo');
});
