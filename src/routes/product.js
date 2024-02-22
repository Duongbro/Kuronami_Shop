const express = require("express");
const router = express.Router();

const productController = require("../app/controllers/ProductController");


// router.use("/:product/:addcart", productController.addcart);

router.use("/:product", productController.product_detail);

router.use("/", productController.product);


module.exports = router;
