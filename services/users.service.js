// Import Modules

// Import Models
import * as usersModel from '../models/users.model.js';

// Import Errors
import * as Errors from '../Errors/index.js';

async function getAllUsers(){

    try {

        // 1. Get All Users from Database using Model
        const users = await usersModel.getAllUsers();

        // 2. Check if there's at least one user or not
        if (users.rowCount < 1) {
            return { statusCode: 404, message: 'No Users found.', output: [] };
        }

        // 3. If there's a tleast one user or more
        return { statusCode: 200, message: 'Users found', output: users.rows };

    } catch (error) {
        console.error('Service Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Server Error',
                500,
                'Service'
            );
        }
    }

}

async function getUserById(id){

    try {

        // 1. Get User from Database using id with model
        const user = await usersModel.getUserById(id);

        // 2. Check if there's a user or not
        if (user.rowCount < 1) {
            return { statusCode: 404, message: 'User not found.', output: [] };
        }

        // 3. If there's a user
        return { statusCode: 200, message: 'User found.', output: user.rows };

    } catch (error) {
        console.error('Service Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Server Error',
                500,
                'Service'
            );
        }
    }

}

async function createUser(first_name, last_name, email) {

    try {

        // 1. Check user email
        const userEmail = await usersModel.checkEmail(email);

        // 2. If email is found
        if (userEmail.rowCount > 0) {
            return { statusCode: 409, message: 'Email already taken.', output: [] };
        }

        // 3. If email is not found, insert data
        const insertResult = await usersModel.addUser(first_name, last_name, email);

        // 4. Check if User data is inserted
        if (insertResult.rowCount < 1) {
            return { statusCode: 500, message: 'Failed to create user.', output: [] };
        }

        // 5. If user data is inserted
        return { statusCode: 201, message: 'User Created', output: {first_name, last_name, email} };

    } catch (error) {
        console.error('Service Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Server Error',
                500,
                'Service'
            );
        }
    }

}

async function updateUser(id, first_name, last_name, email) {

    try {

        // 1. Fetch User Data
        const findResult = await usersModel.getUserById(id);

        // 2. Check if user exists
        if (findResult.rowCount < 1) {
            return { statusCode: 404, message: 'User not found.', output: [] };
        }

        // 3. Fetch Input Email
        const userEmail = await usersModel.checkEmail(email);

        // 4. If email is found
        if (userEmail.rowCount > 0) {
            if (userEmail.rows[0].email !== email) {
                return { statusCode: 409, message: 'Email already taken.', output: [] };
            }
        }

        // 5. If email is not taken, update user data
        const updateResult = await usersModel.updateUser(id, first_name, last_name, email);

        // 6. Check if user update success
        if (updateResult.rowCount < 1) {
            return { statusCode: 500, message: 'Failed to update user.', output: [] };
        }

        // 7. If user data is updated
        return { statusCode: 200, message: 'User updated.', output: {first_name, last_name, email} };

    } catch (error) {
        console.error('Service Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Server Error',
                500,
                'Service'
            );
        }
    }

}

async function deleteUser(id){

    try {

        // 1. Fetch User Data
        const findResult = await usersModel.getUserById(id);

        // 2. Check if user exists
        if (findResult.rowCount < 1) {
            return { statusCode: 404, message: 'User not found.', output: [] };
        }

        // 3. If user exists, delete it
        const deleteResult = await usersModel.deleteUser(id);

        // 4. Check if user delete success
        if (deleteResult.rowCount < 1) {
            return { statusCode: 500, message: 'Failed to delete user.', output: [] };
        }

        // 5. If user data is deleted
        return { statusCode: 200, message: 'User deleted', output: findResult.rows };

    } catch (error) {
        console.error('Service Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Server Error',
                500,
                'Service'
            );
        }
    }

}

export { getAllUsers, getUserById, createUser, updateUser, deleteUser };