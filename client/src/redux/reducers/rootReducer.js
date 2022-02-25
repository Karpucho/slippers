import { combineReducers } from 'redux';
<<<<<<< HEAD:client/src/redux/reducers/rootReducer.js
// import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({

  // usersReducer,
=======
import { productsReducer } from './productsReducer';
import { usersReducer } from './usersReducer';

export const rootReducer = combineReducers({
  productsReducer,
  usersReducer,
>>>>>>> 0cc64699c1d0cd3f3a02827f984dd0b067d9ec37:client/src/redux/redusers/rootReducer.js
});
