"use client";
import React, { useEffect, useState } from "react";

const Product = () => {
  const [product, setProduct] = useState([]);
  const fatchdata = async () => {
    const data = await fetch("https://dummyjson.com/products");
    let json = await data.json();
    console.log(json.products);
    setProduct(json.products);
  };
  useEffect(() => {
    fatchdata();
  }, []);
  return (
    <div>
      <div>Product</div>
      {product.map((item) => (
        <h1 key={item.id}>{item.title}</h1>
      ))}
    </div>
  );
};

export default Product;
