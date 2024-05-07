const express = require('express');
const router = express.Router();
const groupsController = require("../controllers/groupsController");
router.route("/groups").get(groupsController.groupsAll)

module.exports = router;
