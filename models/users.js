// Import Modules
import * as dbHelper from '../databases/helper.js';

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
    }
}

/**
 * Add new user into database
 * @param { string } first_name 
 * @param { string } last_name 
 * @param { string } email 
 * @returns { integer } inserted row id
 */
function addUser(first_name, last_name, email){
    return 1;
}

/**
 * Update user information in database using id
 * @param { integer } id 
 * @param { string } first_name 
 * @param { string } last_name 
 * @param { string } email 
 * @returns { integer } affected row id
 */
function updateUser(id, first_name, last_name, email){
    const filterUser = sampleData.find(user => user.id === id);
    return filterUser.id;
}

/**
 * Delete user information in database using id
 * @param { integer } id 
 * @returns affected row id
 */
function deleteUser(id){
    const filterUser = sampleData.find(user => user.id === id);
    return filterUser.id;
}

export { getAllUsers, getUserById, addUser, updateUser, deleteUser };