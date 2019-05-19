import React, { Component } from "react";

class YandexMaps extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {lat, lng} = this.props;
    window.YMaps.jQuery(function () {
      var map = new window.YMaps.Map(window.YMaps.jQuery("#YMapsID")[0]);
      var placemark = new window.YMaps.Placemark(new window.YMaps.GeoPoint(lat, lng), {hideIcon: false});

      map.setCenter(new window.YMaps.GeoPoint(lat, lng), 10);
      map.addOverlay(placemark);
      map.addControl(new window.YMaps.Zoom());
    });
  }

  render() {
    return (
      <div id="YMapsID" style={{width:"600px", height:"400px"}}></div>
    );
  }
}

export default YandexMaps;
