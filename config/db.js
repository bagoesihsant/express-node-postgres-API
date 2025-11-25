// Import Modules
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { Pool } from 'pg';
import dotenv from 'dotenv';

// Constants
const currentModuleUrl = import.meta.url;
const __filename = fileURLToPath(currentModuleUrl);
const __dirname = dirname(__filename);

// Config
dotenv.config({ path: join(__dirname, '.env') });

// Create DB Pool
const dbCredentials = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE,
};
const dbPool = new Pool(dbCredentials);

// Export DB Pool
export { dbPool };