import initialState from "./initialState";
import * as types from "../constants/actionTypes";

export default function sessionReducer(state = initialState.session, action) {
  switch (action.type) {
    case types.CREATE_SESSION:
      return action.session;
    default:
      return state;
  }
}
