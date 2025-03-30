import "dotenv/config"
import { app } from "./app.js"
import pool from "./db/connect.js";

const PORT = process.env.PORT || 3000;

async function connectDB() {
    try {
        const client = await pool.connect();
        console.log("Database Connected Successfully !!");
        client.release(); // Release connection back to the pool

        app.listen(PORT, () => {
            console.log("Server Running At:", PORT);
        })

    } catch (err) {
        console.error("Database Connection Failed !!")
        console.error("ERROR:", err.message || err);
    }
}

connectDB();

