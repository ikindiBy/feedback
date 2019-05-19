import React, { Component } from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

import "./ExtendedSearch.css";
import { organizationsMock, urPomoschMock } from "./mock";
import LimitedOrganizationsList from "../LimitedOrganizationsList";
import ResultItem from "../ResultItem/ResultItem";

class ExtendedSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mock: true
    };
  }

  _onSelect = () => {
    this.setState({ mock: false });
  };

  showListOrgs = () => {
    return urPomoschMock.map(item => (
      <ResultItem key={item.unn} organizationName={item.name} id={item.id} />
    ));
  };

  render() {
    const defaultOption = organizationsMock[0];

    return (
      <div className="ExtendedSearch">
        <div className="DropdownWrapper">
          <Dropdown
            options={organizationsMock}
            onChange={this._onSelect}
            value={defaultOption}
            placeholder="Select an option"
          />
        </div>
        {this.state.mock ? this.showListOrgs() : <LimitedOrganizationsList />}
      </div>
    );
  }
}

export default ExtendedSearch;
