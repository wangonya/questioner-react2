import { FETCH_MEETUPS } from "./../actions/types";

const initialState = {
  meetups: [],
  error: null,
  loading: true
};

export default function(state = initialState, action) {
  if (action.type === FETCH_MEETUPS) {
    return {
      ...state,
      meetups: action.payload,
      loading: false
    };
  } else {
    return state;
  }
}
