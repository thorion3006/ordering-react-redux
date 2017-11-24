/* eslint-disable no-console */
import * as types from "../constants/actionTypes";
import orderApi from "../api/mockOrderApi";
import { showLoading, hideLoading } from "react-redux-loading-bar";

export function loadOrdersSuccess(orders) {
  return { type: types.LOAD_ORDERS_SUCCESS, orders };
}

export function createOrderSuccess(order) {
  return { type: types.CREATE_ORDER_SUCCESS, order };
}

export function updateOrderSuccess(order) {
  return { type: types.UPDATE_ORDER_SUCCESS, order };
}

export function processOrderSuccess(order) {
  return { type: types.PROCESS_ORDER_SUCCESS, order };
}

export function deleteOrderSuccess(orderId) {
  return { type: types.DELETE_ORDER_SUCCESS, orderId };
}

export function loadOrders(customerId) {
  return dispatch => {
    dispatch(showLoading());
    return orderApi
      .getAllOrders(customerId)
      .then(orders => {
        dispatch(hideLoading());
        dispatch(loadOrdersSuccess(orders));
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}

export function createOrder(order) {
  return dispatch => {
    dispatch(showLoading());
    return orderApi
      .createOrder(order)
      .then(order => {
        dispatch(hideLoading());
        dispatch(createOrderSuccess(order));
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}

export function updateOrder(order) {
  return dispatch => {
    dispatch(showLoading());
    return orderApi
      .updateOrder(order)
      .then(order => {
        dispatch(hideLoading());
        dispatch(updateOrderSuccess(order));
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}

export function processOrder(order) {
  return dispatch => {
    dispatch(showLoading());
    return orderApi
      .processOrder(order)
      .then(order => {
        dispatch(hideLoading());
        dispatch(processOrderSuccess(order));
        console.log(`Order: ${order.id} processed successfully`);
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}

export function deleteOrder(orderId) {
  return dispatch => {
    dispatch(showLoading());
    return orderApi
      .deleteOrder(orderId)
      .then(orderId => {
        dispatch(hideLoading());
        dispatch(deleteOrderSuccess(orderId));
      })
      .catch(error => {
        dispatch(hideLoading());
        throw error;
      });
  };
}
