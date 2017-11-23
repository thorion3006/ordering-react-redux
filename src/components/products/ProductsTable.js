import React, { PropTypes } from "react";
import TableHead from "../common/TableHead";
import TableRow from "../common/TableRow";
import { Link } from "react-router";

const ProductsTable = ({
  products,
  qty,
  price,
  total,
  loading,
  orderId,
  onUpdate,
  onSave,
  onDelete
}) => {
  return (
    <div>
      <h2>Products</h2>
      <table className="table table-hover">
        <TableHead
        title={{
            a: "",
            b: "Product ID",
            c: "Description",
            d: "Category",
            e: "Unit Price",
            f: "Sub-total"
        }}
        />
        <tbody>
          {products.map(product => {
            price[product.id] = product.price;
            let button = (
              <div>
                <div className="btn-group btn-group-xs" role="group">
                  <button
                  type="button"
                  className="btn btn-default"
                  value="-1"
                  data-id={product.id}
                  onClick={onUpdate}
                  disabled={qty[product.id] < 1 ? true : false}
                  >
                    <span className="glyphicon glyphicon-minus" />
                  </button>
                  <button type="button" className="btn btn-default">
                    {qty[product.id] ? qty[product.id] : "0"}
                  </button>
                  <button
                    type="button"
                    className="btn btn-default"
                    value="+1"
                    data-id={product.id}
                    onClick={onUpdate}
                  >
                    <span className="glyphicon glyphicon-plus" />
                  </button>
                </div>
                <p>
                  <a
                    href
                    type="button"
                    value="reset"
                    data-id={product.id}
                    onClick={onUpdate}
                  >
                    &nbsp;&nbsp;&nbsp;&nbsp;reset
                  </a>
                </p>
              </div>
            );
            return (
              <TableRow
                key={product.id}
                column={{
                  a: button,
                  b: product.id,
                  c: product.description,
                  d: product.category,
                  e: product.price,
                  f: total[product.id] > 0 ? `$${total[product.id]}` : ""
                }}
              />
            );
          })}
        </tbody>
      </table>
      <button
        type="button"
        onClick={onSave}
        disabled={loading}
        className="btn btn-default"
      >
        {orderId ? "Update order" : "Create order"}
      </button>
      &nbsp;
      {orderId && (
        <button
          type="button"
          onClick={onDelete}
          disabled={loading}
          className="btn btn-danger"
        >
          Delete order
        </button>
      )}
    </div>
  );
};

ProductsTable.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  qty: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
  price: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  orderId: PropTypes.string,
  onUpdate: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default ProductsTable;
