import React, { Component } from "react";
import { connect } from "react-redux";

import "./FeedbackPage.css";

import RatingCase from "../../Components/RatingCase";

class FeedbackPage extends Component {
  handleSubmit = () => {};
  handleNameChange = () => {};
  handleMailChange = () => {};
  render() {
    return (
      <div>
        <h1>Мой отзыв о ....</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="rating-cases">
            <RatingCase pointForEstimation={"Общая оценка"} point={1} />
            <RatingCase pointForEstimation={"Простота процесса"} point={2} />
            <RatingCase pointForEstimation={"Скорость отзыва"} point={3} />
            <RatingCase pointForEstimation={"Вежливость"} point={4} />
          </div>
          {/* <div>
            <p>Вы бы порекомендовали друзьям обращаться в эту организацию?</p>
            <button>да</button>
            <button>нет</button>
          </div> */}
          <div className="descriptionFeedback">
            <label>Расскажите подробнее</label>
            <textarea name="textarea" rows="10" cols="50" />
          </div>
          <div className="personal-data">
            <label>Ваше имя</label>
            <input
              type="text"
              //   value={"sdsd"}
              onChange={this.handleNameChange}
              placeholder="search..."
            />
          </div>
          <div className="personal-data">
            <label>e-mail</label>
            <input
              type="email"
              //   value={"sdsd"}
              onChange={this.handleMailChange}
              placeholder="search..."
            />
          </div>
          <button>Отправить отзыв</button>
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
