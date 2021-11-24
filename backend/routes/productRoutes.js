const express = require("express");
const router = express.Router();

const { getAllProducts, getProduct } = require("../controller/productControllers");

//@desc GET all products from the database
//@route GET /api/products
//@access Public
router.get("/", getAllProducts);

//@desc GET a product with specified id from the database
//@route GET /api/products/:id
//@access Public
router.get("/:id", getProduct);

module.exports = router;