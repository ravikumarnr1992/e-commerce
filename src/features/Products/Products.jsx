import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getItems } from "./productSlice";
import ProductItem from "./ProductItem";
import Spinner from "../../UI/Spinner";
import useDebounce from "../../hooks/useDebounce";

const Products = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((store) => store.product);

  const { searchValue } = useSelector((store) => store?.search);

  const debouncedSearchValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    dispatch(getItems());
  }, []);

  const filteredItems =
    debouncedSearchValue === ""
      ? items
      : items?.filter((item) => {
          if (
            item.title
              .toLowerCase()
              .startsWith(debouncedSearchValue?.toLowerCase())
          ) {
            return item;
          }
        });

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-6 py-2 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-6">
          {isLoading && <Spinner />}
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {filteredItems?.map((product) => (
              <ProductItem product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Products;
