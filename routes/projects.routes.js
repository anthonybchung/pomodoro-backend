const express = require("express");
const {
  createProject,
  getAllProjectsByUser,
  getAllProjects,
} = require("../controllers/projects.controllers");
const router = express.Router();

router.route("/").get(getAllProjects).post(createProject);

router.route("/user/:id").get(getAllProjectsByUser);

module.exports = router;
