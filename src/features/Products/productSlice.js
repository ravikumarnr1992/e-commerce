import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  isLoading: false,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    getItems: (state, action) => {
      state.items = action.payload,
      state.isLoading = false
    },
    fetchingData: (state) => {
      state.isLoading = true;
    },
  },
});

export default productSlice.reducer;

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
