import React from "react";
import { Header } from "./components";
import { Route, Routes, useLocation } from "react-router-dom";
import { CartPage, HomePage, ProductPage, ProductsPage } from "./pages";

import "./sass/main.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
