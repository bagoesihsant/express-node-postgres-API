// Import Modules
import * as utils from '../utils/utils.js';


/**
 * Middleware that function to log all user activity on API
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function accessLog(req, res, next){

    // Start Time
    const startTime = Date.now();

    // On Request Finish
    res.on('finish', () => {
        // Duration of Request
        const finishTime = Date.now() - startTime;

        // Create Log String
        const logString = `${utils.getTimeStamp()} ${req.method} ${req.originalUrl} ${res.statusCode} ${finishTime}ms`;

        // Log into console
        console.log(logString);
    });

    next();

}

export { accessLog };