import React from "react";

const OrderPage = () => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2>Order: 1</h2>
        </div>
        <table className="table table-hover">
          <thead>
            <th />
            <th>Product ID</th>
            <th>Description</th>
            <th>Unit Price</th>
            <th>Qty</th>
            <th>Unit Total</th>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <div className="btn-group btn-group-xs" role="group">
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-minus" />
                    </button>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-plus" />
                    </button>
                  </div>
                  <p>
                    <a href="#">remove</a>
                  </p>
                </div>
              </td>
              <td>A101</td>
              <td>Screwdriver</td>
              <td>9.75</td>
              <td>10</td>
              <td>97.5</td>
            </tr>
            <tr>
              <td>
                <div>
                  <div className="btn-group btn-group-xs" role="group">
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-minus" />
                    </button>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-plus" />
                    </button>
                  </div>
                  <p>
                    <a href="#">remove</a>
                  </p>
                </div>
              </td>
              <td>A101</td>
              <td>Screwdriver</td>
              <td>9.75</td>
              <td>10</td>
              <td>97.5</td>
            </tr>
            <tr>
              <td>
                <div>
                  <div className="btn-group btn-group-xs" role="group">
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-minus" />
                    </button>
                    <button type="button" className="btn btn-default">
                      <span className="glyphicon glyphicon-plus" />
                    </button>
                  </div>
                  <p>
                    <a href="#">remove</a>
                  </p>
                </div>
              </td>
              <td>A101</td>
              <td>Screwdriver</td>
              <td>9.75</td>
              <td>10</td>
              <td>97.5</td>
            </tr>
            <tr>
              <td>
                <a href="#">Add Items</a>
              </td>
              <td />
              <td />
              <td />
              <td />
              <td />
            </tr>
          </tbody>
        </table>
        <div className="panel-footer">
          <button className="btn btn-primary inline">Place Order</button>
          <p className="text-right inline">
            <strong>Total: 292.5</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;
