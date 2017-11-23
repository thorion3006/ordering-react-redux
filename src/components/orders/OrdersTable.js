import React, { PropTypes } from "react";
import TableHead from "../common/TableHead";
import TableRow from "../common/TableRow";
import { Link } from "react-router";

const OrdersTable = ({
  orders,
  title,
  loading,
  show_delete_order,
  show_place_order,
  onDelete,
  onProcess
}) => {
  return (
    <table className="table table-hover">
      <TableHead title={title} />
      <tbody>
        {orders.map(order => {
          let delete_order, place_order;
          if (show_delete_order) {
            delete_order = (
              <button
                type="button"
                onClick={onDelete}
                data-id={order.id}
                className="btn btn-danger"
                disabled={loading}
              >
                Delete order
              </button>
            );
          }
          if (show_place_order) {
            place_order = (
              <button
                type="button"
                onClick={onProcess}
                data-id={order.id}
                className="btn btn-primary"
                disabled={loading}
              >
                Place order
              </button>
            );
          }
          let items = [];
          order.items.map(item => items.push(item["product-id"]));
          items = items.join(", ");
          return (
            <TableRow
              key={order.id}
              column={{
                a: <Link to={`/order/${order.id}`}>{order.id}</Link>,
                b: items,
                c: order.total,
                d: delete_order,
                e: place_order
              }}
            />
          );
        })}
      </tbody>
    </table>
  );
};

OrdersTable.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.object.isRequired,
  show_delete_order: PropTypes.bool,
  show_place_order: PropTypes.bool,
  loading: PropTypes.bool,
  onDelete: PropTypes.func,
  onProcess: PropTypes.func
};

export default OrdersTable;
