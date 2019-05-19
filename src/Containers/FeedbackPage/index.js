import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./FeedbackPage.css";

import RatingCase from "../../Components/RatingCase";
import Print from "../../Components/Print";

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
  /*
  overalEstimation: action.payload.overalEstimation,
        difficultingProc: action.payload.difficultingProc,
        speed: action.payload.speed,
        polite: action.payload.polite,
        hasRecomended: action.payload.hasRecomended,
        description: action.payload.description,
        nameUser: action.payload.nameUser,
        emailUser: action.payload.emailUser
*/

  handleSubmit = event => {
    event.preventDefault();
    const url = "/feedback/new";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        org: 250,
        // user: 2,
        overalEstimation: this.state.ratingCommon,
        difficultingProc: this.state.ratingComplexity,
        speed: this.state.ratingSpeed,
        polite: this.state.ratingPolitiness,
        comment: this.state.description,
        username: this.state.userName,
        email: this.state.email
      })
    }).then(da => console.log("==============", da));
  };
  handleNameChange = e => {
    this.setState({ userName: e.target.value });
  };
  handleMailChange = e => {
    this.setState({ email: e.target.value });
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
      <Print
        organizationName="Главное управление юстиции Минского городского исполнительного комитета"
        id="38270"
      />
      // <div>
      //   <h2>Мой отзыв о {this.props.match.params.name}</h2>
      //   <form onSubmit={this.handleSubmit}>
      //     <div className="rating-cases">
      //       <RatingCase
      //         pointForEstimation={"Общая оценка"}
      //         point={1}
      //         setScore={this.setCommonScore}
      //       />
      //       <RatingCase
      //         pointForEstimation={"Простота процесса"}
      //         point={2}
      //         setScore={this.setComplexityScore}
      //       />
      //       <RatingCase
      //         pointForEstimation={"Скорость отзыва"}
      //         point={3}
      //         setScore={this.setSpeedScore}
      //       />
      //       <RatingCase
      //         pointForEstimation={"Вежливость"}
      //         point={4}
      //         setScore={this.setPolitinessScore}
      //       />
      //     </div>
      //     {/* <div>
      //       <p>Вы бы порекомендовали друзьям обращаться в эту организацию?</p>
      //       <button>да</button>
      //       <button>нет</button>
      //     </div> */}
      //     <div className="descriptionFeedback">
      //       <label>Расскажите подробнее</label>
      //       <textarea
      //         name="textarea"
      //         rows="10"
      //         cols="50"
      //         onChange={this.handleMailChange}
      //       />
      //     </div>
      //     <div className="personal-data">
      //       <label>Ваше имя</label>
      //       <input
      //         type="text"
      //         //   value={"sdsd"}
      //         onChange={this.handleNameChange}
      //         placeholder="Иван Иванов"
      //       />
      //     </div>
      //     <div className="personal-data">
      //       <label>e-mail</label>
      //       <input
      //         type="email"
      //         //   value={"sdsd"}
      //         onChange={this.handleMailChange}
      //         placeholder="some@mail.ru"
      //       />
      //     </div>
      //     <button>Отправить отзыв</button>
      //     <Link to={`/`}>
      //       <button type="submit">Вернуться на главную</button>
      //     </Link>
      //   </form>
      // </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentOrganization: state.organizations.currentOrganization
  };
}

export default connect(mapStateToProps)(FeedbackPage);
