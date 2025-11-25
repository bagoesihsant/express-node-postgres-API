// Import Modules
import { dbPool } from '../config/db.js';

/**
 * Execute Raw Query in Database
 * @param { string } query 
 * @returns { Object } object containing query result with keys: command, rowCount, oid, rows, fields
 */
async function query(query){

    try {

        // Create / Retrieve Client from Database Pool
        const client = await dbPool.connect();

        try {
            // Mark Start Time
            const startTime = Date.now();

            // Execute query
            const result = await client.query(query);

            // Mark Finish Time
            const finishTime = Date.now() - startTime;

            // Log in System
            console.log('Result', result);
            console.log('Executed Query', { duration: `${finishTime}ms`, rowCount: result.rowCount });

            // Return Query Result
            return result;
        } catch (error) {
            console.error("Query Error", error.message);
        } finally {
            // Release Client after finishing query
            client.release();
        }

    } catch (error) {
        console.error("Connection Error", error.message);
    }
}

/**
 * Execute Query using parameters as placeholder in Database
 * @param { string } query 
 * @param { Array } params 
 * @returns { Object } object containing query result with keys: command, rowCount, oid, rows, fields
 */
async function parameterizedQuery(query, params){

    try {
        // Create / Retrieve Client from Database Pool
        const client = await dbPool.connect();

        try {
            // Mark Start Time
            const startTime = Date.now();

            // Execute Query
            const result = await client.query(query, params);

            // Mark Finish Time
            const finishTime = Date.now() - startTime;

            // Log in System
            console.log('Result', result);
            console.log('Executed Query', { duration: `${finishTime}ms`, rowCount: result.rowCount });

            // Return Query Result
            return result;
        } catch (error) {
            console.error('Query Error', error.message);
        } finally {
            // Release Client after finishing query
            client.release();
        }
    } catch (error) {
        console.error("Connection Error", error.message);
    }

}

export { query, parameterizedQuery };