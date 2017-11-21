import React from "react";

const CustomersPage = () => {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="customer">{"Customer sign in "}</label>
        <select name="customer" className="form-control" value="">
          <option value="">Select Customer</option>
        </select>
        <br />
        <dl className="dl-horizontal">
          <dt>Pending Orders</dt>
          <dd>3</dd>
          <dt>Revenue</dt>
          <dd>$450</dd>
          <dt>Member Since</dt>
          <dd>2016-10-15</dd>
        </dl>
        <input type="submit" value="Sign In" className="btn btn-primary" />
      </div>
    </div>
  );
};

export default CustomersPage;
