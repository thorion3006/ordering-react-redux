import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <h2>Products</h2>
      <table className="table table-hover">
        <thead>
          <th />
          <th>Product ID</th>
          <th>Description</th>
          <th>Unit Price</th>
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
                    2
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
          </tr>
          <tr>
            <td>
              <div>
                <div className="btn-group btn-group-xs" role="group">
                  <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-minus" />
                  </button>
                  <button type="button" className="btn btn-default">
                    2
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
          </tr>
          <tr>
            <td>
              <div>
                <div className="btn-group btn-group-xs" role="group">
                  <button type="button" className="btn btn-default">
                    <span className="glyphicon glyphicon-minus" />
                  </button>
                  <button type="button" className="btn btn-default">
                    2
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
          </tr>
        </tbody>
      </table>
      <button className="btn btn-default">View Order</button>
    </div>
  );
};

export default ProductsPage;
