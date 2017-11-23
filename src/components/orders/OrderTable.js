import React, { PropTypes } from "react";
import TableHead from "../common/TableHead";
import TableRow from "../common/TableRow";
import { Link } from "react-router";

const OrderTable = ({
  order,
  qty,
  sub_total,
  total,
  loading,
  onProcess,
  onUpdate,
  onDelete
}) => {
  return (
    <div>
      <div className="panel panel-default">
        <div className="panel-heading">
          <h2>{`Order: ${order.id}`}</h2>
        </div>
        <table className="table table-hover">
          <TableHead
            title={{
              a: "#",
              b: "Product ID",
              c: "Description",
              d: "Unit Price",
              e: "Qty",
              f: "Sub Total"
            }}
          />
          <tbody>
            {order.items.map((item, index) => {
              let button = (
                <div>
                  <div className="btn-group btn-group-xs" role="group">
                    <button
                      type="button"
                      className="btn btn-default"
                      value="-1"
                      data-id={item["product-id"]}
                      data-index={index}
                      onClick={onUpdate}
                    >
                      <span className="glyphicon glyphicon-minus" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-default"
                      value="+1"
                      data-id={item["product-id"]}
                      data-index={index}
                      onClick={onUpdate}
                    >
                      <span className="glyphicon glyphicon-plus" />
                    </button>
                  </div>
                  <p>
                    <a
                      href
                      type="button"
                      value="remove"
                      data-id={item["product-id"]}
                      data-index={index}
                      onClick={onUpdate}
                    >
                      remove
                    </a>
                  </p>
                </div>
              );
              return (
                <TableRow
                  key={item["product-id"]}
                  column={{
                    a: order.processed ? index + 1 : button,
                    b: item["product-id"],
                    c: item.description,
                    d: item["unit-price"],
                    e: qty[item["product-id"]],
                    f: `$${sub_total[item["product-id"]]}`
                  }}
                />
              );
            })}
            {!order.processed && (
              <tr>
                <td>
                  <Link to={`/products?orderId=${order.id}`}>Add items</Link>
                </td>
                <td />
                <td />
                <td />
                <td />
                <td />
              </tr>
            )}
          </tbody>
        </table>
        <div className="panel-footer">
          {!order.processed && (
            <div className="inline">
              <button
                type="button"
                onClick={onProcess}
                disabled={loading}
                className="btn btn-primary inline"
              >
                Place Order
              </button>
              &nbsp;&nbsp;
              <button
                type="button"
                onClick={onDelete}
                disabled={loading}
                className="btn btn-danger inline"
              >
                Delete Order
              </button>
            </div>
          )}
          <p className="text-right inline">
            <strong>{`Total: $${total}`}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

OrderTable.propTypes = {
  order: PropTypes.object.isRequired,
  qty: PropTypes.object.isRequired,
  sub_total: PropTypes.object.isRequired,
  total: PropTypes.string.isRequired,
  loading: PropTypes.bool,
  onProcess: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};

export default OrderTable;
