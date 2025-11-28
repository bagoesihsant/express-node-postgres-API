// Import Modules
import express from 'express';

// Import Controllers
import * as controller from '../controllers/users.controller.js';

// Import Validators
import * as validators from '../middlewares/validators/index.js';

// Constants
const router = express.Router();

// Middlewares
router.use(express.json());

// Routes
router.get('/', controller.getUsers);
router.get('/:id', [validators.validateId], controller.getUser);
router.post('/', [validators.validateName, validators.validateEmail], controller.addUser);
router.put('/:id', [validators.validateId, validators.validateName, validators.validateEmail], controller.updateUser);
router.delete('/:id', [validators.validateId], controller.deleteUser);

// Export
export { router };