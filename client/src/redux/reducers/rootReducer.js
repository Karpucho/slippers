import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { basketReducer } from './basketReducer';

export const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  // usersReducer,

});
