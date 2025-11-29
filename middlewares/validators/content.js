// Import Modules

// Import Errors
import * as Errors from '../../Errors/index.js';

/**
 * Middleware that function to check content by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateContent(req, res, next){

    const body = req.body;

    // Check if content is empty or not
    if (!body.content) throw new Errors.BadRequestError('Content is required.', 400, 'Middleware');

    // Check if content is empty string or not
    if (body.content.trim() === '') throw new Errors.BadRequestError('Content is required.', 400, 'Middleware');

    // If all check is passed
    next();

}

export { validateContent };