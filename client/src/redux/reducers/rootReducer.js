import { combineReducers } from 'redux';
// import { usersReducer } from './usersReducer';
import { productsReducer } from './productsReducer';
import { basketReducer } from './basketReducer';

export const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  // usersReducer,
});
