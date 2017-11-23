import React, { PropTypes } from "react";

const CustomersList = ({ customers, customer, onChange, onClick, login }) => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="customerId">Customer sign in:</label>
        <div className="field">
          <select
          name="customerId"
          className="form-control"
          value={customer.id}
          onChange={onChange}
          >
            <option value="">Select Customer</option>
            {customers.map(customer => {
              return (
                <option key={customer.id} value={customer.id}>
                  {customer.name}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />
      {customer.id && (
        <div>
          <dl className="dl-horizontal">
            <div>
              <dt>Pending Orders</dt>
              <dd>{customer.pending_orders ? customer.pending_orders : "0"}</dd>
            </div>
            <dt>Revenue</dt>
            <dd>{customer.revenue}</dd>
            <dt>Member Since</dt>
            <dd>{customer.since}</dd>
          </dl>
          <input
            type="submit"
            disabled={login}
            value="Sign In"
            className="btn btn-primary"
            onClick={onClick}
          />
        </div>
      )}
    </div>
  );
};

CustomersList.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.object).isRequired,
  customer: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  login: PropTypes.bool.isRequired
};

export default CustomersList;
