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
        <LogoHeader />
        <SearchForm />
      </header>
    );
  }
}

export default Header;
