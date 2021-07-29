import { createContext, useContext, useReducer, useEffect } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [state, dispatch] = useReducer(wishlistReducer, []);
  return (
    <WishlistContext.Provider value={{ state, dispatch }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  return useContext(WishlistContext);
}

const wishlistReducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD":

      
      let flag = 0;
      state.map((item)=>{
        if(item.id===payload.id){
          flag = 1
        }
      })
      if(flag === 0){
        state = [...state,{...payload, wishlisted: true}];
        console.log(state)
        return state;
      }
      console.log(state)
      return state;

    case "REMOVE":
      return state.filter((item) => {

        return item.id !== payload.id;
      });

    default:
      break;
  }
};
