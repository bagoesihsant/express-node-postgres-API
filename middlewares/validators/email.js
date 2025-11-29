// Import Modules

// Import Errors
import * as Errors from '../../Errors/index.js';

/**
 * Middleware that function to check email by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateEmail(req, res, next){

    const body = req.body;

    // Check if email is empty or not
    if (!body.email) throw new Errors.BadRequestError('Email is required.', 400, 'Middleware');

    // Check if email is valid email format or not
    if (!/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(body.email)) throw new Errors.BadRequestError('Invalid Email format.', 400, 'Middleware');

    // If all check is passed
    next();

}

export { validateEmail };