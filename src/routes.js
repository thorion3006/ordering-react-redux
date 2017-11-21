import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./components/App";
import CustomersPage from "./components/customers/CustomersPage";
import ProductsPage from "./components/products/ProductsPage";
import OrdersPage from "./components/orders/OrdersPage";
import OrderPage from "./components/orders/OrderPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CustomersPage} />
    <Route path="products" component={ProductsPage} />
    <Route path="orders" component={OrdersPage} />
    <Route path="order/:id" component={OrderPage} />
  </Route>
);
