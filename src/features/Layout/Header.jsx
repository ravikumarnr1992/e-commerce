import CartIcon from "../Cart/CartIcon";
import SearchInput from "../../UI/SearchInput";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileIcon from "../Profile/ProfileIcon";

const Header = () => {

  const {isLoggedIn} = useSelector(store => store?.login);
  const {pathname} = useLocation();

  return (
    <header className="bg-gray-600 border-gray-200 border-b border-3">
      <nav className="py-2 md:py-2">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <Link
              to="/"
              className="font-bold text-2xl text-white hover:text-blue-600"
            >
              e-Commerce
            </Link>
            <button
              className="border border-solid border-indigo-600 px-3 py-1 rounded text-indigo-600 opacity-50 hover:opacity-75 md:hidden"
              id="navbar-toggle"
            >
              <i className="fas fa-bars"></i>
            </button>

            
          </div>

          <div
            className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
            id="navbar-collapse"
          >
           {pathname === '/login' ? null : <SearchInput /> }

           {!isLoggedIn  &&  pathname !== '/login' && <Link
              to="login"
              className="p-1 pt-2 text-justify lg:px-2 text-white bg-teal-600 text-center border border-solid border-teal-500 rounded hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Login
            </Link>} 

            {isLoggedIn &&  pathname !== '/login' && <ProfileIcon />}

            <Link to="cart"
              className="flex px-1 lg:px-4 md:mx-2 text-white bg-teal-600 text-center border border-solid border-teal-500 rounded hover:bg-blue-800 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              <span className="pt-2">Cart</span> <CartIcon />
            </Link>
          
          </div>
          
        </div>
      </nav>
    </header>
  );
};
export default Header;
