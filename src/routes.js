import React from "react";
import { Route, IndexRoute } from "react-router";
import App from "./containers/App";
import CustomersPage from "./containers/customers/CustomersPage";
import ProductsPage from "./containers/products/ProductsPage";
import OrdersPage from "./containers/orders/OrdersPage";
import OrderPage from "./containers/orders/OrderPage";

export default (
  <Route path="/" component={App}>
    <IndexRoute component={CustomersPage} />
    <Route path="products" component={ProductsPage} />
    <Route path="orders" component={OrdersPage} />
    <Route path="order/:id" component={OrderPage} />
  </Route>
);
