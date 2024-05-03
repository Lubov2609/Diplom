var express = require('express');
var router = express.Router();

var MainController = require("../controllers/main");


router.route("/").get(MainController.getRoles)
// var Services = require("../services/checkAuth");

// router.get("/", MainController.getRoles);
module.exports = router;
