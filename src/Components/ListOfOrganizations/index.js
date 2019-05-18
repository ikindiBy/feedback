import React, { Component } from "react";
import { connect } from "react-redux";

import { organizationsFetchData } from "../../actions/organizationsAction";
import { URL_ALL_ORGS } from "../../js/constants";

class ListOfOrganizations extends Component {
  componentDidMount() {
    this.props.fetchData(URL_ALL_ORGS);
  }

  showListOrgs = () =>
    this.props.setOrganizations.map(item => (
      <h5 key={item.unn}>{item.name}</h5>
    ));

  render() {
    return (
      <div>
        <h3>orgs: </h3>
        {this.showListOrgs()}
      </div>
    );
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
)(ListOfOrganizations);
