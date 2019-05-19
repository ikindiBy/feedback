import React, { Component } from "react";
import './feddback.css';

class Feedback extends Component {
  constructor(props) {
    super(props);
  }

  getDate = date => {
    return `${new Date(date).getDate()}-${new Date(date).getMonth() + 1}-${new Date(date).getFullYear()}`
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
          <div>
            <span className="user-title">Пользователь:</span>
            <span className="user-name">{logged_user ? logged_user : quick_fb_username}</span>
          </div>
          <div>
          <span className="date-title">Дата размещения:</span>
          <span className="date-name">{this.getDate(date)}</span>
        </div>
        </div>
        <hr />
        <div className="user-comment-title">Комментарий: </div>
        {
          comment && <div className="comment">{comment}</div>
        }
        {
          hasResponse && <hr/>
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
