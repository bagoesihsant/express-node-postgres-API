// Import Modules

// Import errors
import * as Errors from '../../Errors/index.js';

/**
 * Middleware that function to check title by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateTitle(req, res, next){

    const body = req.body;

    // Check if title is empty or not
    if (!body.title) throw new Errors.BadRequestError('Title is required.', 400, 'Middleware');

    // Check if title is empty string or not
    if (body.title.trim() === '') throw new Errors.BadRequestError('Title is required.', 400, 'Middleware');

    // If all check is passed
    next();

}

export { validateTitle };