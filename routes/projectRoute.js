const express = require("express");
const projectController = require("../controllers/projectController");
const auth = require("./../controllers/userController");

const router = express.Router();

router.get("/", projectController.getProject);
router.post("/", projectController.createProject);
router.patch("/:id", projectController.updateProject);
router.delete("/:id", projectController.removeProject);

// console.log(formidable);
// router.post("/upload-file", projectController.uploadFile);

module.exports = router;
