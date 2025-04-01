import asyncHandler from "../utils/asyncHandler.js";
import ApiError from "../utils/apiError.js";
import jwt from "jsonwebtoken";


const verifyJWT = asyncHandler((req, res, next) => {
    try {
        const token = req.cookies?.accessToken_mindScroll || req.header("Authorization")?.replace("Bearer ", "");

        if (!token) {
            return res.status(200).json(new ApiError(401, "Unauthorized request,Please Login.."));
        }

        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_TOKEN);
        const user = decodedToken.userId;

        if (!user) {
            return res.status(200).json(new ApiError(401, "Invalid access token,Please Login.."));
        }

        req.user = user;
        next()

    } catch (error) {
        return res.status(200).json(new ApiError(401, error?.message + ",Please Login.." || "Invalid access token,Please Login.."));
    }

});

export default verifyJWT;