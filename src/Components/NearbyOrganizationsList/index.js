import React, { Component } from "react";
import { connect } from "react-redux";

import {
  organizationsNearbyFetchData,
  increaseDistance
} from "../../actions/organizationsAction";
import { URL_NEARBY_ORG } from "../../js/constants";
import ResultItem from "../ResultItem/ResultItem";
import "./NearbyOrganizationsList.css";

class NearbyOrganizationsList extends Component {
  currentDistance = 1;

  componentDidMount() {
    this.props.fetchData(URL_NEARBY_ORG, 1);
  }

  showListOrgs = () => {
    console.log("-----------", this.props.setNearbyOrganizations);
    return this.props.setNearbyOrganizations.map(item => (
      <ResultItem
        key={item.unn}
        organizationName={item.name}
        organization={item}
      />
    ));
  };

  onClick = () => {
    this.props.increaseDistance(this.props.distance * 2);
    this.props.fetchData(URL_NEARBY_ORG, this.props.distance);
  };

  render() {
    return (
      <div className="NearbyOrganizationsList">
        <button onClick={this.onClick}>Увеличить радиус поиска</button>
        {this.showListOrgs()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    setNearbyOrganizations: state.organizations.organizationsNearbySet,
    distance: state.organizations.distance
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchData: (url, distance) =>
      dispatch(organizationsNearbyFetchData(url, distance)),
    increaseDistance: distance => dispatch(increaseDistance(distance))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyOrganizationsList);
