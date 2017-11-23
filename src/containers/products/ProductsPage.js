import React, { PropTypes } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as orderActions from "../../actions/orderActions";
import toastr from "toastr";
import ProductsTable from "../../components/products/ProductsTable";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: Object.assign({}, props.qty),
      price: {},
      total: Object.assign({}, props.total),
      order: Object.assign({}, props.order),
      loading: false
    };
    this.onUpdate = this.onUpdate.bind(this);
    this.onSave = this.onSave.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    if (!("id" in this.props.session)) {
      toastr.error("Choose a customer first");
      this.props.router.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.order != nextProps.order) {
      this.setState({
        qty: Object.assign({}, nextProps.qty),
        total: Object.assign({}, nextProps.total),
        order: Object.assign({}, nextProps.order)
      });
    }
  }

  onUpdate(event) {
    event.preventDefault();
    const qty = this.state.qty;
    const total = this.state.total;
    const price = this.state.price;
    const value = event.currentTarget.value;
    const id = event.currentTarget.dataset.id;
    if (value === "reset") {
      qty[id] = "0";
    } else {
      if (!qty[id]) {
        qty[id] = "0";
      }
      qty[id] = (parseInt(qty[id]) + parseInt(value)).toString(); //To maintain the data type with the api.
      if (qty[id] < 0) {
        qty[id] = "0";
      }
    }
    total[id] = (qty[id] * price[id]).toFixed(2);
    this.setState({
      qty: Object.assign({}, qty),
      total: Object.assign({}, total)
    });
  }
  onSave(event) {
    this.setState({ loading: true });
    event.preventDefault();
    const total = this.state.total;
    const qty = this.state.qty;
    const price = this.state.price;
    const order = this.state.order;
    let amount = 0;
    let items = [];
    for (let item in total) {
      if (total.hasOwnProperty(item) && total[item] > 0) {
        amount += parseInt(total[item]);
        items.push({
          "product-id": item,
          quantity: qty[item],
          "unit-price": price[item],
          total: total[item]
        });
      }
    }
    order.total = amount.toFixed(2);
    order.items = items;
    if (order.id) {
      this.props.actions
        .updateOrder(order)
        .then(() => {
          this.setState({ loading: false });
          toastr.success("Order updated!");
          this.props.router.push(`/order/${order.id}`);
        })
        .catch(error => {
          this.setState({ loading: false });
          toastr.error(error);
        });
    } else {
      this.props.actions
        .createOrder(order)
        .then(() => {
          this.setState({ loading: false });
          toastr.success("Order created!");
          this.props.router.push("/orders");
        })
        .catch(error => {
          this.setState({ loading: false });
          toastr.error(error);
        });
    }
  }
  onDelete(event) {
    event.preventDefault();
    this.setState({ loading: true });
    this.props.actions
      .deleteOrder(this.state.order.id)
      .then(() => {
        this.setState({ loading: false });
        toastr.success(`Order: ${this.state.order.id} deleted`);
        this.props.router.push(`/orders`);
      })
      .catch(error => {
        this.setState({ loading: false });
        toastr.error(error);
      });
  }
  render() {
    return (
      <ProductsTable
        products={this.props.products}
        qty={this.state.qty}
        orderId={this.state.order.id}
        price={this.state.price}
        total={this.state.total}
        loading={this.state.loading}
        onUpdate={this.onUpdate}
        onSave={this.onSave}
        onDelete={this.onDelete}
      />
    );
  }
}

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  order: PropTypes.object.isRequired,
  qty: PropTypes.object.isRequired,
  total: PropTypes.object.isRequired,
  session: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let order = { "customer-id": state.session.id };
  let qty = {},
    total = {};
  const query = ownProps.location.query;
  if (query.orderId) {
    const torder = state.orders.filter(order => order.id == query.orderId);
    if (torder[0]["customer-id"] === state.session.id) {
      order = torder[0];
      order.items.map(item => {
        const id = item["product-id"];
        qty[id] = item.quantity;
        total[id] = item.total;
      });
    }
  }
  return {
    products: state.products,
    order,
    qty,
    total,
    session: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(orderActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(ProductsPage)
);
