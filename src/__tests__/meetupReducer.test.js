import { FETCH_MEETUPS } from "../actions/types";
import meetupReducer from "../reducers/meetupReducer";

describe("meetupReducer", () => {
  test("returns initialState when no action is passed", () => {
    const newState = meetupReducer(undefined, {});
    expect(newState).toEqual({ error: null, loading: true, meetups: [] });
  });
  test("state changes when FETCH_MEETUPS is dispatched", () => {
    const newState = meetupReducer(undefined, { type: FETCH_MEETUPS });
    expect(newState.loading).toBe(false);
  });
});
