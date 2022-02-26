import { CREATE_USER, UPDATE_USER } from "../actionsTypes/userAT";

const initialState = {
  users: [],
};

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER:
      const newUser = {
        email: action.payload.email,
        role: action.payload.role,
      };
      return { ...state, users: action.payload };

    case UPDATE_USER:
      return { ...state, users: action.payload };
    default:
      return state;
  }
}
