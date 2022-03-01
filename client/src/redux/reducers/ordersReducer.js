import { DELETE_ORDER, INIT_ORDERS, ADD_ORDER } from '../actionTypes/ordersAT';
const initialState = { orders: [] };

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_ORDERS:
      return { ...state, orders: action.payload };

      case ADD_ORDER:
        return {
          ...state,
          orders: [...state.orders, action.payload],
        };

    case DELETE_ORDER:
      return {
        ...state,
        orders: state.orders.filter(item => item.id !== Number(action.payload)),
      };

    default:
      return state;
  }
};
