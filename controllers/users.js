// Import Modules

// Import Models
import * as usersModel from '../models/users.js';

/**
 * Get all users from database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getUsers(req, res, next){
    try {
        const users = await usersModel.getAllUsers();

        if (users.rowCount < 1) {
            res.status(200).json({
                status: 200,
                message: 'No data found.',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully fetching data.',
            data: users.rows,
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

/**
 * Get user from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getUser(req, res, next){
    try {
        const { id } = req.params;

        const user = await usersModel.getUserById(id);

        if (user.rowCount < 1){
            res.status(200).json({
                status: 200,
                message: 'No data found.',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully fetching data.',
            data: user.rows,
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
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
