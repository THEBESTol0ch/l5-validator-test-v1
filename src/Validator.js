import numberSchema from './NumberSchema.js';
import arraySchema from './ArraySchema.js';
import objectSchema from './ObjectSchema.js';

export default class Validator {
    number = numberSchema;
    array = arraySchema;
    object() {
        return objectSchema();
    }
}