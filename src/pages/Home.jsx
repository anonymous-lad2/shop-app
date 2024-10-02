import React, { useEffect, useState } from "react";
import { Product } from "../components/Product";
import { Spinner } from '../components/Spinner'

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
        <div><Spinner /></div>
        ) : 
        products.length > 0 ? (
            <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
        ) : (
        <div className="flex justify-center items-center">No product found</div>
        )}
     </div>
  );
};
