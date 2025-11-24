// Import Modules
import express from 'express';

// Import Middlewares
import * as controller from '../controllers/posts.js';

// Constants
const router = express.Router();

// Middlewares

// Routes
router.get('/', controller.getPosts);
router.get('/:id', controller.getPost);
router.post('/', controller.addPost);
router.put('/:id', controller.updatePost);
router.delete('/:id', controller.deletePost);

// Export Router
export { router };