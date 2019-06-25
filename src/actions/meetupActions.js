import axios from "axios";

import { FETCH_MEETUPS } from "./types";

export const fetchMeetups = () => dispatch => {
  axios
    .get("https://questioner2.herokuapp.com/api/v2/meetups/upcoming")
    .then(res => {
      const meetups = res.data.data;
      dispatch({
        type: FETCH_MEETUPS,
        payload: meetups
      });
    })
    .catch(err => {
      this.setState({
        loading: false,
        error: err
      });
    });
};
