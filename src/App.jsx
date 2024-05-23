import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Layout from "./features/Layout/Layout";
import Products from "./features/Products/Products";
import ProductDescription from "./features/Products/ProductDescription";
import Login from "./features/Login/login";
import UserProfile from "./features/Profile/UserProfile";
import Cart from "./features/Cart/Cart";
import OrderConfirmation from "./features/Order/OrderConfirmation";
import ProtectedRoute from "./UI/ProtectedRoute";
import UpdateProfile from "./features/Profile/UpdateProfile";
import CreateUser from "./features/User/CreateUser";
import ProductsDemo from "./features/Products/ProductsDemo";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Navigate replace to="products" />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:id" element={<ProductDescription />} />
            <Route path="productsDemo" element={<ProductsDemo />} />
            <Route
              path="cart"
              element={
                <ProtectedRoute>
                  <Cart />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="userprofile" element={<UserProfile />} />
            <Route path="orderConfirmation" element={<OrderConfirmation />} />
            <Route path="updateProfile" element={<UpdateProfile />} />
            <Route path="createUser" element={<CreateUser />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
