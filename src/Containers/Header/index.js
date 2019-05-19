import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        {/* <div className="AppName"> */}
        {/* <Link to={`/`}>
            Портал рейтинговой оценки качества оказания услуг организациями
            Республики Беларусь
          </Link> */}
        {/* </div> */}
        <div className="PageTitle">
          <h2>{this.props.heading}</h2>
        </div>
      </header>
    );
  }
}

export default Header;
