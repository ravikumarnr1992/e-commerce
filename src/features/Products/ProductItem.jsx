import { useDispatch } from "react-redux";
import { addItemToCart } from "../Cart/cartSlice";
import Tooltip from "../../UI/Tooltip";
import { Link } from "react-router-dom";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleItemClick = (item) => {
    dispatch(addItemToCart(item));
  };

  return (
    <div className="group border-gray-100">
      <Link to={`${product.id}`}>
        <div className="w-full overflow-hidden rounded-lg xl:aspect-h-6 xl:aspect-w-6">
          <img
            src={product.images[0]}
            alt={product.imageAlt}
            className="h-32 w-full object-fill object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-2 text-md text-black">{product.title}</h3>

        <Tooltip message={product.description}>
          <p className="line-clamp-2 text-sm text-gray-700">
            {product.description}
          </p>
        </Tooltip>

        <p className="mt-1 text-lg font-medium text-gray-900">
          ${product.price}
        </p>
      </Link>
      <div className="mt-1 flex items-center justify-center">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-1 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={() => handleItemClick(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};
export default ProductItem;
