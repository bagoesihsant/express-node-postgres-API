// Import Modules
import express from 'express';

// Import Controllers
import * as controller from '../controllers/users.js';

// Constants
const router = express.Router();

// Middlewares

// Routes
router.get('/', controller.getUsers);
router.get('/:id', controller.getUser);
router.post('/', controller.addUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

// Export
export { router };