import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { usersReducer } from './usersReducer';
import { reviewsReducer } from './reviewsReducer';

export const rootReducer = combineReducers({
  productsReducer,
  reviewsReducer,
  cartReducer,
  usersReducer,

});
