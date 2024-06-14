import { createContext } from "react";
import { ProductType } from "../Products/product.types";
import { CartType, ReducerActionType } from "./cart.types";

export const CartContext = createContext<CartType | null>(null);

export const cartInitialState: CartType = {
  addToCart: [],
  product: [],
};

export const cartReducerFn = (
  state: CartType,
  action: ReducerActionType
): CartType => {
  const { type, payload } = action;

  switch (type) {
    case "addToCart":
      const newCart = state.addToCart;
      newCart.push(payload as ProductType);
      return { ...state, addToCart: newCart };

    default:
      return state;
  }
};
