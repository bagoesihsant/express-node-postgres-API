// Import Modules

/**
 * Middleware that function to check first and last name by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateName(req, res, next){

    const body = req.body;

    // Check if first name is empty or not
    if (!body.first_name) throw new Error('First Name is required.');

    // Check if last name is empty or not
    if (!body.last_name) throw new Error('Last Name is required');

    // Check if first name is empty string or not
    if (body.first_name.trim() === '') throw new Error('First Name is required.');
    
    // Check if last name is empty string or not
    if (body.last_name.trim() === '') throw new Error('Last Name is required.');

    // Check if first name contains only alphabet or not
    if (!/^[a-zA-Z]+$/.test(body.first_name)) throw new Error('First Name can only contain alphabet characters.');

    // Check if last name contains only alphabet or not
    if (!/^[a-zA-Z]+$/.test(body.last_name)) throw new Error('Last Name can only contain alphabet charactes.');

    // If all check is passed
    next();

}

export { validateName };