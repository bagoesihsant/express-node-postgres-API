// Import Modules
import express from 'express';

// Constants
const router = express.Router();

// Middlewares

// Routes
router.get('/', (req, res) => { res.status(200).send('Hello World! Posts'); });
router.get('/:id', (req, res) => { const { id } = req.params; res.status(200).send(`Hello World!! ${id} Posts`); });
router.post('/', (req, res) => { res.status(200).send('Hello POST World!! Posts'); });
router.put('/:id', (req, res) => { const { id } = req.params; res.status(200).send(`Hello PUT World!! ${id} Posts`); });
router.delete('/:id', (req, res) => { const { id } = req.params; res.status(200).send(`Hello DELETE World!! ${id} Posts`); });

// Export Router
export { router };