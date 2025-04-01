import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import argon2 from "argon2";
import jwt from "jsonwebtoken";


const signupUser = asyncHandler(
    async (req, res) => {
        const { name, email, number, password } = req.body;

        if (!name || !email || !number || !password) {
            return res.status(200).json(new ApiError(400, "Please fill all the required fields.", "Validation Error"))
        }

        const check_available_query = "SELECT email,number FROM users WHERE email = $1 OR number = $2"
        let check_available_result = await pool.query(check_available_query, [email, number]);

        if (check_available_result.rowCount > 0) {
            return res.status(200).json(new ApiError(400, "Account with this email/phone number exists.", "Account Exist"))
        }
        else {
            const hashed_password = await argon2.hash(password);
            const signup_insert_query = "INSERT INTO users (name, email, number, password) VALUES ($1, $2, $3, $4)";
            let signup_insert_result = await pool.query(signup_insert_query, [name, email, number, hashed_password]);
            res.status(201).json(new ApiResponse(201, [signup_insert_result.rowCount], "Thank you for signing up, Please login..."));
        }
    }
);

const loginUser = asyncHandler(
    async (req, res) => {
        const { email_number, password } = req.body;

        if (!email_number || !password) {
            return res.status(200).json(new ApiError(400, "Please fill all the required fields.", "Validation Error"))
        }

        const check_available_query = "SELECT users_id,password FROM users WHERE email = $1 OR number = $2"
        let check_available_result = await pool.query(check_available_query, [email_number, email_number]);

        if (check_available_result.rowCount > 0) {

            const hashedPassword = check_available_result.rows[0]?.password;
            const userId = check_available_result.rows[0]?.users_id;

            if (hashedPassword && await argon2.verify(hashedPassword, password)) {
                const accessToken = jwt.sign({ userId }, process.env.JWT_SECRET_TOKEN, { expiresIn: "10d" });

                res.cookie("accessToken", accessToken, {
                    httpOnly: true,
                    sameSite: "None",
                    secure: true
                });
                res.status(200).json(new ApiResponse(200, [], "Successfully Logged In..."));
            }
            else {
                return res.status(200).json(new ApiError(400, "The provided password is incorrect.", "Invalid password"))
            }
        }
        else {
            return res.status(200).json(new ApiError(400, "User not exists with the email or phone number.", "User not found"))
        }
    }
);



export {
    signupUser,
    loginUser
}