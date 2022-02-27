import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { basketReducer } from './basketReducer';
import { usersReducer } from './usersReducer';
import { reviewsReducer } from './reviewsReducer';

export const rootReducer = combineReducers({
  productsReducer,
  basketReducer,
  reviewsReducer,
  usersReducer,

});
