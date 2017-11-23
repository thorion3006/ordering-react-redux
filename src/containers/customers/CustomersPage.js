import React, { PropTypes } from "react";
import { withRouter } from "react-router";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as sessionActions from "../../actions/sessionActions";
import * as orderActions from "../../actions/orderActions";
import toastr from "toastr";
import CustomersList from "../../components/customers/CustomersList";

class CustomersPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      customer: Object.assign({}, props.customer),
      login: true
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onChange(event) {
    const customerId = event.target.value;
    const customer = this.props.customers.filter(
      customer => customer.id === customerId
    );
    this.setState({ customer: Object.assign({}, customer[0]) });
    if (customerId) {
      this.setState({ login: false });
    } else {
      this.setState({ login: true });
    }
  }
  onClick(event) {
    event.preventDefault();
    this.setState({ login: true });
    this.props.actions.loadOrders(this.state.customer.id).then(() => {
      this.redirect();
    });
  }

  redirect() {
    this.props.actions.createSession(this.state.customer);
    toastr.success(`logged in as ${this.state.customer.name}`);
    this.props.router.push("/orders");
  }

  render() {
    return (
      <CustomersList
        customer={this.state.customer}
        customers={this.props.customers}
        login={this.state.login}
        onChange={this.onChange}
        onClick={this.onClick}
      />
    );
  }
}

CustomersPage.propTypes = {
  customers: PropTypes.array.isRequired,
  customer: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  let customer = {
    id: "",
    name: "",
    since: "",
    revenue: "",
    pending_orders: ""
  };
  if (state.session.id) {
    customer = Object.assign({}, state.session);
  }
  if (state.orders.length > 0) {
    let pending_orders = 0;
    state.orders.map(order => {
      if (!("processed" in order)) {
        pending_orders += 1;
      }
    });
    customer.pending_orders = pending_orders;
  }

  return {
    customers: state.customers,
    customer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      Object.assign({}, orderActions, sessionActions),
      dispatch
    )
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(CustomersPage)
);
