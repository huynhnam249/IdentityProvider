require('dotenv').config()

const Pool = require('pg').Pool
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgres://api_user:oerdiRm12PjfUNdmgpJhKj7qRU4urzWT@dpg-ce7sfso2i3mvm01u7af0-a/auth_poa3`

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: {
        rejectUnauthorized: false
    }
    // ssl: process.env.DATABASE_URL ? true : false
})

module.exports = { pool }