import axios from "axios";
import React, { useEffect, useState } from "react";
import Spinner from "../../UI/Spinner";

const ProductsDemo = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      const data = await axios.get("http://localhost:5000/productDetails");
      console.log("data", data);
      const dataProducts = data?.data?.products;
      console.log(dataProducts);
      setProducts(dataProducts);
    };

    fetchProducts();
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <Spinner />}
      {products?.map((product) => (
        <ul>
          <li key={product.id}>{product.title}</li>
          <li>{product.description}</li>
          <li>{product.price}</li>
          <li>{product.discountPercentage}</li>
        </ul>
      ))}
    </div>
  );
};

export default ProductsDemo;
