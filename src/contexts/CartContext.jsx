import React, { useState, useEffect } from 'react';
import { CartContext } from './CartContext.js';

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    const initialCart = savedCart ? JSON.parse(savedCart) : [];
    return initialCart.map((item) => ({
      ...item,
      quantity: item.quantity || 1,
    }));
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
