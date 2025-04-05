import { Router } from "express";
import { loginUser, logoutUser, signupUser } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/auth.middleware.js"

const router = Router();

//Unsecured routes
router.route("/signup").post(signupUser);
router.route("/login").post(loginUser);

//secured routes
router.route("/logout").post(verifyJWT, logoutUser);


export default router;