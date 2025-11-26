// Import Modules

/**
 * Middleware that function to check id passed by user into request parameter
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function validateId(req, res, next){

    const params = req.params;

    // Check if id is empty or not
    if (!params.id) throw new Error('Id is required.');

    // Check if id is empty string or not
    if (params.id.trim() === '') throw new Error('Id is required.');

    // Check if id is number or not
    if (isNaN(params.id)) throw new Error('Id must be a number.');

    // Check if id is a whole number
    if (!/^\d+$/.test(params.id)) throw new Error('Id must be a whole number.');

    // Check if id is less than 0
    if (params.id < 0) throw new Error('Id must be a whole number.');

    // If all check is passed
    next();

}

export { validateId };