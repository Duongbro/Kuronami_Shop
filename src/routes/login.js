const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/loginController");


router.post("/", loginController.login);

router.use("/:forgot", loginController.show)

router.get("/", loginController.index);


module.exports = router;