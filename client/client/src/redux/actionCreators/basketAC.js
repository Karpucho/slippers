import { ADD_PRODUCT_BASKET, UPDATE_PRODUCT_BASKET, DELETE_PRODUCT_BASKET, CLEAR_BASKET} from '../actionsTypes/basketAT';

export const addProductBasketAC = (payload) => {
  return {
    type: ADD_PRODUCT_BASKET,
    payload,
  }
};

export const updateProductBasketAC = (payload) => {
  return {
    type: UPDATE_PRODUCT_BASKET,
    payload,
  }
};

export const deleteProductBasketAC = (payload) => {
  return {
    type: DELETE_PRODUCT_BASKET,
    payload,
  }
};

export const clearProductBasketAC = (payload) => {
  return {
    type: CLEAR_BASKET,
    payload,
  }
};

