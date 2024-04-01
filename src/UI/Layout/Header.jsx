import CartIcon from "../../features/Cart/CartIcon";
import SearchInput from "../SearchInput";
import { useState } from "react";
import Cart from "../../features/Cart/Cart";
import Modal from "../../UI/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <header className="bg-gray-100 border-gray-200 border-b border-3">
      <nav className="py-2 md:py-3">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="font-bold text-2xl text-indigo-600 hover:text-blue-600"
            >
              e-Commerce
            </a>
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
            <SearchInput />

            <a
              href="#"
              className="p-1 pt-3 text-justify lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-500 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              Login
            </a>

            <a
              onClick={() => {
                setShowModal((prev) => !prev);
              }}
              className="flex p-1 lg:px-4 md:mx-2 text-indigo-600 text-center border border-solid border-indigo-500 rounded hover:bg-blue-600 hover:text-white transition-colors duration-300 mt-1 md:mt-0 md:ml-1"
            >
              <span className="pt-2">Cart</span> <CartIcon />
            </a>
            <div>
              <Modal
                shouldShow={showModal}
                onRequestClose={() => {
                  setShowModal((prev) => !prev);
                }}
              >
                <Cart />
              </Modal>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default Header;
