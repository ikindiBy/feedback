import React, { Component } from "react";
import { connect } from "react-redux";

import "./Main.css";

class Main extends Component {
  render() {
    return (
      <main>
        Results of search | companie's page | user's page | ...
        <h3>search: {this.props.searchingWord}</h3>
      </main>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchingWord: state.search.searchingWord
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
