import React, { Component } from "react";
import { connect } from "react-redux";
import "./SearchForm.css";

import { setSearchingParams } from "../../actions/searchingAction";
import { SEARCH_LABEL, SEARCH_PLACEHOLDER } from "../../js/constants";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  handleChange = event => {
    // TODO: some handling and validation of text from input
    this.props.setSearchingWord(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    this.inputRef.current.value = ""; // can be saved and cleared later
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>{SEARCH_LABEL}</label>
        <input
          ref={this.inputRef}
          type="text"
          value={this.props.searchingWord}
          onChange={this.handleChange}
          placeholder={SEARCH_PLACEHOLDER}
        />
        <div className="managing-of-search">
          <button type="submit">Search</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchingWord: state.searchingWord
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setSearchingWord: word => dispatch(setSearchingParams(word))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
