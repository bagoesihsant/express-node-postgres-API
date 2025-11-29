// Import Modules

// Import Services
import * as postsService from '../services/posts.service.js';

// Import Errors
import * as Errors from '../Errors/index.js';

/**
 * Get all posts from database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
async function getPosts(req, res, next){
    try {
        
        // 1. Call Service Layer
        const output = await postsService.getAllPosts();

        // 2. Check Service Layer Output
        if (output.statusCode == 404){
            next(new Errors.NotFoundError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return normally
        if (output.statusCode == 200){
            res.status(output.statusCode).json(output);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            );
        }
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

        // 1. Call the service layer
        const output = await postsService.getPostById(id);

        // 2. Check the service layer output
        if (output.statusCode === 404) {
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

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            );
        }
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

        const { title, content, user_id } = req.body;

        // 1. Call Service Layer
        const output = await postsService.createPost(title, content, user_id);

        // 2. Check Service Layer output
        if (output.statusCode === 404){
            next(new Errors.NotFoundError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        if (output.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end',
                output.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return normally
        if (output.statusCode === 201){
            res.status(output.statusCode).json(output);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            );
        }
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

        const { title, content, user_id } = req.body;

        // 1. Call Service Layer
        const output = await postsService.updatePost(title, content, id, user_id);

        // 2. Check service layer output
        if (output.statusCode === 404) {
            next(new Errors.NotFoundError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        if (output.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end',
                output.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return normally
        if (output.statusCode === 200){
            res.status(output.statusCode).json(output);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            );
        }
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

        // 1. Call service layer
        const output = await postsService.deletePost(id);

        // 2. Check service layer output
        if (output.statusCode === 404){
            next(new Errors.NotFoundError(
                output.message,
                output.statusCode,
                ''
            ));
            return;
        }

        if (output.statusCode === 500){
            next(new Errors.ServerError(
                'Something went wrong on our end',
                output.statusCode,
                ''
            ));
            return;
        }

        // 3. If service layer return normally
        if (output.statusCode === 200){
            res.status(output.statusCode).json(output);
        }

    } catch (error) {
        console.error('Controller Error', error.message);
        if (error.statusCode === 500){
            throw new Errors.ServerError(
                'Something went wrong on our end.',
                error.statusCode,
                ''
            );
        }
    }
}

export { getPosts, getPost, addPost, updatePost, deletePost };