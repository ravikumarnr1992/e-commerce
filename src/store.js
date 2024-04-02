import {  configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,

} from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";

import productSlice from "./features/Products/productSlice";
import cartSlice from "./features/Cart/cartSlice";
import searchSlice from "./features/Search/searchSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  product: productSlice,
  cart: cartSlice,
  search: searchSlice
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer:  persistedReducer,
})

export const persistor = persistStore(store);


export default store;
