import React, { PropTypes } from "react";
import Header from "./common/Header";

const App = props => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
