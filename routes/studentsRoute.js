const express = require('express');
const router = express.Router();
const studentsController = require("../controllers/studentsController");

router.route('/group/students/:groupID').get(studentsController.studentsAll);
router.route('/group').get(studentsController.groupsAll);

module.exports = router;
