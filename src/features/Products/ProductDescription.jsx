import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { increaseQuantity } from "../Cart/cartSlice";

const ProductDescription = () => {
  const { items } = useSelector((store) => store?.product);

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();

  const dispatch = useDispatch();

  const currentProduct = items?.find((product) => product.id === parseInt(id));

  const formHandler = (e) => {
    e.preventDefault();
    setQuantity(e.target.value);
    // console.log({ ...currentProduct, quantity })
    dispatch(increaseQuantity({ ...currentProduct, quantity }));
    setQuantity('');
  };

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 text-gray-400 text-sm">
          <Link to="/" className="hover:underline hover:text-gray-600">
            Home
          </Link>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <Link to="/" className="hover:underline hover:text-gray-600">
            Products
          </Link>
          <span>
            <svg
              className="h-5 w-5 leading-none text-gray-300"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </span>
          <span>{currentProduct.title}</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div x-data="{ image: 1 }" x-cloak="true">
              <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                <img
                  src={currentProduct.images[0]}
                  className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center"
                />
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {currentProduct.title}
            </h2>
            <p className="text-gray-500 text-sm">
              <a href="#" className="text-indigo-600 hover:underline">
                {currentProduct.brand}
              </a>
            </p>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-indigo-400 mr-1 mt-1">$</span>
                  <span className="font-bold text-indigo-600 text-3xl">
                    {currentProduct.price}
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">
                  Save {currentProduct.discountPercentage}%
                </p>
                <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
              </div>
            </div>

            <p className="text-gray-500">{currentProduct.description}</p>

            <div className="flex py-4 space-x-4">
              <div className="flex items-center border-gray-100">
                <form className="max-w-sm mx-auto" onSubmit={formHandler}>
                  <label
                    htmlFor="small"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Quantity
                  </label>
                  <select
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    id="small"
                    className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>

                  <div>
                    <button
                      type="submit"
                      className="h-12 px-3 py-1 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                    >
                      Add to Cart
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDescription;
