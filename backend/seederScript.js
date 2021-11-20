require("dotenv").config();

const productsData = require("./data/products");
const connectToDatabase = require('./config/db');
const Product = require("./models/Product");

connectToDatabase();

const importData = async () => {
  try {
    await Product.deleteMany({})

    await Product.insertMany(productsData);

    console.log("Data Imported Successfully");

    process.exit();
  } catch (error) {
    console.error("Error while importing data to the database, ", error);

    process.exit(1);
    
  }
}

importData();