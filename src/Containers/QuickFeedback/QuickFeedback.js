import React, { Component } from "react";
import { connect } from "react-redux";

import "./QuickFeedback.css";
import SearchForm from "../../Components/SearchForm";
import OraganizationTabs from "../../Components/OrganizationTabs";
import Header from "../../Containers/Header";
import Footer from "../../Containers/Footer";

class QuickFeedback extends Component {
  render() {
    return (
      <div>
        <Header heading="Оставить отзыв" />
        <OraganizationTabs />
        {/* <Footer /> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // getLocation: () => dispatch(getLocation())
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuickFeedback);
