import React, { Component, Fragment } from "react";
import ReactToPrint from "react-to-print";

import "./QRCode.css";

var QRCode = require("qrcode.react");

class QRCodeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="QRCodeComponent">
        {/* <h1>{this.props.organizationName}</h1> */}
        <h1>Оставьте отзыв о нашей работе</h1>
        <h3>
          Mониторинг качетсва наших услуг осуществляется Правительством на
          сайте <span>качество-услуг.бел</span>
        </h3>
        <QRCode
          className="QRCode"
          includeMargin="true"
          value={
            "http://качество-услуг.бел/RatingPortal/OrgCardForUser?id=" +
            this.props.id
          }
          renderAs="svg"
          size={this.props.size}
        />
        <h2>
          Для быстрого отзыва используйте
          <br />
          QR-код
        </h2>
      </div>
    );
  }
}

export default QRCodeComponent;
