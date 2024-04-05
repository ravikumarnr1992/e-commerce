import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "./features/Layout/Layout";
import Products from "./features/Products/Products";
import ProductDescription from "./features/Products/ProductDescription";
import Login from "./features/Login/login";
import UserProfile from "./features/Profile/UserProfile";
import Cart from "./features/Cart/Cart";
import OrderConfirmation from "./features/Order/OrderConfirmation";
import ProtectedRoute from "./UI/ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} >
         <Route index  element={<Navigate replace to="products" />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductDescription />} />
          <Route path="cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path='login' element={<Login />} />
          <Route path='userprofile' element={<UserProfile />} />
          <Route path='orderConfirmation' element={<OrderConfirmation />} />
        </Route> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
