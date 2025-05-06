
import React, { createContext, useContext, useReducer, useEffect } from "react";
import { CartItem, MenuItem } from "@/types";
import { toast } from "@/hooks/use-toast";

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
}

type CartAction =
  | { type: "ADD_TO_CART"; payload: MenuItem }
  | { type: "REMOVE_FROM_CART"; payload: string }
  | { type: "INCREASE_QUANTITY"; payload: string }
  | { type: "DECREASE_QUANTITY"; payload: string }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

const calculateCartTotals = (items: CartItem[]): { totalItems: number; totalAmount: number } => {
  return items.reduce(
    (totals, item) => {
      return {
        totalItems: totals.totalItems + item.quantity,
        totalAmount: totals.totalAmount + item.price * item.quantity,
      };
    },
    { totalItems: 0, totalAmount: 0 }
  );
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex !== -1) {
        // Item already exists, increase quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
        
        const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
        
        return {
          ...state,
          items: updatedItems,
          totalItems,
          totalAmount,
        };
      } else {
        // Add new item
        const newItem = { ...action.payload, quantity: 1 };
        const updatedItems = [...state.items, newItem];
        
        const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
        
        return {
          ...state,
          items: updatedItems,
          totalItems,
          totalAmount,
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      const { totalItems, totalAmount } = calculateCartTotals(filteredItems);
      
      return {
        ...state,
        items: filteredItems,
        totalItems,
        totalAmount,
      };
    }

    case "INCREASE_QUANTITY": {
      const updatedItems = state.items.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
      
      const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalAmount,
      };
    }

    case "DECREASE_QUANTITY": {
      const updatedItems = state.items.map(item =>
        item.id === action.payload && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0);
      
      const { totalItems, totalAmount } = calculateCartTotals(updatedItems);
      
      return {
        ...state,
        items: updatedItems,
        totalItems,
        totalAmount,
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
};

interface CartContextProps {
  cart: CartState;
  addToCart: (item: MenuItem) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("foodCart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        if (parsedCart && parsedCart.items) {
          const { totalItems, totalAmount } = calculateCartTotals(parsedCart.items);
          dispatch({ type: "CLEAR_CART" });
          parsedCart.items.forEach((item: CartItem) => {
            for (let i = 0; i < item.quantity; i++) {
              dispatch({ type: "ADD_TO_CART", payload: item });
            }
          });
        }
      } catch (error) {
        console.error("Failed to parse saved cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("foodCart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item: MenuItem) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart`,
      variant: "default",
    });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const increaseQuantity = (id: string) => {
    dispatch({ type: "INCREASE_QUANTITY", payload: id });
  };

  const decreaseQuantity = (id: string) => {
    dispatch({ type: "DECREASE_QUANTITY", payload: id });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
