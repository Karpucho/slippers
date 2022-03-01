
import { INIT_PRODUCTS_LIST, FILTER_PRODUCTS_LIST, SORT_PRODUCTS_LIST, ADD_PRODUCT, CHANGE_PRODUCT_STATUS, UPDATE_PRODUCT_IN_STOK, DELETE_PRODUCT,  UPDATE_PRODUCT, INIT_CURRENT_PRODUCT_CARD} from '../actionsTypes/productsAT';

export const initProductsListAC = (payload = []) => {
  return {
    type: INIT_PRODUCTS_LIST,
    payload,
  };
};

export const filterProductsListAC = (payload = []) => {
  return {
    type: FILTER_PRODUCTS_LIST,
    payload,
  };
};

export const sortProductsListAC = (payload = []) => {
  return {
    type: SORT_PRODUCTS_LIST,
    payload,
  };
};

export const updateProductInStokAC = (payload) => {
  return {
    type: UPDATE_PRODUCT_IN_STOK,
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

export const updateProductStatusAC = (payload = {}) => {
  return {
    type: CHANGE_PRODUCT_STATUS,
    payload,
  };
};
