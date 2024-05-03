const db = require('../db/db');

module.exports = roleService = {
    getRoles: async () => {
        const roles = await db("roles")
        return roles;
    },
};

// var express = require('express');
// var router = express.Router();
//
// var MainController = require("../controllers/main");
// const {getGroup} = require("../controllers/main");
// // var Services = require("../services/checkAuth");
//
// router.get("/", MainController.getRoles);
// module.exports = router;