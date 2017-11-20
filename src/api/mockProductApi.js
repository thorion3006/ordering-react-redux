import delay from "./delay";

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const products = [
  {
    id: "A101",
    description: "Screwdriver",
    category: "1",
    price: "9.75"
  },
  {
    id: "A102",
    description: "Electric screwdriver",
    category: "1",
    price: "49.50"
  },
  {
    id: "B101",
    description: "Basic on-off switch",
    category: "2",
    price: "4.99"
  },
  {
    id: "B102",
    description: "Press button",
    category: "2",
    price: "4.99"
  },
  {
    id: "B103",
    description: "Switch with motion detector",
    category: "2",
    price: "12.95"
  }
];

class ProductApi {
  static getAllProducts() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], products));
      }, delay);
    });
  }
}

export default ProductApi;
