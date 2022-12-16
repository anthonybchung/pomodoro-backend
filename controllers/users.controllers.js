const User = require("../models/users.model");

//@Route: /api/v1/users
//@Method: POST
//@Access: private

exports.createUser = async (req, res, next) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).json(newUser);
  } catch (err) {
    console.log(err);
  }
};

exports.getAllUsers = async (req, res, next) => {
  const allUsers = await User.find();
  res.status(200).json(allUsers);
};
