// Import Modules
import * as dbHelper from '../databases/helper.js';

// Import Errors
import * as Errors from '../Errors/index.js';

/**
 * Get all users data from database
 * @returns { JSON } arrays of objects containing users data
 */
async function getAllUsers(){
    try {
        const result = await dbHelper.query('SELECT * FROM users ORDER BY users.id ASC');
        return result;
    } catch (error) {
        console.error("Model Error", error.message);
        throw new Errors.ServerError(
            `Fail to execute query with trace: ${error.message}`,
            500,
            'Model'
        );
    }
}

/**
 * Get user data from database using id
 * @param { integer } id 
 * @returns { JSON } object containing user data
 */
async function getUserById(id){
    try {
        const result = await dbHelper.parameterizedQuery(
            'SELECT * FROM users WHERE users.id = $1 ORDER BY users.id ASC',
            [id]
        );
        return result;
    } catch (error) {
        console.error("Model Error", error.message);
        throw new Errors.ServerError(
            `Fail to execute query with trace: ${error.message}`,
            500,
            'Model'
        );
    }
}

/**
 * Add new user into database
 * @param { string } first_name 
 * @param { string } last_name 
 * @param { string } email 
 * @returns { integer } inserted row id
 */
async function addUser(first_name, last_name, email){
    try {
        const result = await dbHelper.parameterizedQuery(
            'INSERT INTO users (first_name, last_name, email) VALUES ($1, $2, $3)',
            [first_name, last_name, email]
        );
        return result;
    } catch (error) {
        console.error("Model Error", error.message);
        throw new Errors.ServerError(
            `Fail to execute query with trace: ${error.message}`,
            500,
            'Model'
        );
    }
}

/**
 * Update user information in database using id
 * @param { integer } id 
 * @param { string } first_name 
 * @param { string } last_name 
 * @param { string } email 
 * @returns { integer } affected row id
 */
async function updateUser(id, first_name, last_name, email){
    try {
        const result = await dbHelper.parameterizedQuery(
            'UPDATE users SET first_name = $2, last_name = $3, email = $4 WHERE users.id = $1',
            [id, first_name, last_name, email]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
        throw new Errors.ServerError(
            `Fail to execute query with trace: ${error.message}`,
            500,
            'Model'
        );
    }
}

/**
 * Delete user information in database using id
 * @param { integer } id 
 * @returns affected row id
 */
async function deleteUser(id){
    try {
        const result = await dbHelper.parameterizedQuery(
            'DELETE FROM users WHERE users.id = $1',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
        throw new Errors.ServerError(
            `Fail to execute query with trace: ${error.message}`,
            500,
            'Model'
        );
    }
}

/**
 * Check user information in database useing email
 * @param { string } email 
 * @returns 
 */
async function checkEmail(email){

    try {
        const result = await dbHelper.parameterizedQuery(
            'SELECT * FROM users WHERE users.email LIKE $1',
            [`%${email}%`]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
        throw new Errors.ServerError(
            `Fail to execute query with trace: ${error.message}`,
            500,
            'Model'
        );
    }

}

export { getAllUsers, getUserById, addUser, updateUser, deleteUser, checkEmail };