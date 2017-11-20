import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    id: "1",
    name: "Coca Cola",
    since: "2014-06-28",
    revenue: "492.12"
  },
  {
    id: "2",
    name: "Teamleader",
    since: "2015-01-15",
    revenue: "1505.95"
  },
  {
    id: "3",
    name: "Jeroen De Wit",
    since: "2016-02-11",
    revenue: "0.00"
  }
];

class CustomerApi {
  static getAllCustomers() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], customers));
      }, delay);
    });
  }

  static createCustomer(customer) {
    customer = Object.assign({}, customer);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minNameLength = 3;
        if (customer.name.length < minNameLength) {
          reject(`Name must be at least ${minNameLength} characters.`);
        }

        customer.id = customers.length + 1;
        customer.since = new Date().toISOString().slice(0, 10);
        customer.revenue = "0.00";
        customers.push(customer);

        resolve(customer);
      }, delay);
    });
  }

  static updateCustomer(customer) {
    customer = Object.assign({}, customer);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server-side validation
        const minNameLength = 3;
        if (customer.name.length < minNameLength) {
          reject(`Name must be at least ${minNameLength} characters.`);
        }
        customers.splice(customer.id - 1, 1, customer);

        resolve(customer);
      }, delay);
    });
  }

  static deleteCustomer(customerId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        customers.splice(customerId - 1, 1);
        resolve();
      }, delay);
    });
  }
}

export default CustomerApi;
