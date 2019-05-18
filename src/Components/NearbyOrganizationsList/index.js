import React, { Component } from "react";
import { connect } from "react-redux";

import { organizationsNearbyFetchData } from "../../actions/organizationsAction";
import { URL_NEARBY_ORG } from "../../js/constants";

class NearbyOrganizationsList extends Component {
  componentDidMount() {
    this.props.fetchData(URL_NEARBY_ORG);
  }

  // showListOrgs = () =>
  //   this.props.setOrganizations.map(item => (
  //     <h5 key={item.unn}>{item.name}</h5>
  //   ));

  render() {
    return (
      <div>
        <h3>orgs: </h3>
        {/* {this.showListOrgs()} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    setNearbyOrganizations: state.organizations.organizationsNearbySet
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: url => dispatch(organizationsNearbyFetchData(url))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyOrganizationsList);
