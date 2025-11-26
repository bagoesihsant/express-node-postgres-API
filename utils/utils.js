// Generic Collection of Functions

/**
 * Function to pad number if value is less than 10
 * @param { integer } num 
 * @returns { string } num ex: 09, 01, 00
 */
function padNumber(num) {
    return num < 10 ? `0${num}` : num;
}

/**
 * Function to get YYYY-MM-DD HH:MM:SS timestamp format
 * @returns { string } timeStamp ex: 1970-01-01 00:00:00
 */
function getTimeStamp(){
    const date = new Date();

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return `${year}-${padNumber(month)}-${padNumber(day)} ${padNumber(hours)}:${padNumber(minutes)}:${padNumber(seconds)}`;
}

export { getTimeStamp };