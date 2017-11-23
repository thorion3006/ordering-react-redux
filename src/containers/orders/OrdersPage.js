import React, { PropTypes } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../actions/orderActions";
import OrdersTable from "../../components/orders/OrdersTable";
import toastr from "toastr";

class OrdersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [...props.orders],
      loading: false
    };
    this.onDelete = this.onDelete.bind(this);
    this.onProcess = this.onProcess.bind(this);
  }
  componentWillMount() {
    if (!("id" in this.props.session)) {
      toastr.error("Choose a customer first");
      this.props.router.push("/");
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.orders != nextProps.orders) {
      this.setState({ orders: [...nextProps.orders] });
    }
  }
  pendingOrders() {
    return this.state.orders.filter(order => {
      return order.processed !== true;
    });
  }

  pastOrders() {
    return this.state.orders.filter(order => {
      return order.processed === true;
    });
  }

  onDelete(event) {
    const orderId = event.target.dataset.id;
    this.setState({ loading: true });
    this.props.actions
      .deleteOrder(orderId)
      .then(() => {
        toastr.success(`Order: ${orderId} deleted.`);
        this.setState({ orders: [...this.props.orders], loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        toastr.error(error);
      });
  }

  onProcess(event) {
    this.setState({ loading: true });
    const orderId = event.target.dataset.id;
    const order = this.state.orders.filter(order => order.id === orderId);
    this.props.actions
      .processOrder(order[0])
      .then(() => {
        toastr.success(`Order: ${orderId} processed.`);
        this.setState({ orders: [...this.props.orders], loading: false });
      })
      .catch(error => {
        this.setState({ loading: false });
        toastr.error(error);
      });
  }

  render() {
    return (
      <div>
        <h2>Pending Orders</h2>
        {this.pendingOrders().length > 0 && (
          <OrdersTable
            orders={this.pendingOrders()}
            title={{
              a: "#",
              b: "Items",
              c: "Total",
              d: "Delete Order",
              e: "Place Order"
            }}
            loading={this.state.loading}
            show_delete_order
            show_place_order
            onDelete={this.onDelete}
            onProcess={this.onProcess}
          />
        )}
        <br />
        <h2>Past Orders</h2>
        {this.pastOrders().length > 0 && (
          <OrdersTable
            orders={this.pastOrders()}
            title={{ a: "#", b: "Items", c: "Total" }}
          />
        )}
      </div>
    );
  }
}

OrdersPage.propTypes = {
  orders: PropTypes.arrayOf(PropTypes.object).isRequired,
  session: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return { orders: state.orders, session: state.session };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(orderActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(OrdersPage)
);
