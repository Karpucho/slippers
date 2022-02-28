import { CREATE_USER, UPDATE_USER, LOGIN_USER } from "../actionsTypes/userAT";

const initialState = {
  user: {},
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
}
