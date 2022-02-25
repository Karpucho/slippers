import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  productsReducer,
  usersReducer,
});
