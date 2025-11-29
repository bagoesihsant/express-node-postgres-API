class BadRequestError extends BaseError {
    constructor(message, statusCode, location){
        super(message, statusCode);
        this.location = location;
    }
}