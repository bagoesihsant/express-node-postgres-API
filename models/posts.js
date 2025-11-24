// Import Modules

// Sample Data
const sampleData = [
    {
        id: 1,
        title: 'Lord of the Ring',
        content: 'lorem ipsum dolor sit amet',
        created_at: '2025-11-22 09:00:00',
        updated_at: '2025-11-23 09:00:00'
    },
    {
        id: 2,
        title: 'The Witcher: Last Wish',
        content: 'lorem ipsum dolor sit amet',
        created_at: '2025-11-11 09:00:00',
        updated_at: '2025-11-18 09:00:00'
    },
    {
        id: 3,
        title: 'Dispatch',
        content: 'lorem ipsum dolor sit amet',
        created_at: '2025-11-12 09:00:00',
        updated_at: '2025-11-14 09:00:00'
    },
    {
        id: 4,
        title: 'The Witcher: Sword of Destiny',
        content: 'lorem ipsum dolor sit amet',
        created_at: '2025-11-14 09:00:00',
        updated_at: '2025-11-16 09:00:00'
    },
    {
        id: 5,
        title: 'The Witcher: Blood of Elves',
        content: 'lorem ipsum dolor sit amet',
        created_at: '2025-11-09 09:00:00',
        updated_at: '2025-11-23 09:00:00'
    }
];

/**
 * Get all posts data from database
 * @returns { JSON } arrays of objects containing posts data
 */
function getAllPosts(){
    return sampleData;
}

/**
 * Get post data from database using id
 * @param { integer } id 
 * @returns { JSON } object containing post data
 */
function getPostById(id){
    const post = sampleData.find(post => post.id === id);
    return post;
}

/**
 * Add new post into database
 * @param { string } title 
 * @param { string } content 
 * @returns { integer } inserted row id
 */
function addPost(title, content){
    return 1;
}

/**
 * Update post information in database using id
 * @param { integer } id 
 * @param { string } title 
 * @param { string } content 
 * @returns { integer } affected row id
 */
function updatePost(id, title, content){
    const filterPost = sampleData.find(post => post.id === id);
    return filterPost.id;
}

/**
 * Delete post information in database using id
 * @param { integer } id 
 * @returns { integer } affected row id
 */
function deletePost(id){
    const filterPost = sampleData.find(post => post.id === id);
    return filterPost.id;
}