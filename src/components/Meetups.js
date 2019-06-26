import React, { Component } from "react";
import { connect } from "react-redux";
import { Spinner } from "reactstrap";

import { fetchMeetups } from "../actions/meetupActions";

class Meetups extends Component {
  componentDidMount() {
    this.props.fetchMeetups();
  }

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/static
  static renderLoading() {
    return <Spinner type="grow" color="danger" />;
  }

  renderMeetups() {
    return <div>meetups here</div>;
  }

  render() {
    return (
      <div>
        {this.props.loading ? Meetups.renderLoading() : this.renderMeetups()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  meetups: state.meetups.meetups,
  loading: state.meetups.loading
});

export default connect(
  mapStateToProps,
  { fetchMeetups }
)(Meetups);
