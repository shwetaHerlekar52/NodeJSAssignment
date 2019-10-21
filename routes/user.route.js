const express = require("express");
const router = express.Router();

const userController = require("../controllers/user.controller");

router.post("/add", userController.add);

router.put("/modify/:email", userController.modify);

router.get("/get/:email", userController.get);

router.delete("/delete/:email", userController.delete);

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.delete("/logout", userController.logout);

module.exports = router;
