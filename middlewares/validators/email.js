// Import Modules

/**
 * Middleware that function to check email by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateEmail(req, res, next){

    const body = req.body;

    // Check if email is empty or not
    if (!body.email) throw new Error('Email is required.');

    // Check if email is valid email format or not
    if (!/^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(body.email)) throw new Error('Invalid Email format.');

    // If all check is passed
    next();

}

export { validateEmail };