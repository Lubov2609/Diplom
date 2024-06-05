const express = require('express');
const router = express.Router();
const resultController = require("../controllers/resultController");
const listController = require("../controllers/listController");

router.route('/:yearID/group').get(resultController.groupsAll);
router.route('/:yearID/group/:groupID').get(resultController.studentsAll);
router.route('/:yearID/group/:groupID/:studentID').get(resultController.studentBy);

module.exports = router;