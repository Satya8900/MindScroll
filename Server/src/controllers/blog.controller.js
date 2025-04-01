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
    })



export { createBlog }