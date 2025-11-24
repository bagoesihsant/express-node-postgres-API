// Import Modules
import express from 'express';

// Import Routes
import { router as usersRouter } from './routes/users.js';
import { router as postsRouter } from './routes/posts.js';

// Constants
const PORT = 8080;
const app = express();

// Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// App start
app.listen(PORT, () => {
    console.log(`Application currently running at port: ${PORT}`);
});