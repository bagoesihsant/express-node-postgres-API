// Import Modules

// Import Models
import * as postsModel from '../models/posts.model.js';
import * as usersModel from '../models/users.model.js';

async function getAllPosts(){

    try {
        // 1. Get all posts from database
        const posts = await postsModel.getAllPosts();

        // 2. Check if posts is empty or not
        if (posts.rowCount < 1){
            return { statusCode: 403, message: 'No posts found.', output: [] };
        }

        // 3. If posts is not empty
        return { statusCode: 200, message: 'Posts fetched.', output: posts.rows };

    } catch (error) {
        console.error("Service Error", error.message);
    }

}

async function getPostById(id) {

    try {
        
        // 1. Get post from database using id
        const post = await postsModel.getPostById(id);

        // 2. Check if post is empty or not
        if (post.rowCount < 1) {
            return { statusCode: 403, message: 'Post not found.', output: [] };
        }

        // 3. If post is not empty
        return { statusCode: 200, message: 'Post found.', output: post.rows };

    } catch (error) {
        console.error("Service Error", error.message);
    }

}

async function createPost(title, content, user_id){

    try {

        // 1. Get user
        const user = await usersModel.getUserById(user_id);

        // 2. Check if user exists
        if (user.rowCount < 1) {
            return { statusCode: 403, message: 'User not found.', output: [] };
        }

        // 3. If user exists, then add data
        const output = await postsModel.addPost(title, content, user_id);

        // 4. Check if Post created
        if (output.rowCount < 1) {
            return { statusCode: 403, message: 'Failed to create post.', output: [] };
        }

        // 5. If post created
        return { statusCode: 201, message: 'Post created.', output: { title, content, user_id } };

    } catch (error) {
        console.error("Service Error", error.message);
    }

}

async function updatePost(title, content, post_id){

    try {

        // 1. Get Post
        const post = await postsModel.getPostById(post_id);

        // 2. Check if post exists
        if (post.rowCount < 1) {
            return { statusCode: 403, message: 'Post not found.', output: [] };
        }

        // 3. If post exitst
        const output = await postsModel.updatePost(post_id, title, content);

        // 4. Check if post updated
        if (output.rowCount < 1) {
            return { statusCode: 403, message: 'Failed to update post.', output: [] };
        }

        // 5. If post updated
        return { statusCode: 201, message: 'Post updated.', output: { post_id, title, content } };

    } catch (error) {
        console.error("Service Error", error.message);
    }

}

async function deletePost(post_id){

    try {

        // 1. Get Post
        const post = await postsModel.getPostById(post_id);

        // 2. Check if post exists
        if (post.rowCount < 1){
            return { statusCode: 403, message: 'Post not found.', output: [] };
        }

        // 3. If post exists
        const output = await postsModel.deletePost(post_id);

        // 4. Check if post is deleted
        if (output.rowCount < 1){
            return { statusCode: 403, message: 'Failed to delete post.', output: [] };
        }

        // 5. If post is deleted
        return { statusCode: 201, message: 'Post deleted', output: post.rows }

    } catch (error) {
        console.error("Service Error", error.message);
    }

}

export { getAllPosts, getPostById, createPost, updatePost, deletePost };