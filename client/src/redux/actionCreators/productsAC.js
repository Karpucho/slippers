<<<<<<< HEAD
import { INIT_PRODUCTS_LIST, ADD_PRODUCT, UPDATE_PRODUCT_IN_STOK, DELETE_PRODUCT,  UPDATE_PRODUCT, INIT_CURRENT_PRODUCT_CARD} from '../actionsTypes/productsAT';
=======
import { INIT_PRODUCTS_LIST, ADD_PRODUCT, DELETE_PRODUCT,  UPDATE_PRODUCT, INIT_CURRENT_PRODUCT_CARD, CHANGE_PRODUCT_STATUS} from '../actionsTypes/productsAT';
>>>>>>> 1fc043e16ed8dca3d7d63b9524405e5f80764b6b

export const initProductsListAC = (payload = []) => {
  return {
    type: INIT_PRODUCTS_LIST,
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
