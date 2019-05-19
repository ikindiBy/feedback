import React from "react";

import "./Stars.css";

class Str extends React.Component {
  handleClick = e => {
    this.props.handleClick(this.props.score);
  };
  render() {
    return (
      <i
        className={`fas fa-star ${this.props.checked}`}
        onClick={this.handleClick}
      />
    );
  }
}

const arrScore = [1, 2, 3, 4, 5];

class Stars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 3
    };
  }

  handleClick = scr => {
    this.setState({ score: scr });
    this.props.setScore(scr);
  };

  renderScore = () => {
    const currentScore = this.props.score || this.state.score;
    return arrScore.map(item => {
      return (
        <Str
          checked={item > currentScore ? "checked" : ""}
          key={item}
          score={item}
          handleClick={this.handleClick}
        />
      );
    });
  };

  render() {
    return <div className="rating">{this.renderScore()}</div>;
  }
}

export default Stars;
