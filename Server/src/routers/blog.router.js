import { Router } from "express";
import { allBlog, createBlog, deleteBlog, updateBlog, userBlog } from "../controllers/blog.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js"

const router = Router();


//unsecured routes
router.route("/retrieve/all").get(allBlog);


//secured routes
router.route("/create").post(verifyJWT, createBlog);
router.route("/delete").delete(verifyJWT, deleteBlog);
router.route("/update").patch(verifyJWT, updateBlog);
router.route("/retrieve/user").get(verifyJWT, userBlog);


export default router;