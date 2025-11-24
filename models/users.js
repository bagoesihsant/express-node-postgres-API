// Import Modules

// Sample Data
const sampleData = [
    {
        id: 1,
        first_name: 'Dean',
        last_name: 'Martin',
        email: 'deanmartin@mail.com',
        created_at: '2025-11-23 09:00:00'
    },
    {
        id: 2,
        first_name: 'Martin',
        last_name: 'Luther',
        email: 'martinluther@mail.com',
        created_at: '2025-11-13 09:00:00'
    },
    {
        id: 3,
        first_name: 'Michael',
        last_name: 'Jackson',
        email: 'michaeljack@mail.com',
        created_at: '2025-11-12 09:00:00'
    },
    {
        id: 4,
        first_name: 'Rick',
        last_name: 'Astley',
        email: 'rickastley@mail.com',
        created_at: '2025-11-11 09:00:00'
    },
    {
        id: 5,
        first_name: 'Frank',
        last_name: 'Sinatra',
        email: 'franksinatra@mail.com',
        created_at: '2025-11-10 09:00:00'
    }
];

/**
 * Get all users data from database
 * @returns { JSON } arrays of objects containing users data
 */
function getAllUsers(){
    return sampleData;
}

/**
 * Get user data from database using id
 * @param { integer } id 
 * @returns { JSON } object containing user data
 */
function getUserById(id){
    const user = sampleData.find(user => user.id === id);
    return user;
}

/**
 * Add new user into database
 * @param { string } first_name 
 * @param { string } last_name 
 * @param { string } email 
 * @returns { integer } inserted row id
 */
function addUser(first_name, last_name, email){
    return 1;
}

/**
 * Update user information in database using id
 * @param { integer } id 
 * @param { string } first_name 
 * @param { string } last_name 
 * @param { string } email 
 * @returns { integer } affected row id
 */
function updateUser(id, first_name, last_name, email){
    const filterUser = sampleData.find(user => user.id === id);
    return filterUser.id;
}

/**
 * Delete user information in database using id
 * @param { integer } id 
 * @returns affected row id
 */
function deleteUser(id){
    const filterUser = sampleData.find(user => user.id === id);
    return filterUser.id;
}