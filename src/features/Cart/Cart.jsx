import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";


const Cart = () => {

  const { totalPrice, cartItems } = useSelector((store) => store?.cart);

  return (
    <>
        <div className="justify-center items-center pt-2 mt-3s">
          <h1 className="mb-2 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {cartItems?.map((item) => (
                <CartItem item={item} key={item.id} />
              ))}
            </div>

            {cartItems?.length > 0 ? (
              <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">${totalPrice}</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-700">Shipping</p>
                  <p className="text-gray-700">$4.99</p>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold">Total</p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold">
                      $ {totalPrice + 4.99} USD
                    </p>
                    <p className="text-sm text-gray-700">including VAT</p>
                  </div>
                </div>
                <Link
                  to="/orderConfirmation"
                  className="mt-6 p-3 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600"
                >
                  Check out
                </Link>
              </div>
            ) : null}
          </div>
          {cartItems?.length === 0 && (
            <div className="text-center py-10 text-lg">
              <p className="py-10">No items in the cart, Please add some items. </p>
            </div>
          )}
         
        </div>
    </>
  );
};

export default Cart;
