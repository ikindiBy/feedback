import React, { Component } from "react";
import { connect } from "react-redux";

import "./QuickFeedback.css";
import SearchForm from "../../Components/SearchForm";
import ResultList from "../../Components/ResultList/ResultList";
import Geolocation from "../../Components/Geolocation";
import { getLocation } from "../../actions/geolocationAction";

class QuickFeedback extends Component {
  render() {
    return (
      <div>
        <h2>Мой отзыв для</h2>
        <h3>Выберите организацию</h3>
        <SearchForm />
        <label>Выводить ближайшие организации</label>
        <input type="checkbox" name="test" value="test" />
        <ResultList />
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
