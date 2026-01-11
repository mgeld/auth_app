import { Pool } from 'pg'
import dotenv from 'dotenv';
dotenv.config()

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_BASE,
    port: Number(process.env.DB_PORT)
})

console.log('process.env.DB_USER', process.env.DB_USER)
console.log('process.env.DB_USER', process.env.DB_USER)

async function createUsers() {
    await pool.query(`
        CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(150) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
`)
}

createUsers()