import axios from "axios";

import { SIGN_IN, ERROR } from "./types";

export const signIn = data => dispatch => {
  let userData = {
    email: data.email,
    password: data.password
  };
  console.log("called! data ==", userData);
  axios
    .post("https://questioner2.herokuapp.com/api/v2/auth/login", userData)
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
