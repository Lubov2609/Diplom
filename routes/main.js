var express = require('express');
var router = express.Router();

var MainController = require("../controllers/main");
// var Services = require("../services/checkAuth");

router.get("/", MainController.getRoles);

module.exports = router;
