import { ADD_PRODUCT, INIT_CURRENT_PRODUCT_CARD, FILTER_PRODUCTS_LIST, CHANGE_PRODUCT_STATUS, INIT_PRODUCTS_LIST, DELETE_PRODUCT, UPDATE_PRODUCT_IN_STOK, UPDATE_PRODUCT} from '../actionsTypes/productsAT';


const initialState = { products: [], currentProduct: {}, productsFilter:[]};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PRODUCT_IN_STOK:
      return {
        ...state,
        products: state.currentProduct.SizesOfProducts.map(product => {
          if (product.sizeNumber === Number(action.payload.size)) {
            return product.itemsLeft - action.payload.numberOfItems
          }
          return product;
        }),
      };

    case ADD_PRODUCT:
      const newProduct = action.payload.product;

      return {
       
      };

    case INIT_PRODUCTS_LIST:
      return { ...state, products: action.payload ,productsFilter:action.payload};

    case DELETE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== Number(action.payload)),
      };

    case FILTER_PRODUCTS_LIST:
      console.log(action.payload);
      return {
        ...state,
        productsFilter: state.products.filter(product => product.gender === action.payload),
      };

    case INIT_CURRENT_PRODUCT_CARD:
      return {
        ...state,
        currentProduct: action.payload,
      };

    case UPDATE_PRODUCT:
      const updatedProduct = action.payload;
      return {
        ...state,
        products: state.products.map(el => {
          if (el.id === action.payload.id) {
            return {
              name: updatedProduct.name,
              description: updatedProduct.description,
              price: updatedProduct.price,
              photo: updatedProduct.photo,

            };
          } else {
            return el;
          }
        }),
      };

      case CHANGE_PRODUCT_STATUS:
        return {
          ...state,
          products: state.products.filter(product => product.id === Number(action.payload)),
        };


    default:
      return state;
  }
};
