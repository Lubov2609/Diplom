const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");

router.route("/users/").get(usersController.getAll)

module.exports = router;
