// Import Modules
import * as dbHelper from '../databases/helper.js';


/**
 * Get all posts data from database
 * @returns { JSON } arrays of objects containing posts data
 */
async function getAllPosts(){
    try {
        const result = await dbHelper.query('SELECT * FROM posts ORDER BY posts.id ASC');
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
    }
}

/**
 * Get post data from database using id
 * @param { integer } id 
 * @returns { JSON } object containing post data
 */
async function getPostById(id){
    try {
        const result = await dbHelper.parameterizedQuery(
            'SELECT * FROM posts WHERE posts.id = $1 ORDER BY posts.id ASC',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
    }
}

/**
 * Add new post into database
 * @param { string } title 
 * @param { string } content 
 * @returns { integer } inserted row id
 */
async function addPost(title, content){
    try {
        const result = await dbHelper.parameterizedQuery(
            'INSERT INTO posts (title, content) VALUES ($1, $2)',
            [title, content]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
    }
}

/**
 * Update post information in database using id
 * @param { integer } id 
 * @param { string } title 
 * @param { string } content 
 * @returns { integer } affected row id
 */
async function updatePost(id, title, content){
    try {
        const result = await dbHelper.parameterizedQuery(
            'UPDATE posts SET title = $2, content = $3 WHERE posts.id = $1',
            [id, title, content]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
    }
}

/**
 * Delete post information in database using id
 * @param { integer } id 
 * @returns { integer } affected row id
 */
async function deletePost(id){
    try {
        const result = await dbHelper.parameterizedQuery(
            'DELETE FROM posts WHERE posts.id = $1',
            [id]
        );
        return result;
    } catch (error) {
        console.error('Model Error', error.message);
    }
}

export { getAllPosts, getPostById, addPost, updatePost, deletePost };