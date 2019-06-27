import { combineReducers } from "redux";
import { createForms } from "react-redux-form";

import meetupReducer from "./meetupReducer";
import signinReducer from "./signinReducer";
import loadingReducer from "./loadingReducer";

export default combineReducers({
  meetups: meetupReducer,
  loading: loadingReducer,
  ...createForms({
    signin: signinReducer
  })
});
