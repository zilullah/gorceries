import * as React from "react";
import ProductCart from "./ProductCart";
import { useAppContext } from "../context/AppContext";

const BestSeller = () => {
  const { products } = useAppContext();
  const bestSeller = products.slice(0, 5);
  return (
    <div className="mt-16">
      <p className="text-2xl md:text-3xl font-medium">Best Sellers</p>
      <div className="grid gap-6 mt-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {bestSeller.map((item: undefined, index: undefined) => (
          <ProductCart product={item} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
