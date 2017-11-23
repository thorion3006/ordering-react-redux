import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const orders = [
  {
    id: "1",
    "customer-id": "1",
    items: [
      {
        "product-id": "B102",
        quantity: "10",
        "unit-price": "4.99",
        total: "49.90"
      }
    ],
    total: "49.90"
  },
  {
    id: "2",
    "customer-id": "2",
    items: [
      {
        "product-id": "B102",
        quantity: "5",
        "unit-price": "4.99",
        total: "24.95"
      }
    ],
    total: "24.95"
  },
  {
    id: "3",
    "customer-id": "3",
    items: [
      {
        "product-id": "A101",
        quantity: "2",
        "unit-price": "9.75",
        total: "19.50"
      },
      {
        "product-id": "A102",
        quantity: "1",
        "unit-price": "49.50",
        total: "49.50"
      }
    ],
    total: "69.00"
  }
];

class OrderApi {
  static getAllOrders(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const myOrders = orders.filter(
          order => order["customer-id"] == customerId
        );
        resolve(Object.assign([], myOrders));
      }, delay);
    });
  }

  static createOrder(order) {
    order = Object.assign({}, order);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemsLength = 1;
        if (order.items.length < minItemsLength) {
          reject("Items can not be empty");
        }
        order.id = (orders.length + 1).toString();
        orders.push(order);
        resolve(order);
      }, delay);
    });
  }

  static updateOrder(order) {
    order = Object.assign({}, order);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemsLength = 1;
        if (order.items.length < minItemsLength) {
          reject("Items can not be empty");
        }

        let orderIndex;
        orders.map((iorder, index) => {
          if (iorder.id === order.id) {
            orderIndex = index;
          }
        });
        orders.splice(orderIndex, 1, order);
        resolve(order);
      }, delay);
    });
  }

  static processOrder(order) {
    order = Object.assign({}, order);
    order.processed = true;
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minItemsLength = 1;
        if (order.items.length < minItemsLength) {
          reject("Items can not be empty");
        }
        let orderIndex;
        orders.map((iorder, index) => {
          if (iorder.id === order.id) {
            orderIndex = index;
          }
        });
        orders.splice(orderIndex, 1, order);
        resolve(order);
      }, delay);
    });
  }

  static deleteOrder(orderId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let orderIndex;
        orders.map((order, index) => {
          if (order.id === orderId) {
            orderIndex = index;
          }
        });
        orders.splice(orderIndex, 1);
        resolve(orderId);
      }, delay);
    });
  }
}

export default OrderApi;
