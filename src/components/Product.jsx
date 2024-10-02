import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, remove } from "../redux/Slices/CartSlice";
import toast from "react-hot-toast";

export const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Added to cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Removed from cart");
  };

  return (
    <div
      className="flex flex-col items-center justify-between 
      hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-xl"
    >
      <div>
        <p className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">
          {product.title}
        </p>
      </div>

      <div>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>

      <div className="h-[180px]">
        <img src={product.image} className="h-full w-full " />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <p className="text-green-600 font-semibold">${product.price}</p>

        {cart.some((p) => p.id == product.id) ? (
          <button
            onClick={removeFromCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
          >
            Remove item
          </button>
        ) : (
          <button
            onClick={addToCart}
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
              text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition duration-300 ease-in"
          >
            Add to cart
          </button>
        )}
      </div>
    </div>
  );
};
