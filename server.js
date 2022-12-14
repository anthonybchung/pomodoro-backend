const express = require("express");
const dotenv = require("dotenv");

// load env.
dotenv.config();
const app = express();

//server details.
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
const MODE = process.env.NODE_ENV;

//import routes
const users = require("./routes/users.routes");

module.exports = { app, PORT, HOST, MODE };
