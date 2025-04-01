import { Router } from "express";
import { createBlog } from "../controllers/blog.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js"

const router = Router();


//secured routes
router.route("/create").post(verifyJWT, createBlog);



export default router;