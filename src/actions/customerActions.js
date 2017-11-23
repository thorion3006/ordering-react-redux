import * as types from "../constants/actionTypes";
import customerApi from "../api/mockCustomerApi";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function loadCustomersSuccess(customers) {
  return { type: types.LOAD_CUSTOMERS_SUCCESS, customers };
}

export function loadCustomers() {
  return dispatch => {
    dispatch(showLoading());
    return customerApi
      .getAllCustomers()
      .then(customers => {
        dispatch(hideLoading());
        dispatch(loadCustomersSuccess(customers));
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}
