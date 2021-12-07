const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const params = req.query;
    for (const key of Object.keys(params)) {
      if (params[key] === "") {
        delete params[key];
      }
    }
    console.log(params);
    const products = await Product.find(params);

    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getAllProducts,
  getProduct,
};
