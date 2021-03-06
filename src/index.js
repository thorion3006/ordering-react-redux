/* eslint-disable import/default */
import "babel-polyfill";
import React from "react";
import { render } from "react-dom";
import { Router, browserHistory } from "react-router";
import routes from "./routes";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import { loadCustomers } from "./actions/customerActions";
import { loadProducts } from "./actions/productActions";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/toastr/build/toastr.min.css";
import "./styles/styles.css";

const store = configureStore();
store.dispatch(loadCustomers());
store.dispatch(loadProducts());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
