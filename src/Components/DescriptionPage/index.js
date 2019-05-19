import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import FeedbackItem from "../Feedback";
import YandexMaps from "../YandexMaps";

import "./DescriptionPage.css";

import RatingCase from "../../Components/RatingCase";
import Header from "../../Containers/Header";

class DescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      org: {}
    };
  }

  componentDidMount = () => {
    const idForOrg = +this.props.match.params.id;
    const url = "/organization/read/";
    fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        org: idForOrg
      })
    })
      .then(resp => resp.json())
      .then(data => {
        this.setState({ org: data });
      });
  };

  renderComments = comments => {
    if (comments) {
      return comments.map(comment => (
        <FeedbackItem data={comment} key={comment.date} />
      ));
    }
  };

  render() {
    console.log("--______", this.state.org);
    const {
      id,
      name,
      addr,
      avg_diffproc,
      avg_overalest,
      avg_polite,
      avg_speed,
      feedbacks,
      coordx,
      coordy
    } = this.state.org;
    return (
      <div className="description">
        {
          name && <Header heading={`${name}`} />
        }
        <h5>{addr}</h5>
        <div className="org-description">
          <div className="rating-cases">
            <RatingCase
              pointForEstimation={"Общая оценка"}
              point={1}
              setScore={this.setCommonScore}
              score={Math.round(avg_overalest)}
            />
            <RatingCase
              pointForEstimation={"Простота процесса"}
              point={2}
              setScore={this.setComplexityScore}
              score={Math.round(avg_diffproc)}
            />
            <RatingCase
              pointForEstimation={"Скорость отзыва"}
              point={3}
              setScore={this.setSpeedScore}
              score={Math.round(avg_speed)}
            />
            <RatingCase
              pointForEstimation={"Вежливость"}
              point={4}
              setScore={this.setPolitinessScore}
              score={Math.round(avg_polite)}
            />
          </div>
          { coordx && <YandexMaps lng={coordx} lat={coordy} /> }
        </div>
        <div className="org-navigation">
          <Link to={`/feedback/${id}/${name}`}>
            <span><i className="fa fa-pen fa-1x" aria-hidden="true" />Оценить организацию</span>
          </Link>
          <Link to={`/`}>
            <span><i className="fa fa-home fa-1x" aria-hidden="true" />На главную</span>
          </Link>
          <Link to={`/QRmaker/${id}/${name}`}>
            <span> <i className="fa fa-qrcode fa-1x" aria-hidden="true" />Создать QR-code</span>
          </Link>
        </div>
        {this.renderComments(feedbacks)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentOrganization: state.organizations.currentOrganization
  };
}

export default connect(mapStateToProps)(DescriptionPage);
