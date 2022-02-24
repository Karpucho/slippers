import { CREATE_USER } from "../actionTypes/userAT";

const initialState = {
  users: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}

