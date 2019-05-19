import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./DescriptionPage.css";

import RatingCase from "../../Components/RatingCase";

class DescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      org: {}
    };
  }

  componentDidMount = () => {
    console.log("*****>> ", this.props.match.params.id);
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
        <p key={comment.date}>{comment.quick_fb_username}</p>
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
      feedbacks
    } = this.state.org;

    return (
      <div className="description">
        <h2>{name}</h2>
        <h5>{addr}</h5>
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

        {this.renderComments(feedbacks)}

        <Link to={`/feedback/${id}/${name}`}>
          <span>Оценить организацию</span>
        </Link>
        <Link to={`/`}>
          <span>Вернуться на главную</span>
        </Link>
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
