import React, { Component } from "react";
import { connect } from "react-redux";

import { organizationsFetchData } from "../../actions/organizationsAction";
import { URL_ALL_ORGS } from "../../js/constants";
import ResultItem from "../ResultItem/ResultItem";

class LimitedOrganizationsList extends Component {
  componentDidMount() {
    this.props.fetchData(URL_ALL_ORGS);
  }

  showListOrgs = () => {
    return this.props.setOrganizations
      .slice(0, 30)
      .map(item => <ResultItem key={item.unn} organizationName={item.name} />);
  };

  render() {
    return <div>{this.showListOrgs()}</div>;
  }
}

function mapStateToProps(state) {
  return {
    setOrganizations: state.organizations.organizationsSet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: url => dispatch(organizationsFetchData(url))
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LimitedOrganizationsList);
