import { createContext, useContext, useReducer, useEffect } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

const cartReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":
      return [[...state, { ...payload, quantity: 1 }]];

    case "INCREMENT":
      return state.map((item) => {
        if (item.id === payload.id) {
          return { ...payload, quantity: payload.quantity + 1 };
        }
        return item;
      });

    case "DECREMENT":
      if (payload.quantity > 1) {
        return state.map((item) => {
          if (item.id === payload.id) {
            return { ...payload, quantity: payload.quantity - 1 };
          }
          return item;
        });
      } else {
        return state.filter((item) => item.id !== payload.id);
      }

    case "REMOVE":
      return state.filter((item) => {
        return item.id !== payload.id;
      });

    default:
      break;
  }
};
