//to acess all our environment variables from .env file via dotenv
require("dotenv").config();
//require the pg module that connects node to the postgres library
const { Pool } = require("pg");
//to persist in production mode
const isProduction = process.env.NODE_ENV === "production";
//to connect to database 
const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: isProduction
});

module.exports = { pool };