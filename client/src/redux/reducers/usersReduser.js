const initialState = { user: {} }

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "IS_AUTH":
      return { ...state, user: action.payload }
    case "IS_UNAUTH":
      return { ...state, user: {} };
    default:
      return state;
  }
};
