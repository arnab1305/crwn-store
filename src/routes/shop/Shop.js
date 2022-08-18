import React, { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import { ProductCard } from "../../components/product-card/ProductCard";
import './Shop.scss'

export const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard product={product}></ProductCard>
      ))}
    </div>
  );
};
