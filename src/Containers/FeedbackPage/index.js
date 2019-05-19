import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./FeedbackPage.css";

import RatingCase from "../../Components/RatingCase";
import Header from "../../Containers/Header";

class FeedbackPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      description: "",
      ratingCommon: 1,
      ratingComplexity: 1,
      ratingSpeed: 1,
      ratingPolitiness: 1
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const url = "/feedback/new";
    const id = +this.props.match.params.id;
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        org: id,
        // user: 2,
        overalEstimation: this.state.ratingCommon,
        difficultingProc: this.state.ratingComplexity,
        speed: this.state.ratingSpeed,
        polite: this.state.ratingPolitiness,
        comment: this.state.description,
        username: this.state.userName,
        email: this.state.email
      })
    });
    this.setState({
      userName: "",
      email: "",
      description: "",
      ratingCommon: 1,
      ratingComplexity: 1,
      ratingSpeed: 1,
      ratingPolitiness: 1
    });
  };
  handleNameChange = e => {
    this.setState({ userName: e.target.value });
  };
  handleMailChange = e => {
    this.setState({ email: e.target.value });
  };
  handleDescriptionChange = e => {
    this.setState({ description: e.target.value });
  };
  setCommonScore = score => {
    this.setState({ overalEstimation: score });
  };
  setComplexityScore = score => {
    this.setState({ ratingComplexity: score });
  };
  setSpeedScore = score => {
    this.setState({ ratingSpeed: score });
  };
  setPolitinessScore = score => {
    this.setState({ ratingPolitiness: score });
  };
  render() {
    console.log("------> ", this.state.overalEstimation);
    return (
      <div>
        <Header heading={`Мой отзыв о ${this.props.match.params.name}`} />
        <form onSubmit={this.handleSubmit}>
          <div className="form-top">
            <div className="rating-cases">
              <RatingCase
                pointForEstimation={"Общая оценка"}
                point={1}
                setScore={this.setCommonScore}
              />
              <RatingCase
                pointForEstimation={"Простота процесса"}
                point={2}
                setScore={this.setComplexityScore}
              />
              <RatingCase
                pointForEstimation={"Скорость отзыва"}
                point={3}
                setScore={this.setSpeedScore}
              />
              <RatingCase
                pointForEstimation={"Вежливость"}
                point={4}
                setScore={this.setPolitinessScore}
              />
            </div>

            <div className="descriptionFeedback">
              <label>Рассказать подробнее</label>
              <textarea
                name="textarea"
                rows="10"
                cols="50"
                onChange={this.handleDescriptionChange}
                value={this.state.description}
              />
            </div>
          </div>
          <div className="form-middle">
            <div className="personal-data">
              <label>Ваше имя</label>
              <input
                type="text"
                onChange={this.handleNameChange}
                placeholder="Иван Иванов"
                value={this.state.userName}
              />
            </div>
            <div className="personal-data">
              <label>e-mail</label>
              <input
                type="email"
                onChange={this.handleMailChange}
                placeholder="some@mail.ru"
                value={this.state.email}
              />
            </div>
          </div>
          <div className="form-bottom">
            <button>Отправить отзыв</button>
            <Link to={`/`}>
              <button className="to-home">
                <i className="fa fa-home" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentOrganization: state.organizations.currentOrganization
  };
}

export default connect(mapStateToProps)(FeedbackPage);
