import React, { Component } from "react";

import "./ResultItem.css";

class ResultItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ResultItem">
        <div>Администрация г.Витебска</div>
        <div>
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star checked" />
          <span className="fa fa-star" />
          <span className="fa fa-star" />
        </div>
        <div>12 reviews</div>
        <div>
          <button>Оставить отзыв</button>
        </div>
      </div>
    );
  }
}

export default ResultItem;
