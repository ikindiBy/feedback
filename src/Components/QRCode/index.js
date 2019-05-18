import React, { Component, Fragment } from "react";
import ReactToPrint from "react-to-print";

var QRCode = require("qrcode.react");

class QRCodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <QRCode
          value={
            "http://качество-услуг.бел/RatingPortal/OrgCardForUser?id=" +
            this.props.id
          }
          renderAs="svg"
          size={this.props.size}
        />
        <button>Print</button>
      </Fragment>
    );
  }
}

export default QRCodeComponent;
