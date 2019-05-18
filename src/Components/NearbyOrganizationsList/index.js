import React, { Component } from "react";
import { connect } from "react-redux";

import { organizationsNearbyFetchData } from "../../actions/organizationsAction";
import { getLocation } from "../../actions/geolocationAction";
import { URL_NEARBY_ORG } from "../../js/constants";

class NearbyOrganizationsList extends Component {
  state = {
    data: "Please wait while you're weather is loading..."
  };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(pos => {
      this.setState({
        uri: { latitude: pos.coords.latitude, longitude: pos.coords.longitude }
      });
    });

    const test = this.props.fetchData(URL_NEARBY_ORG, {
      method: "POST",
      body: JSON.stringify({
        location: {
          latitude: this.state.longitude,
          longitude: this.state.latitude
        },
        distance: 1
      })
    });

    console.log("test", test);
  }

  //   showListOrgs = () =>
  //     this.props.setNearbyOrganizations.map(item => (
  //       <h5 key={item.unn}>{item.name}</h5>
  //     ));

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
    fetchData: url =>
      dispatch(
        organizationsNearbyFetchData(url, {
          method: "POST",
          body: JSON.stringify({
            location: {
              latitude: 53.9164672,
              longitude: 27.5841024
            },
            distance: 1
          })
        }),
        getLocation()
      )
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NearbyOrganizationsList);
