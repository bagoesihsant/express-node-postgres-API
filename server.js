// Import Modules
import express from 'express';

// Constants
const PORT = 8080;
const app = express();

// Sample Routes
app.get('/', (req, res) => { res.status(200).send('Hello World!!'); });

// App start
app.listen(PORT, () => {
    console.log(`Application currently running at port: ${PORT}`);
});