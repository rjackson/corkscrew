import BatchType from 'appkit/models/batch';

module("Model - BatchType");

test('property: `actions`', function(){
  expect(3);

  var property = BatchType.metaForProperty('actions');

  equal(property.isRelationship, true,'Expected relationship');
  equal(property.type, 'App.Action');
  equal(property.kind, 'hasMany');
});


