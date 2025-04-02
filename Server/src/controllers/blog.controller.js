import asyncHandler from "../utils/asyncHandler.js"
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";


const createBlog = asyncHandler(
    async (req, res) => {
        const { title, content } = req.body;
        const author = req.user;

        if (!title || !content) {
            return res.status(200).json(new ApiError(400, "Please fill all the required fields.", "Validation Error"));
        }

        const create_query = "INSERT INTO blog (title, content, author) VALUES ($1, $2, $3);";
        const result_create_query = await pool.query(create_query, [title, content, author]);

        res.status(201).json(new ApiResponse(201, [result_create_query.rowCount], "Blog Created Successfully,Thank you..!"));
    });


const deleteBlog = asyncHandler(
    async (req, res) => {
        const { blog_id } = req.body;
        const author = req.user;

        const delete_query = "DELETE FROM blog WHERE blog_id = $1 AND author = $2;"
        const result_delete_query = await pool.query(delete_query, [blog_id, author]);

        res.status(200).json(new ApiResponse(204, [result_delete_query.rowCount], "Blog Deleted Successfully..!"));
    });


const updateBlog = asyncHandler(
    async (req, res) => {
        const { title, content, blog_id } = req.body;
        const author = req.user;

        if (!title || !content) {
            return res.status(200).json(new ApiError(400, "Please fill the required field.", "Validation Error"));
        }

        const update_query = " UPDATE blog SET title = $1, content = $2 WHERE blog_id = $3 AND author = $4;";
        const result_update_query = await pool.query(update_query, [title, content, blog_id, author]);

        res.status(200).json(new ApiResponse(200, [result_update_query.rowCount], "Blog Updated Successfully,Thank you..!"));
    });


const allBlog = asyncHandler(
    async (req, res) => {
        const { page, limit } = req.query;
        const offset = (page - 1) * limit;

        const selectAll_query = "SELECT blog.blog_id, blog.title, blog.content, users.name AS author_name FROM blog INNER JOIN users ON blog.author = users.users_id ORDER BY blog.create_time DESC LIMIT $1 OFFSET $2;";
        const result_selectAll_query = await pool.query(selectAll_query, [limit, offset]);

        const count_All_query = "SELECT COUNT(*) AS total_blogs FROM blog;"
        const result_count_All_query = await pool.query(count_All_query, []);

        res.status(200).json(new ApiResponse(200, [result_selectAll_query.rows, result_count_All_query.rows], "All Blogs Retrievd Successfully,Thank you..!"));
    });


const userBlog = asyncHandler(
    async (req, res) => {
        const { page, limit } = req.query;
        const author = req.user;
        const offset = (page - 1) * limit;

        const selectUser_query = "SELECT blog.blog_id, blog.title, blog.content, users.name AS author_name FROM blog INNER JOIN users ON blog.author = users.users_id WHERE blog.author = $3 ORDER BY blog.create_time DESC LIMIT $1 OFFSET $2;";
        const result_selectUser_query = await pool.query(selectUser_query, [limit, offset, author]);

        const count_User_query = "SELECT COUNT(*) AS total_blogs FROM blog WHERE blog.author = $1;"
        const result_count_User_query = await pool.query(count_User_query, [author]);

        res.status(200).json(new ApiResponse(200, [result_selectUser_query.rows, result_count_User_query.rows], "User's Blogs Retrievd Successfully,Thank you..!"));
    });



export {
    createBlog,
    deleteBlog,
    updateBlog,
    allBlog,
    userBlog
}