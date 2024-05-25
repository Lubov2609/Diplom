const express = require('express');
const router = express.Router();
const resultController = require("../controllers/resultController");
const listController = require("../controllers/listController");

router.route('/group').get(resultController.groupsAll);
router.route('/group/:groupID').get(resultController.studentsAll);
router.route('/group/:groupID/:studentID').get(resultController.studentBy);

module.exports = router;