import App from 'appkit/app';
import BatchType from 'appkit/models/batch_type';

module("Unit - BatchTypesRoute");

hasValidRoute('batch_types', BatchType);
