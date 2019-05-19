import React, { Component } from "react";

import "./Header.css";

import SearchForm from "../../Components/SearchForm";
import LogoHeader from "../../Components/LogoHeader";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <header>
        <div className="AppName">
          Портал рейтинговой оценки качества оказания услуг организациями
          Республики Беларусь
        </div>
        <div className="PageTitle">
          <h2>{this.props.heading}</h2>
        </div>
      </header>
    );
  }
}

export default Header;
