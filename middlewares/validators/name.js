// Import Modules

/**
 * Middleware that function to check first and last name by user into request body
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateName(req, res, next){

    const body = req.body;

    const errors = [];

    // Check if first name is empty or not
    if (!body.first_name) errors.push('First Name is required.');

    // Check if last name is empty or not
    if (!body.last_name) errors.push('Last Name is required');

    // Check if first name is empty string or not
    if (body.first_name.trim() === '') errors.push('First Name is required.');
    
    // Check if last name is empty string or not
    if (body.last_name.trim() === '') errors.push('Last Name is required.');

    // Check if first name contains only alphabet or not
    if (!/^[a-zA-Z]+$/.test(body.first_name)) errors.push('First Name can only contain alphabet characters.');

    // Check if last name contains only alphabet or not
    if (!/^[a-zA-Z]+$/.test(body.last_name)) errors.push('Last Name can only contain alphabet charactes.');

    // If there's error
    if (errors.length > 0) {
        throw new Error(errors.join(' \\ '));
    }

    // If all check is passed
    next();

}

export { validateName };