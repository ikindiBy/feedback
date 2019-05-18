import React, { Component } from "react";

import ReactToPrint from "react-to-print";

import QRCodeComponent from "../QRCode";

class Print extends React.Component {
  render() {
    return (
      <div>
        <ReactToPrint
          trigger={() => <a href="#">Print this out!</a>}
          content={() => this.componentRef}
        />
        <QRCodeComponent
          size="500"
          id="38270"
          ref={el => (this.componentRef = el)}
        />
      </div>
    );
  }
}

export default Print;
