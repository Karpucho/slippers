import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { basketReducer } from './basketReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  usersReducer,
});
