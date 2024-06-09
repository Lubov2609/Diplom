const express = require('express');
const router = express.Router();
const listController = require("../controllers/listController");
router.route('/:yearID/list-group').get(listController.groupsAll);
router.route('/:yearID/list-group/:groupID').get(listController.studentsAll);
router.route('/:yearID/list-group/:groupID/:studentID').get(listController.getAll);
// router.route('/:yearID/list-group/:groupID/:studentID/edit').get(listController.);


module.exports = router;