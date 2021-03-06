import React, { Component } from "react";
import ReactToPrint from "react-to-print";

import QRCodeComponent from "../QRCode";
import "./Print.css";

class Print extends React.Component {
  render() {
    const { id, name } = this.props.match.params;
    const printedComponent = (
      <QRCodeComponent
        size="280"
        id={this.props.id}
        organizationName={this.props.organizationName}
        ref={el => (this.componentRef = el)}
      />
    );

    return (
      <div className="Print">
        <ReactToPrint
          trigger={() => <button>Распечатать QR-код</button>}
          content={() => this.componentRef}
        />
        {printedComponent}
      </div>
    );
  }
}

export default Print;
