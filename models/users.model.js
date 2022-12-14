const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    unique: false,
    required: [true, "First Name required"],
  },
  lastName: {
    type: String,
    unique: false,
    required: [true, "Last Name required"],
  },
  email: {
    type: String,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please enter a valid email address",
    ],
  },
  password: {
    type: String,
    unique: false,
  },
  approved: {
    type: Boolean,
    required: true,
    default: false,
  },
});

module.exports = mongoose.model("User", UserSchema);
