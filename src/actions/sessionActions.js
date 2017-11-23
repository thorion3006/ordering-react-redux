import * as types from "../constants/actionTypes";

export function createSession(session) {
  return { type: types.CREATE_SESSION, session };
}
