import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.ORIGIN,
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
}));




// import Routers 

import userRouter from "./routers/user.router.js";
import blogRouter from "./routers/blog.router.js"


//routes declaration

app.use("/api/v1/user", userRouter);
app.use("/api/v1/blog", blogRouter);


export { app };