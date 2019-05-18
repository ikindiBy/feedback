import React, { Component } from "react";

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
        <div>Администрация г.Витебска</div>
        <Stars score={1 + Math.random() * 5} />
        <div>12 reviews</div>
        <div>
          <button>Оставить отзыв</button>
        </div>
      </div>
    );
  }
}

export default ResultItem;
