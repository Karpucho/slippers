import { INIT_PRODUCTS_LIST, ADD_PRODUCT, DELETE_PRODUCT,  UPDATE_PRODUCT, INIT_CURRENT_PRODUCT_CARD} from '../actionsTypes/productsAT';

export const initProductsListAC = (payload = []) => {
  return {
    type: INIT_PRODUCTS_LIST,
    payload,
  };
};

export const addNewProductAC = (payload = {}) => {
  return {
    type: ADD_PRODUCT,
    payload,
  };
};

export const deleteProductAC = (payload = {}) => {
  return {
    type: DELETE_PRODUCT,
    payload,
  };
};

export const updateProductCardAC = (payload = {}) => {
  return {
    type: UPDATE_PRODUCT,
    payload,
  };
};

export const initCurrentProductCardAC = (payload = {}) => {
  return {
    type: INIT_CURRENT_PRODUCT_CARD,
    payload,
  };
};
