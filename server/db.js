import { Pool } from 'pg'

const pool = new Pool({
    user: 'postgres',
    password: '12345',
    host: 'localhost',
    database: 'auth_app',
    port: 5432
})

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