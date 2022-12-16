const Project = require("../models/projects.model");
const User = require("../models/users.model");
const usersModel = require("../models/users.model");

//@Route: /api/v1/projects
//@Method: POST
//@Access: private

exports.createProject = async (req, res, next) => {
  const project = req.body;
  try {
    const user = await User.findById(userId);

    const newProject = await Project.create(project);
    res.status(200).json(newProject);
  } catch (err) {
    console.log(err);
  }
};

//@Route: /api/v1/projects/
//@Method: GET
//@Access: private

exports.getAllProjects = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const allProjects = await Project.find();
    res.status(200).json(allProjects);
  } catch (err) {
    console.log(err);
  }
};

//@Route: /api/v1/projects/user/:id
//@Method: GET
//@Access: private

exports.getAllProjectsByUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    const allProjects = await Project.findByUser(userId);
    res.status(200).json(allProjects);
  } catch (err) {
    console.log(err);
  }
};
