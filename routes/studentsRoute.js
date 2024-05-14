const express = require('express');
const router = express.Router();
const studentsController = require("../controllers/studentsController");
const yearsController = require("../controllers/yearsController");

router.route('/students').get(studentsController.studentAll);
router.route("/students/new").get(studentsController.newStudent);
router.route("/students").post(studentsController.create);
router.route("/students/:id/edit").get(studentsController.getById);
router.route("/students/:id").put(studentsController.update);
router.route("/students/:id").delete(studentsController.delete);

module.exports = router;
