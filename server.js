const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const dbConnection = require("./config/db");
// load env.
dotenv.config();

//server details.
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
const MODE = process.env.NODE_ENV;
dbConnection();

const app = express();

// Morgan logger. Only run Morgan logger during development.
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Backend will receive JSON data.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//import routes
const users = require("./routes/users.routes");
const projects = require("./routes/projects.routes");

//mount routes.
app.use("/api/v1/users", users);
app.use("/api/v1/projects", projects);
module.exports = { app, PORT, HOST, MODE };
