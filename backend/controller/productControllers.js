const Product = require("../models/Product");

const productsOrder = ["SkateBoard", "Deck", "Wheels", "Truck", "Hardware"];

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
    const productTypeOrder = [
      "SkateBoard",
      "Deck",
      "Wheels",
      "Truck",
      "Hardware",
    ];
    const fieldSorter = (fields) => (a, b) =>
      fields
        .map((field) => {
          let dir = 1;
          if (field[0] === "-") {
            dir = -1;
            field = field.substring(1);
          }
          if (field === "product_type") {
            return productTypeOrder.indexOf(a[field]) >
              productTypeOrder.indexOf(b[field])
              ? dir
              : productTypeOrder.indexOf(a[field]) <
                productTypeOrder.indexOf(b[field])
              ? -dir
              : 0;
          } else {
            return a[field] > b[field] ? dir : a[field] < b[field] ? -dir : 0;
          }
        })
        .reduce((p, n) => (p ? p : n), 0);
    products.sort(fieldSorter(["product_type", "name"]));
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
