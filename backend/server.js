require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectToDatabase = require("./config/db");
const productRoutes = require("./routes/productRoutes");

connectToDatabase();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));