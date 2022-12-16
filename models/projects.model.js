const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: [true, "Project Name must be unique"],
    required: [true, "Project Name required"],
  },
  description: {
    type: String,
    maxlength: [300, "Maximum character length is 300."],
  },
  createDate: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: [true, "User ID required."],
  },
});

ProjectSchema.static("findByUser", function (user) {
  return this.find({ user: user });
});

module.exports = mongoose.model("Project", ProjectSchema);
