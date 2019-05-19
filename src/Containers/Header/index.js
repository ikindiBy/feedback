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
        <h2>Оставить отзыв</h2>
      </header>
    );
  }
}

export default Header;
