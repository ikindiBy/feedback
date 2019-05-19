import React, { Component } from "react";
import './feddback.css';
import Stars from "../Stars";

class Feedback extends Component {
  constructor(props) {
    super(props);
  }

  getDate = date => {
    return `${new Date(date).getDate()}-${new Date(date).getMonth() + 1}-${new Date(date).getFullYear()}`
  };

  getRates = (rates) => {
    return rates.reduce((a, b) => a + b) / rates.length;
  };

  render() {
    const {
    id,
    logged_user,
    quick_fb_username,
    comment,
    hasRecommended,
    date,
    rates,
    hasResponse,
    response,
    response_date
    } = this.props.data;
    return (
      <div id={id} className="user-feedback-item">
        <div className="feedback-title">
          <div className="first-row">
            <span className="user-title">Пользователь: </span>
            <span className="user-name">{logged_user ? logged_user : quick_fb_username}</span>
          </div>
          <div className="second-row">
            <span className="user-rate-title">Рейтинг: </span>
            <span className="user-rate"><Stars score={this.getRates(rates)} /></span>
          </div>
          <div className="third-row">
          <span className="date-title">Дата размещения: </span>
          <span className="date-name">{this.getDate(date)}</span>
        </div>
        </div>
        <hr className="first-delimeter"/>
        <div className="user-comment-title">Комментарий: </div>
        {
          comment && <div className="comment">{comment}</div>
        }
        {
          hasResponse && <hr className="second-delimeter"/>
        }
        {
          hasResponse &&
          <div className="org-response">
            <div className="org-title">Ответ организации
                <span className="response-date"> {this.getDate(response_date)}</span>
            </div>
            <div className="response">{response}</div>
          </div>
        }
      </div>
    );
  }
}

export default Feedback;
