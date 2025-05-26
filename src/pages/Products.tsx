import React, { useEffect, useMemo } from "react";
import { useAppContext } from "../context/AppContext";
import ProductCart from "../components/ProductCart";
import { useParams } from "react-router-dom";

const Products = () => {
  const { productSearch, setCategoryProduct, productCategory } =
    useAppContext();
  const { category } = useParams();
  const productList = useMemo(() => {
    return category !== undefined ? productCategory : productSearch;
  }, [category, productCategory, productSearch]);

  useEffect(() => {
    if (category) {
      setCategoryProduct(category);
    }
  }, [category, setCategoryProduct]);

  return (
    <div className="mt-10">
      <div className="flex flex-col items-end w-max">
        <p className="text-2xl font-medium uppercase">All products</p>
        <div className="bg-primary w-16 h-0.5 rounded-full" />
      </div>
      <div className="mt-16 grid gap-6 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {productList.map((item: any, index: any) => (
          <ProductCart product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
