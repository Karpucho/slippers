import { LOGIN_USER, CREATE_USER } from "../../redux/actionsTypes/userAT";

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
