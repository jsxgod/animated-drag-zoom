import React from "react";
import { Header, LinkHistory, Product, Details } from "./components";

import "./sass/main.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <LinkHistory />
      <Product />
      <Details />
    </div>
  );
}

export default App;
