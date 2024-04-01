const initialStateProduct = {
  items: [],
  isLoading: false,
};

export default function productReducer(state = initialStateProduct, action) {
  switch (action.type) {
    case "product/getItems":
      return {
        ...state,
        items: action.payload,
        isLoading: false
      };
    case "product/fetchingData":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}

export function getItems() {
  return async function (dispatch) {
    dispatch({ type: "product/fetchingData" });
    //API Call
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    const dataproducts = data.products;

    // dispatch  action
    dispatch({ type: "product/getItems", payload: dataproducts });
  };
}
