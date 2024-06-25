import { SET_TZ_EVENT_BY_ADD_USER } from "../types/events-types";

export function setTzEventByAddUser(tz) {
  return {
    type: SET_TZ_EVENT_BY_ADD_USER,
    payload: tz
  }
}

export const setTzEvent = (tz) =>  dispatch => {
    debugger;
    dispatch(setTzEventByAddUser(tz))
}

