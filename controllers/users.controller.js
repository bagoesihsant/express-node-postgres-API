// Import Modules

// Import Services
import * as usersService from '../services/users.service.js';

// Import Errors
import * as Errors from '../Errors/index.js';

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
        if (output.statusCode === 404){
            next(new Errors.NotFoundError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        // 3. If service Layer return normally
        if (output.statusCode === 200) {
            res.status(output.statusCode).json(output);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            ));
        }
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
        if (output.statusCode === 404){
            next(new Errors.NotFoundError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return normally
        if (output.statusCode === 200) {
            res.status(output.statusCode).json(output);
        }

        console.log('This is a counter measure if something happen');

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            ));
        }
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
        if (output.statusCode === 409) {
            next(new Errors.ConflictError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        if (output.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                output.statusCode,
                ''
            ));
        }

        // 3. If service layer return success
        if (output.statusCode === 201) {
            res.status(output.statusCode).json(output);
        }
        
    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            ));
        }
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
        if (result.statusCode === 404) {
            next(new Errors.NotFoundError(
                result.message,
                result.statusCode,
                ''
            ));
            return;
        }

        if (result.statusCode === 409) {
            next(new Errors.ConflictError(
                result.message,
                result.statusCode,
                ''
            ));
            return;
        }

        if (result.statusCode === 500) {
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                result.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return success
        if (result.statusCode === 201) {
            res.status(result.statusCode).json(result);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500) {
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            ));
            return;
        }
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
        if (result.statusCode === 404) {
            next(new Errors.NotFoundError(
                result.message,
                result.statusCode,
                ''
            ));
            return;
        }

        if (result.statusCode === 500) {
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                result.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return success
        if (result.statusCode === 201) {
            res.status(result.statusCode).json(result);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500) {
            next(new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            ));
            return;
        }
    }
}

export { getUsers, getUser, addUser, updateUser, deleteUser };
