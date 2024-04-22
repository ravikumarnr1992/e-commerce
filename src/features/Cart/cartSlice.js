import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItems: (state, action) => {
      const itemInCart = state?.cartItems?.find(
        (item) => item.id === action.payload.id
      );
      if (itemInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity === undefined ? 1 : item.quantity + 1,
            }
            : item
        );
        state.totalPrice = state.totalPrice + action.payload.price;
      } else {
        (state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: 1 },
        ]),
          (state.totalPrice = state.totalPrice + action.payload.price);
      }
    },

    removeItems: (state, action) => {
      const item1 = state?.cartItems?.find(
        (product) => product.id === action.payload.id
      );

      if (item1.quantity > 1) {
        (state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: item.quantity - 1,
            }
            : item
        )),
          (state.totalPrice = state.totalPrice - action.payload.price);
      } else {
        (state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload.id
        )),
          (state.totalPrice = state.totalPrice - action.payload.price);
      }
    },

    clearItems: (state, action) => {
      (state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      )),
        (state.totalPrice =
          state.totalPrice - action.payload.price * action.payload.quantity);
    },

    increaseQuantity: (state, action) => {
      const itenInCart = state?.cartItems?.find(
        (item) => item.id === action.payload.id
      );

      if (itenInCart) {
        state.cartItems = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? {
              ...item,
              quantity: parseInt(item.quantity + action.payload.quantity),
            }
            : item
        ),
          state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity
      }

      else {
        state.cartItems = [
          ...state.cartItems,
          { ...action.payload, quantity: action.payload.quantity },
        ],
          state.totalPrice = state.totalPrice + action.payload.price * action.payload.quantity
      };
    },

    clearCart: (state) => {
      state.cartItems = []
      state.totalPrice = 0
    }


  },
});

export const { addItems, removeItems, clearItems, increaseQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
