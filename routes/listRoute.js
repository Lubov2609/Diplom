const express = require('express');
const router = express.Router();
const listController = require("../controllers/listController");
const groupsController = require("../controllers/groupsController");
router.route('/:yearID/list-group').get(listController.groupsAll);
router.route('/:yearID/list-group/:groupID').get(listController.studentsAll);
router.route('/:yearID/list-group/:groupID/:studentID').get(listController.getAll);
router.route("/:yearID/list-group/:groupID/:studentID/new").get(listController.newList);
router.route("/:yearID/list-group/:groupID/:studentID").post(listController.create);
router.route('/:yearID/list-group/:groupID/:studentID/:id/edit').get(listController.getById);
router.route("/:yearID/list-group/:groupID/:studentID/:id").put(listController.update);


module.exports = router;