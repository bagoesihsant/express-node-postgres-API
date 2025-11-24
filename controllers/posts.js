// Import Modules

/**
 * Get all posts from database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getPosts(req, res, next){
    res.status(200).send('Hello World!! Posts!');
}

/**
 * Get post from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function getPost(req, res, next){
    const { id } = req.params;

    res.status(200).send(`Hello World!! ${id}! Posts!`);
}

/**
 * Add new post into database
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function addPost(req, res, next){
    const { id } = req.params;

    res.status(200).send('Hello World! POST! Posts!');
}

/**
 * Update post information in database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function updatePost(req, res, next){
    const { id } = req.params;

    res.status(200).send(`Hello World!! PUT! ${id}! Posts!`);
}

/**
 * Delete post from database using id
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function deletePost(req, res, next){
    const { id } = req.params;

    res.status(200).send(`Hello World! DELETE! ${id}! Posts!`);
}

export { getPosts, getPost, addPost, updatePost, deletePost };