import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: process.env.ORIGIN,
    allowedHeaders: "Content-Type,Authorization"
}))




// import Routers 

import userRouter from "./routers/user.router.js";



//routes declaration

app.use("/api/v1/user", userRouter);


export { app };