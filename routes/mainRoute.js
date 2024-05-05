const express = require('express');
const router = express.Router();
const MainController = require("../controllers/mainController");

router.route("/").get(MainController.getAll)

module.exports = router;
