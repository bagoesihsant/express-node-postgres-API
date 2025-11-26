// Import Modules
import express from 'express';

// Import Controllers
import * as controller from '../controllers/users.js';

// Import Validators
import * as validators from '../middlewares/validators/index.js';

// Constants
const router = express.Router();

// Middlewares
router.use(express.json());

// Routes
router.get('/', controller.getUsers);
router.get('/:id', [validators.validateId], controller.getUser);
router.post('/', controller.addUser);
router.put('/:id', controller.updateUser);
router.delete('/:id', controller.deleteUser);

// Export
export { router };