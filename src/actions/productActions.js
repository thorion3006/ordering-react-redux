import * as types from "../constants/actionTypes";
import productApi from "../api/mockProductApi";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function loadProductsSuccess(products) {
  return { type: types.LOAD_PRODUCTS_SUCCESS, products };
}

export function loadProducts() {
  return dispatch => {
    dispatch(showLoading());
    return productApi
      .getAllProducts()
      .then(products => {
        dispatch(hideLoading());
        dispatch(loadProductsSuccess(products));
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}
