const express = require('express');
const router = express.Router();
const usersController = require("../controllers/usersController");
const studentsController = require("../controllers/studentsController");

router.route("/users/").get(usersController.getAll);
router.route("/users/new").get(usersController.newUser);
router.route("/users").post(usersController.create);
router.route("/users/:id/edit").get(usersController.getById);
router.route("/users/:id").put(usersController.update);
router.route("/users/:id").delete(usersController.delete);

module.exports = router;
