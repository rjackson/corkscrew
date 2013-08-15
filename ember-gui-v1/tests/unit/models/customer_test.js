import Customer from 'appkit/models/customer';

module("Model - Customer");

test('property: `batches`', function(){
  expect(3);

  var property = Customer.metaForProperty('batches');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.Batch');
  equal(property.kind, 'hasMany');
});


