const express = require('express');
const router = express.Router();
const groupsController = require("../controllers/groupsController");
const studentsController = require("../controllers/studentsController");
const yearsController = require("../controllers/yearsController");

router.route("/groups").get(groupsController.groupsAll)
router.route("/groups/new").get(groupsController.newGroup);
router.route("/groups").post(groupsController.create);

router.route("/groups/:id/edit").get(groupsController.getById);
router.route("/groups/:id").put(groupsController.update);
router.route("/groups/:id").delete(groupsController.delete);

module.exports = router;
