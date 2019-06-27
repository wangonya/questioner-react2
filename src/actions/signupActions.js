import axios from "axios";

import { SIGN_IN, ERROR } from "./types";

export const signUp = data => dispatch => {
  let userData = {
    firstname: data.firstname,
    lastname: data.lastname,
    email: data.email,
    password: data.password
  };
  axios
    .post("https://questioner2.herokuapp.com/api/v2/auth/signup", userData)
    .then(res => {
      dispatch({
        type: SIGN_IN,
        payload: res.data
      });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: ERROR,
        payload: err
      });
    });
};
