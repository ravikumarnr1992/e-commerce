import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./UI/Layout/Layout";
import Products from "./features/Products/Products";
import ProductDescription from "./features/Products/ProductDescription";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
         <Route index  element={<Navigate replace to="products" />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDescription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
