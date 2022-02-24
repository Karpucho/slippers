import { combineReducers } from 'redux';
// import { usersReducer } from './usersReducer';
import { productsReducer } from './productsReducer';

export const rootReducer = combineReducers({
  productsReducer,
  // usersReducer,
});
