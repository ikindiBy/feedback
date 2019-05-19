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
        <div className="QRWrapper">
          <div className="QRWrapperRow">
            <div className="QRWrapperItem1" />
            <div className="QRWrapperItem2" />
          </div>
          <div className="QRCode">
            <QRCode
              value={
                "http://качество-услуг.бел/RatingPortal/OrgCardForUser?id=" +
                this.props.id
              }
              renderAs="svg"
              size={this.props.size}
            />
          </div>
          <div className="QRWrapperRow">
            <div className="QRWrapperItem3" />
            <div className="QRWrapperItem4" />
          </div>
        </div>
        <div className="SnanTextWrapper">
          <img src={require("../../assets/scan icon.svg")} alt="scan icon" />
          <h2>Отсканируйте QR-код для быстрого отзыва</h2>
        </div>
        <div className="NoteTextWrapper">
        <img src={require("../../assets/Bitmap.svg")} alt="bitmap icon" />
          <h3>
            Mониторинг качетсва наших услуг осуществляется Правительством на
            сайте <span>качество-услуг.бел</span>
          </h3>
        </div>
      </div>
    );
  }
}

export default QRCodeComponent;
