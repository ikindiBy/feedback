import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "font-awesome/css/font-awesome.min.css";

import "./ResultItem.css";
import Stars from "../Stars";

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ResultItem">
        <Link to={`/description/${this.props.organization.id}`}>
          <div>{this.props.organizationName}</div>
        </Link>
        <Stars score={1 + Math.random() * 5} />
        <div>12 reviews</div>
        <div>
          <Link
            to={`/feedback/${this.props.organization.id}/${
              this.props.organization.name
            }`}
          >
            <button>Оставить отзыв</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResultItem;
