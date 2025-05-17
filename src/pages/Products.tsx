import React from "react";
import { useAppContext } from "../context/AppContext";
import ProductCart from "../components/ProductCart";

const Products = () => {
  const { products } = useAppContext();
  return (
    <div className="mt-10">
      <h1>All products</h1>
      <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {products.map((item: any, index: any) => (
          <ProductCart product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
