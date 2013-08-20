import Batch from 'appkit/models/batch';

module("Model - Batch")

hasAssociation(Batch, 'actions', 'hasMany');
hasAssociation(Batch, 'batchType', 'belongsTo');
hasAssociation(Batch, 'customer', 'belongsTo');
