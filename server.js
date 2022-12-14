const express = require("express");
const dotenv = require("dotenv");
const dbConnection = require("./config/db");
// load env.
dotenv.config();

//server details.
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
const MODE = process.env.NODE_ENV;
dbConnection();

const app = express();

// Backend will receive JSON data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import routes
const users = require("./routes/users.routes");

//mount routes.
app.use("api/v1/users", users);
module.exports = { app, PORT, HOST, MODE };
