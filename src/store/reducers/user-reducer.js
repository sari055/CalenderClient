import { LOGOUT, SET_CURRENT_USER } from "../types/user-types";

const initialState = {
  user: undefined,
  isAuthenticated: false
}
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        isAuthenticated: true,
        user: action.payload
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: undefined
      };
    default:
      return state;
  }
}

export default userReducer;