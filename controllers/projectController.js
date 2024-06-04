const Project = require("../models/projectModel");

exports.createProject = async (req, res, next) => {
  try {
    const newProject = await Project.create(req.body);

    res.status(201).json({
      status: "success",
      newProject,
    });
  } catch (err) {
    next(err);
  }
};

exports.getProject = async (req, res, next) => {
  try {
    const { limit } = req.query;
    const projects = await Project.find().limit(limit).sort({ createdAt: -1 });

    if (!projects) {
      res.status(404).json({
        message: "Empty",
      });
    }

    res.status(200).json({
      status: "success",
      length: projects.length,
      projects,
    });
  } catch (err) {
    next(err);
  }
};
exports.removeProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const projects = await Project.findByIdAndDelete(id);

    if (!projects) {
      res.status(404).json({
        status: "fail",
        message: "Record not found",
      });
    }

    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    next(err);
  }
};
exports.updateProject = async (req, res, next) => {
  try {
    const { id } = req.params;

    const projects = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!projects) {
      res.status(404).json({
        status: "fail",
        message: "Record not found",
      });
    }

    res.status(200).json({
      status: "success",
      data: projects,
    });
  } catch (err) {
    next(err);
  }
};
