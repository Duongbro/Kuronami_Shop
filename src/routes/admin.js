const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer();
const adminController = require("../app/controllers/AdminController");

// router.use("/product/:delete", adminController.deleteproduct);

// router.get("/oders/accept", adminController.accept);
// router.get("/oders/detail", adminController.odersdetail);
// router.use("/oders", adminController.oders);

router.get("/product/product_delete", adminController.product_delete);

router.post("/product_add", upload.single("product_img"), adminController.product_add);

router.use("/product_add_load", adminController.load_add_product);

router.use("/product", adminController.product);

router.get("/categories/categories_delete", adminController.categories_delete);

router.use("/categories_add", adminController.categories_add);

router.use("/categories", adminController.categories);

router.use("/", adminController.index);


module.exports = router;
