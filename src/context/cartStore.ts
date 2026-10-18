import { createContext, useContext } from 'react';
import type { ClothingProduct } from '../data/businessData';

export interface CartItem {
  product: ClothingProduct;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: ClothingProduct, size?: string, color?: string, quantity?: number) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  totalPrice: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
