import React from "react";
import Products from "../components/Products.jsx";

const Disposables = ({ products }) => {
  const disposableProducts = products.filter((product) => product.category === "disposables");

  return <Products products={disposableProducts} />;
};

export default Disposables;
