// Import Base Class
import { BaseError } from './BaseError.js';

class ConflictError extends BaseError {
    constructor(message, statusCode, location){
        super(message, statusCode);
        this.location = location;
    }
}

export { ConflictError };