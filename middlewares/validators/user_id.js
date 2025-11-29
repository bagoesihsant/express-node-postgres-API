// Import Modules

// Import Errors
import * as Errors from '../../Errors/index.js';

/**
 * Middleware that function to check user id passed by user into request parameter
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateUserId(req, res, next){

    const body = req.body;

    // Check if user id is empty or not
    if (!body.user_id) throw new Errors.BadRequestError('User Id is required.', 400, 'Middleware');

    // Check if user id is empty string or not
    if (body.user_id.trim() === '') throw new Errors.BadRequestError('User Id is required.', 400, 'Middleware');

    // Check if user id is number or not
    if (isNaN(body.user_id)) throw new Errors.BadRequestError('User Id must be a number.', 400, 'Middleware');

    // Check if user id is a whole number
    if (!/^\d+$/.test(body.user_id)) throw new Errors.BadRequestError('User Id must be a whole number.', 400, 'Middleware');

    // Check if user id is less than 0
    if (body.user_id < 0) throw new Errors.BadRequestError('User Id must be a whole number.', 400, 'Middleware');

    // If all check is passed
    next();

}

export { validateUserId };