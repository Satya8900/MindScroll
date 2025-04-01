import { Router } from "express";
import { loginUser, signupUser } from "../controllers/user.controller.js";


const router = Router();

//Unsecured routes
router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);

//secured routes

export default router;