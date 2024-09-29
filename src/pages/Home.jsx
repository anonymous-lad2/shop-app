import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";

export const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  async function fetchData() {
    try {
      setLoading(true);
      const response = await fetch(API_URL);
      const data = await response.json();
      console.log(data);
      setProducts(data);
    } catch (Error) {
      console.log("Error");
      setProducts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <div>Hello</div>
        ) : 
        products.length > 0 ? (
            <div>
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
        ) : (
        <div>No product found</div>
        )}
     </div>
  );
};
