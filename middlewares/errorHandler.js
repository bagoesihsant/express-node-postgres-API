// Import Modules

/**
 * Middleware that function to handle all error throw by express routes
 * @param {*} err 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function errorHandler(err, req, res, next){
    // TODO : Implement further error handler
    
    res.status(err.statusCode).json({
        status: err.statusCode,
        message: err.message,
    });
}

export { errorHandler };