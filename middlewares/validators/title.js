// Import Modules

/**
 * Middleware that function to check title by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateTitle(req, res, next){

    const body = req.body;

    // Check if title is empty or not
    if (!body.title) throw new Error('Title is required.');

    // Check if title is empty string or not
    if (body.title.trim() === '') throw new Error('Title is required.');

    // If all check is passed
    next();

}

export { validateTitle };