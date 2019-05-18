import React from "react";

import "./RatingCase.css";

import Stars from "../Stars";

const RatingCase = props => (
  <div className="one-rating-case">
    <h5>{props.pointForEstimation}</h5>
    <Stars point={props.point} />
  </div>
);

export default RatingCase;
