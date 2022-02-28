import { INIT_PRODUCT_CART, ADD_PRODUCT_CART, UPDATE_PRODUCT_CART, DELETE_PRODUCT_CART, CLEAR_CART } from '../actionsTypes/cartAT';

const initialState = {
  cartProducts: JSON.parse(localStorage.getItem('cart')) || [],
  
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {

    case INIT_PRODUCT_CART:
      return { ...state, products: action.payload };

    case ADD_PRODUCT_CART:
      const addedProduct = state.cartProducts.find(
        product => (product.id === action.payload.id) && (product.size === action.payload.size)
      );
      if (addedProduct) {
        return {
          ...state,
          cartProducts: state.cartProducts.map(product => {
            if ((product.id === action.payload.id) && (product.size === action.payload.size)) {
              return { ...product, numberOfItems: product.numberOfItems + action.payload.numberOfItems };
            }
            return product;
          }),
        };
      } else {
        return {
          ...state,
          cartProducts: [...state.cartProducts, action.payload],
        };
      }

    case UPDATE_PRODUCT_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.map(product => {
          if (product.id === action.payload.id) {
            return { ...product, count: product.numberOfItems + action.payload.numberOfItems };
          }
          return product;
        }),
      };

    case DELETE_PRODUCT_CART:
      return {
        ...state,
        cartProducts: state.cartProducts.filter(product => {
          return product.id !== action.payload.id;
        }),
      };

    case CLEAR_CART:
      return {
        ...state,
        cartProducts: [],
      };


    default:
      return state;
  }
};
