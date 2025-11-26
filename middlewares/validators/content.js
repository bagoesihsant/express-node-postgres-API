// Import Modules

/**
 * Middleware that function to check content by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateContent(req, res, next){

    const body = req.body;

    // Check if content is empty or not
    if (!body.content) throw new Error('Content is required.');

    // Check if content is empty string or not
    if (body.content.trim() === '') throw new Error('Content is required.');

    // If all check is passed
    next();

}

export { validateContent };