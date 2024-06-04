const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  img: {
    type: String,
    require: [true, "image is required!"],
  },
  title: {
    type: String,
    require: [true, "Title is required!"],
    minlength: [5, "Title will be short!"],
    maxlength: [15, "Title will be to long!"],
  },
  description: {
    type: String,
    require: [true, "Description is required!"],
  },
  links: {
    github: {
      type: String,
      require: [true, "Pleace provide link!"],
    },
    site: {
      type: String,
      require: [true, "Pleace provide link!"],
    },
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Project = mongoose.model("Projects", ProjectSchema);

module.exports = Project;
