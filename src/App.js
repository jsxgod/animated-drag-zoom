import React from "react";
import { Header } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CartPage, HomePage, ProductPage, ProductsPage } from "./pages";

import "./sass/main.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
