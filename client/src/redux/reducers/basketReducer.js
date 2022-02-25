import { ADD_PRODUCT_BASKET, UPDATE_PRODUCT_BASKET, DELETE_PRODUCT_BASKET, CLEAR_BASKET } from '../actionsTypes/basketAT';

const initialState = {
  basketProducts: JSON.parse(localStorage.getItem('basket')) || [],
  
};

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_PRODUCT_BASKET:
      const addedProduct = state.basketProducts.find(
        product => product.id === action.payload.id
      );
      if (addedProduct) {
        return {
          ...state,
          basketProducts: state.basketProducts.map(product => {
            if (product.id === action.payload.id) {
              return { ...product, count: product.count + action.payload.count };
            }
            return product;
          }),
        };
      } else {
        return {
          ...state,
          basketProducts: [...state.basketProducts, action.payload],
        };
      }

    case UPDATE_PRODUCT_BASKET:
      return {
        ...state,
        basketProducts: state.basketProducts.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, count: product.count + action.payload.count };
          }
          return product;
        }),
      };

    case DELETE_PRODUCT_BASKET:
      return {
        ...state,
        basketProducts: state.basketProducts.filter(product => {
          return product.id !== action.payload.id;
        }),
      };

    case CLEAR_BASKET:
      return {
        ...state,
        basketProducts: [],
      };


    default:
      return state;
  }
};
