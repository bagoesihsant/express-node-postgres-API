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
async function addUser(req, res, next){
    try {

        const { first_name, last_name, email } = req.body;

        const result = await usersModel.addUser(first_name, last_name, email);

        if (result.rowCount < 1){
            res.status(200).json({
                status: 200,
                message: 'No data inserted',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully inserting data.',
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

/**
 * Update user information in database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function updateUser(req, res, next){
    try {
        const { id } = req.params;

        const { first_name, last_name, email } = req.body;

        const result = await usersModel.updateUser(id, first_name, last_name, email);

        if (result.rowCount < 1){
            res.status(200).json({
                status: 200,
                message: 'No data updated',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully updating data.',
        });
    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

/**
 * Delete user from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function deleteUser(req, res, next){
    try {
        const { id } = req.params;

        const result = await usersModel.deleteUser(id);

        if (result.rowCount < 1){
            res.status(200).json({
                status: 200,
                message: 'No data deleted',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully deleting data.',
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

export { getUsers, getUser, addUser, updateUser, deleteUser };
