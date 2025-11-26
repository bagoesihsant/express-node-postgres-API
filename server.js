// Import Modules
import express from 'express';

// Import Routes
import { router as usersRouter } from './routes/users.js';
import { router as postsRouter } from './routes/posts.js';

// Import Middlewares
import * as middleware from './middlewares/index.js';

// Constants
const PORT = 8080;
const app = express();

// Middlewares
app.use(middleware.accessLog);

// Router's Routes
app.use('/users', usersRouter);
app.use('/posts', postsRouter);

// Error Handler
app.use(middleware.errorHandler);

// App start
app.listen(PORT, () => {
    console.log(`Application currently running at port: ${PORT}`);
});