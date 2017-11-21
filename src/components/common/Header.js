import React from "react";
import { Link, IndexLink } from "react-router";

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-header">
        <IndexLink to="/" activeClassName="active" className="navbar-brand">
          Home
        </IndexLink>
      </div>
      <ul className="nav navbar-nav">
        <li>
          <Link to="/orders" activeClassName="active">
            My Orders
          </Link>
        </li>
        <li>
          <Link to="/products" activeClassName="active">
            Products
          </Link>
        </li>
      </ul>
      <p className="navbar-text navbar-right">
        Current customer:{" "}
        <IndexLink to="/" className="navbar-link">
          Mark Otto
        </IndexLink>
      </p>
    </nav>
  );
};

export default Header;
