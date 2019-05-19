import React from "react";

import "./RatingCase.css";

import Stars from "../Stars";

const RatingCase = props => (
  <div className="one-rating-case">
    <h5>{props.pointForEstimation}</h5>
    <Stars
      point={props.point}
      setScore={props.setScore}
      score={props.score}
      // pushedScore={props.pushedScore}
    />
  </div>
);

export default RatingCase;
