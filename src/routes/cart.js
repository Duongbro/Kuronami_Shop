const express = require("express");
const router = express.Router();
const cartController = require("../app/controllers/cartcontroller");


router.use("/delete", cartController.deletecart); 

router.use("/:addcarrt", cartController.addcart); 

router.use("/", cartController.index); 

module.exports = router;
