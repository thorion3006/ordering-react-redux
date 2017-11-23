import React, { PropTypes } from "react";
import { connect } from "react-redux";
import Header from "../components/common/Header";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="container">
        <Header name={this.props.session.name} />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  session: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  return { session: state.session };
}

export default connect(mapStateToProps)(App);
