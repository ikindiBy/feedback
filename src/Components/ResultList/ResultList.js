import React, { Component, Fragment } from "react";

import "./ResultList.css";
import ResultItem from "../ResultItem/ResultItem";

class ResultList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const elements = ["one", "two", "three"];

    const items = [];

    for (const [index, value] of elements.entries()) {
      items.push(<ResultItem key={index} />);
    }

    return (
      <div className="ResultList">
        {items}
      </div>
    );
  }
}

export default ResultList;
