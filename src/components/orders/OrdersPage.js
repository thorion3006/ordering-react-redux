import React from "react";

const OrdersPage = () => {
  return (
    <div>
      <div>
        <h2>Pending Orders</h2>
        <table className="table table-hover">
          <thead>
            <th>#</th>
            <th>Items</th>
            <th>Total</th>
            <th />
            <th />
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
              <td>
                <button className="btn btn-primary">Place Order</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
              <td>
                <button className="btn btn-primary">Place Order</button>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
              <td>
                <button className="btn btn-primary">Place Order</button>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
              <td>
                <button className="btn btn-primary">Place Order</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div>
        <h2>Past Orders</h2>
        <table className="table table-hover">
          <thead>
            <th>#</th>
            <th>Items</th>
            <th>Total</th>
            <th />
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>Screwdriver</td>
              <td>49.90</td>
              <td>
                <a href="#">View Details</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrdersPage;
