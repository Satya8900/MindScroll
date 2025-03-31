import express, { json } from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import Routers 

import userRouter from "./routers/user.router.js";



//routes declaration

app.use("/api/v1/user", userRouter);


export { app };