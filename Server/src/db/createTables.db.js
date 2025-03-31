
async function createUsers() {
    try {
        await pool.query("SELECT id FROM users");
    }
    catch {
        await pool.query("CREATE TABLE IF NOT EXISTS users (id SERIAL PRIMARY KEY,name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, number VARCHAR(20) NOT NULL,password TEXT NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);")

        console.log("users Table Created successfully..")
    }
}



function createTables() {
    createUsers();
}

export default createTables;