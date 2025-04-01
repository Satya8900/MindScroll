
async function createUsers() {
    try {
        await pool.query("SELECT users_id FROM users");
    }
    catch {
        await pool.query("CREATE TABLE IF NOT EXISTS users (users_id SERIAL PRIMARY KEY,name VARCHAR(100) NOT NULL, email VARCHAR(100) UNIQUE NOT NULL, number VARCHAR(20) NOT NULL,password TEXT NOT NULL,created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP);")

        console.log("users Table Created successfully..")
    }
}


async function createBlog() {
    try {
        await pool.query("SELECT blog_id FROM blog");
    }
    catch {
        await pool.query("CREATE TABLE IF NOT EXISTS blog (blog_id SERIAL PRIMARY KEY,title VARCHAR(255) NOT NULL,content TEXT NOT NULL,author INT NOT NULL, create_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,FOREIGN KEY (author) REFERENCES users(users_id));")

        console.log("blog Table Created successfully..")
    }
}



function createTables() {
    createUsers();
    createBlog();
}

export default createTables;