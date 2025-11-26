// Import Modules

/**
 * Middleware that function to check user id passed by user into request parameter
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateUserId(req, res, next){

    const body = req.body;

    // Check if user id is empty or not
    if (!body.user_id) throw new Error('User Id is required.');

    // Check if user id is empty string or not
    if (body.user_id.trim() === '') throw new Error('User Id is required.');

    // Check if user id is number or not
    if (isNaN(body.user_id)) throw new Error('User Id must be a number.');

    // Check if user id is a whole number
    if (!/^\d+$/.test(body.user_id)) throw new Error('User Id must be a whole number.');

    // Check if user id is less than 0
    if (body.user_id < 0) throw new Error('User Id must be a whole number.');

    // If all check is passed
    next();

}

export { validateUserId };