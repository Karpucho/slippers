import { combineReducers } from 'redux';
import { productsReducer } from './productsReducer';
import { cartReducer } from './cartReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  productsReducer,
  cartReducer,
  usersReducer,

});
