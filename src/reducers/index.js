import { combineReducers } from "redux";
import customers from "./customerReducer";
import products from "./productReducer";
import orders from "./orderReducer";
import session from "./sessionReducer";
import { loadingBarReducer } from "react-redux-loading-bar";

const rootReducer = combineReducers({
  customers,
  products,
  orders,
  session,
  loadingBar: loadingBarReducer
});

export default rootReducer;
