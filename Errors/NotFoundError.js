// Import Base Class
import { BaseError } from './BaseError.js';

class NotFoundError extends BaseError {
    constructor(message, statusCode, location){
        super(message, statusCode);
        this.location = location;
    }
}

export { NotFoundError };