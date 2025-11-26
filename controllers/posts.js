// Import Modules

// Import Models
import * as postsModel from '../models/posts.js';

/**
 * Get all posts from database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getPosts(req, res, next){
    try {
        const posts = await postsModel.getAllPosts();

        if (posts.rowCount < 1) {
            res.status(200).json({
                status: 200,
                message: 'No data found.',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully fetching data.',
            data: posts.rows,
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

/**
 * Get post from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getPost(req, res, next){
    try {

        const { id } = req.params;

        const post = await postsModel.getPostById(id);

        if (post.rowCount < 1){
            res.status(200).json({
                status: 200,
                message: 'No data found.',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully fetching data.',
            data: post.rows,
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

/**
 * Add new post into database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function addPost(req, res, next){
    try {

        const { title, content } = req.body;

        const result = await postsModel.addPost(title, content);

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
 * Update post information in database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function updatePost(req, res, next){
    try {

        const { id } = req.params;

        const { title, content } = req.body;

        const result = await postsModel.updatePost(id, title, content);

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
 * Delete post from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function deletePost(req, res, next){
    try {
        const { id } = req.params;

        const result = await postsModel.deletePost(id);

        if (result.rowCount < 1){
            res.status(200).json({
                status: 200,
                message: 'No data deleted',
            });
            return;
        }

        res.status(200).json({
            status: 200,
            message: 'Successfully deleting data.'
        });

    } catch (error) {
        console.error('Controller Error', error.message);
    }
}

export { getPosts, getPost, addPost, updatePost, deletePost };