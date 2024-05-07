const express = require('express');
const router = express.Router();
const groupsController = require("../controllers/groupsController");
const group_stController = require("../controllers/groups_stController");
router.route("/groups").get(groupsController.getAll)
router.route("/groups_students").get(group_stController.getAll)

module.exports = router;
