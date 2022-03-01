import { CREATE_USER, UPDATE_USER, LOGIN_USER, LOGOUT_USER } from "../actionsTypes/userAT";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? null,
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      const user = {
        userData: state.user.userData,
        user: action.payload,
      };
      return { ...state, user };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
