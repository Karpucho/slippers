import {
  CREATE_USER,
  UPDATE_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_USER_ORDERS,
} from "../actionsTypes/userAT";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) ?? null,
  userProducts: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, user: action.payload };
    case UPDATE_USER:
      return { ...state, user: action.payload };
    case LOGIN_USER:
      return { ...state, user: action.payload };
    case LOGOUT_USER:
      return { ...state, user: null };
    case GET_USER_ORDERS:
      return { ...state, userProducts: action.payload };
    default:
      return state;
  }
}
