// Import Modules
import express from 'express';

// Constants
const router = express.Router();

// Middlewares

// Routes
router.get('/', (req, res) => { res.status(200).send('Hello World! Users!'); });
router.get('/:id', (req, res) => { const { id } = req.params; res.status(200).send(`Hello World!! ${id} Users!`); });
router.post('/', (req, res) => { res.status(200).send('Hello POST World!! Users!'); });
router.put('/:id', (req, res) => { const { id } = req.params; res.status(200).send(`Hello PUT World!! ${id} Users!`); });
router.delete('/:id', (req, res) => { const { id } = req.params; res.status(200).send(`Hello DELETE World!! ${id} Users!`); });

// Export
export { router };