// Import Modules

/**
 * Get all users from database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getUsers(req, res, next){
    res.status(200).send('Hello World!! Users!');
}

/**
 * Get user from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getUser(req, res, next){
    const { id } = req.params;

    res.status(200).send(`Hello World!! ${id}! Users!`);
}

/**
 * Add new user into database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addUser(req, res, next){
    res.status(200).send('Hello World!! POST! Users!');
}

/**
 * Update user information in database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function updateUser(req, res, next){
    const { id } = req.params;
    
    res.status(200).send(`Hello World!! PUT! ${id}! Users!`);
}

/**
 * Delete user from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function deleteUser(req, res, next){
    const { id } = req.params;

    res.status(200).send(`Hello World!! DELETE! ${id}! Users!`);
}

export { getUsers, getUser, addUser, updateUser, deleteUser };
