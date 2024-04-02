
const initialState = {
  cartItems: [],
  totalPrice: 0,
};

export default function cartReducer(state = initialState, action) {
    switch (action.type) {
      case "cart/addItems":
        const item = state?.cartItems?.find(
          (item) => item.id === action.payload.id
        );
  
        if (item) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity === undefined ? 1 : item.quantity + 1,
                  }
                : item
            ),
            totalPrice: state.totalPrice + action.payload.price,
          };
        }
  
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          totalPrice: state.totalPrice + action.payload.price,
        };
  
      case "cart/removeItems":
        const item1 = state?.cartItems?.find(
          (product) => product.id === action.payload.id
        );
  
        if (item1.quantity > 1) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: item.quantity - 1,
                  }
                : item
            ),
            totalPrice: state.totalPrice - action.payload.price,
          };
        }
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
          totalPrice: state.totalPrice - action.payload.price,
        };
      case "cart/clearItems":
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.id !== action.payload.id
          ),
          totalPrice:
            state.totalPrice - action.payload.price * action.payload.quantity,
        };
      case "cart/increaseQuantity":
        const item3 = state?.cartItems?.find(
          (item) => item.id === action.payload.id
        );
  
        if (item3) {
          return {
            ...state,
            cartItems: state.cartItems.map((item) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    quantity: parseInt(item.quantity + action.payload.quantity),
                  }
                : item
            ),
            totalPrice:
              state.totalPrice + action.payload.price * action.payload.quantity,
          };
        }
  
        return {
          ...state,
          cartItems: [
            ...state.cartItems,
            { ...action.payload, quantity: action.payload.quantity },
          ],
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.quantity,
        };
  
      default:
        return state;
    }
  }

  export function addItemToCart(selectedProduct) {
    toast.success("Item added to cart successfully...");
    return { type: "cart/addItems", payload: selectedProduct };
  }
  
  export function removeItemFromCart(selectedProduct) {
    return { type: "cart/removeItems", payload: selectedProduct };
  }
  
  export function clearItemFromCart(selectedProduct) {
    const itemsinLs = JSON.parse(localStorage.getItem("persist:root"));
    console.log(JSON.parse(itemsinLs["cart"]));
    return { type: "cart/clearItems", payload: selectedProduct };
  }
  
  export function increaseQuantity(selectedQuantity) {
    toast.success("Item added to cart successfully...");
    return { type: "cart/increaseQuantity", payload: selectedQuantity };
  }