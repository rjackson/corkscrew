import BatchType from 'appkit/models/batch';

module("Model - BatchType");

hasAssociation(BatchType, 'actions', 'hasMany');
