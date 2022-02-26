import { LOGIN_USER, CREATE_USER,UPDATE_USER } from "../actionsTypes/userAT";

export const loginUserAC = (payload) => {
  return {
    type: LOGIN_USER,
    payload,
  };
};

export const createUserAC = (payload) => {
  return {
    type: CREATE_USER,
    payload,
  };
};

export const updateUserAC = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
};
