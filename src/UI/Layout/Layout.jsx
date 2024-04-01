import { Outlet } from "react-router-dom";
import Products from "../../features/Products/Products";
import Footer from "./Footer";
import Header from "./Header";
import { Toaster } from "react-hot-toast";

const Layout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
        <Toaster />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
