import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ResultItem.css";
import Stars from "../Stars";

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const idOfOrganization =
      (this.props.organization && this.props.organization.id) || this.props.id;
    const nameOfOrganization =
      (this.props.organization && this.props.organization.name) ||
      this.props.organizationName;
    return (
      <div className="ResultItem">
        <Link to={`/description/${idOfOrganization}`}>
          <div>{nameOfOrganization}</div>
        </Link>
        <Stars score={1 + Math.random() * 5} />
        <div>{Math.round(10 * Math.random())} reviews</div>
        <div>
          <Link to={`/feedback/${idOfOrganization}/${nameOfOrganization}`}>
            <button>Оставить отзыв</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default ResultItem;
