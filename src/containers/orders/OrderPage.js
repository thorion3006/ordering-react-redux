import React, { PropTypes } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../actions/orderActions";
import OrderTable from "../../components/orders/OrderTable";
import toastr from "toastr";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: Object.assign({}, props.order),
      qty: Object.assign({}, props.qty),
      sub_total: Object.assign({}, props.sub_total),
      total: props.total,
      loading: false
    };
    this.onProcess = this.onProcess.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    if (!("id" in this.props.session)) {
      toastr.error("Choose a customer first");
      this.props.router.push("/");
    }
  }

  componentDidMount() {
    this.props.router.setRouteLeaveHook(
      this.props.route,
      (prevState, nextState) => {
        if (!this.state.deleted && this.state.dirty) {
          this.props.actions.updateOrder(this.state.order);
        }
      }
    );
  }

  onUpdate(event) {
    event.preventDefault();
    const qty = this.state.qty;
    const sub_total = this.state.sub_total;
    const value = event.currentTarget.value;
    const id = event.currentTarget.dataset.id;
    const index = event.currentTarget.dataset.index;
    const order = this.state.order;
    const price = order.items[index]["unit-price"];
    if (value !== "remove") {
      qty[id] = (parseInt(qty[id]) + parseInt(value)).toString(); //To maintain the data type with the api.
      sub_total[id] = (qty[id] * price).toFixed(2);
    }
    if (value === "remove" || qty[id] === "0") {
      order.items.splice(index, 1);
      delete qty[id];
      delete sub_total[id];
    }
    let total = 0;
    for (let amount in sub_total) {
      if (sub_total.hasOwnProperty(amount)) {
        let updatedItems = [];
        order.items.map(item => {
          if (item["product-id"] === amount) {
            item.quantity = qty[amount];
            item.total = sub_total[amount];
            updatedItems.push(item);
          }
        });
        total += parseFloat(sub_total[amount]);
      }
    }
    order.total = total.toFixed(2);
    this.setState({
      qty: Object.assign({}, qty),
      sub_total: Object.assign({}, sub_total),
      order: Object.assign({}, order),
      total: total.toFixed(2),
      dirty: true
    });
  }

  onProcess(event) {
    event.preventDefault();
    this.setState({ loading: true });
    this.props.actions
      .processOrder(this.state.order)
      .then(() => {
        toastr.success(`Order: ${this.state.order.id} processed.`);
        this.setState({
          order: Object.assign({}, this.props.order),
          loading: false
        });
      })
      .catch(error => {
        this.setState({ loading: false });
        toastr.error(error);
      });
  }

  onDelete(event) {
    event.preventDefault();
    this.setState({ loading: true, deleted: true });
    this.props.actions
      .deleteOrder(this.state.order.id)
      .then(() => {
        toastr.success(`Order: ${this.state.order.id} deleted.`);
        this.props.router.push("/orders");
      })
      .catch(error => {
        this.setState({ loading: false });
        toastr.error(error);
      });
  }

  render() {
    return (
      <OrderTable
        order={this.state.order}
        qty={this.state.qty}
        sub_total={this.state.sub_total}
        total={this.state.total}
        loading={this.state.loading}
        onProcess={this.onProcess}
        onUpdate={this.onUpdate}
        onDelete={this.onDelete}
      />
    );
  }
}

OrderPage.propTypes = {
  order: PropTypes.object.isRequired,
  qty: PropTypes.object.isRequired,
  sub_total: PropTypes.object.isRequired,
  total: PropTypes.string.isRequired,
  session: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  route: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  const id = ownProps.params.id;
  const orders = [...state.orders].filter(order => order.id == id);
  const order = Object.assign({}, orders[0]);
  const items = [],
    qty = {},
    sub_total = {};
  let total = "";
  if ("id" in order) {
    orders[0].items.map(item => {
      const description = state.products.map(product => {
        if (product.id === item["product-id"]) {
          return product.description;
        }
      });
      const updatedItem = Object.assign({}, item);
      updatedItem.description = description.join("");
      qty[updatedItem["product-id"]] = updatedItem.quantity;
      sub_total[updatedItem["product-id"]] = updatedItem.total;
      items.push(updatedItem);
    });
    order.items = items;
    total = order.total;
  }
  return { order, total, qty, sub_total, session: state.session };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(orderActions, dispatch) };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(OrderPage)
);
