import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./ExtendedSearch.css";
import { organizationsMock } from "./mock";
import ListOfOrganizations from "../ListOfOrganizations";

class ExtendedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const defaultOption = organizationsMock[0];

    return (
      <div className="ExtendedSearch">
        <label>Категория</label>
        <Dropdown
          options={organizationsMock}
          onChange={this._onSelect}
          value={defaultOption}
          placeholder="Select an option"
        />

        <ListOfOrganizations/>
      </div>
    );
  }
}

export default ExtendedSearch;
