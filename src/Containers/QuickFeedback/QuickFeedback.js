import React, { Component } from "react";
import { connect } from "react-redux";

import "./QuickFeedback.css";
import SearchForm from "../../Components/SearchForm";
import OraganizationTabs from "../../Components/OrganizationTabs";

class QuickFeedback extends Component {
  render() {
    return (
      <div>
        <h2>Мой отзыв</h2>
        {/* <h3>Выберите организацию</h3> */}
        {/* <SearchForm /> */}
        <OraganizationTabs />
        {/* <Geolocation /> */}
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
