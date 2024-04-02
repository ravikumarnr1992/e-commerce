import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import cartReducer from "./features/Cart/cartSlice";
import productReducer from "./features/Products/productSlice";
import { thunk } from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import searchReducer from "./features/Search/searchSlice";

const persistConfig = {
    key: 'root',
    storage
  };
const rootReducer = combineReducers({
    product: productReducer,
    cart: cartReducer,
    search: searchReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

//For redux dev tools to work
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store);

export default store;