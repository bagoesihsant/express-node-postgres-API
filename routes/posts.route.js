// Import Modules
import express from 'express';

// Import Middlewares
import * as controller from '../controllers/posts.controller.js';

// Import Validators
import * as validators from '../middlewares/validators/index.js';

// Constants
const router = express.Router();

// Middlewares
router.use(express.json());

// Routes
router.get('/', controller.getPosts);
router.get('/:id', [validators.validateId] ,controller.getPost);
router.post('/', [validators.validateTitle, validators.validateContent, validators.validateUserId] ,controller.addPost);
router.put('/:id', [validators.validateId, validators.validateTitle, validators.validateContent] ,controller.updatePost);
router.delete('/:id', [validators.validateId] ,controller.deletePost);

// Export Router
export { router };