// Import Modules

// Import Models
import * as usersModel from '../models/users.js';

// Import Services
import * as usersService from '../services/users.service.js';

/**
 * Get all users from database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getUsers(req, res, next){
    try {
        
        // 1. Call Service Layer
        const output = await usersService.getAllUsers();

        // 2. Check Service Layer Output
        if (output.statusCode === 403) {
            res.status(403);
            next(new Error(output.message));
        }

        // 3. If service Layer return normally
        if (output.statusCode === 200) {
            res.status(output.statusCode).json(output);
        }

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

        // 1. Call Service Layer
        const output = await usersService.getUserById(id);

        // 2. Check Service Layer Output
        if (output.statusCode === 403) {
            res.status(403);
            return next(new Error(output.message));
        }

        // 3. If service layer return normally
        if (output.statusCode === 200) {
            res.status(output.statusCode).json(output);
        }

        console.log('This is a counter measure if something happen');

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

        // 1. Call Service Layer
        const output = await usersService.createUser(first_name, last_name, email);

        // 2. Check Service Layer Output
        if (output.statusCode === 403) {
            res.status(output.statusCode);
            return next(new Error(output.message));
        }

        // 3. If service layer return success
        if (output.statusCode === 201) {
            res.status(output.statusCode).json(output);
        }
        
    } catch (error) {
        console.error('Controller Error', error.message);
        next(new Error("Controller Error"));
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

        // 1. Call Service Layer
        const result = await usersService.updateUser(id, first_name, last_name, email);

        // 2. Check service layer output
        if (result.statusCode === 403) {
            res.status(result.statusCode);
            return next(new Error(result.message));
        }

        // 3. If service layer return success
        if (result.statusCode === 201) {
            res.status(result.statusCode).json(result);
        }

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

        // 1. Call Service Layer
        const result = await usersService.deleteUser(id);

        // 2. Check service layer output
        if (result.statusCode === 403) {
            res.status(result.statusCode);
            return next(new Error(result.message));
        }

        // 3. If service layer return success
        if (result.statusCode === 201) {
            res.status(result.statusCode).json(result);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

export { getUsers, getUser, addUser, updateUser, deleteUser };
