import React, { Component } from "react";
import { connect } from "react-redux";

import "./QuickFeedback.css";
import SearchForm from "../../Components/SearchForm";
import ResultList from "../../Components/ResultList/ResultList";
import Geolocation from "../../Components/Geolocation/Geolocation";

class QuickFeedback extends Component {
  render() {
    return (
      <div>
        <h2>Мой отзыв для</h2>
        <h3>Выберите организацию</h3>
        <SearchForm />
        <label>Выводить ближайшие организации</label>
        <input type="checkbox" name="test" value="test"/>
        <ResultList />
        <Geolocation />
      </div>
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
)(QuickFeedback);
