import React, { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // Safe Initialization from localStorage
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem('sj_cart')) || []);
  const [wishlist, setWishlist] = useState(() => JSON.parse(localStorage.getItem('sj_wishlist')) || []);
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('sj_user')) || null);
  const [recentViews, setRecentViews] = useState(() => JSON.parse(localStorage.getItem('sj_recents')) || []);
  
  // UI State Controls
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewItem, setQuickViewItem] = useState(null);

  // Sync state mutations cleanly to storage
  useEffect(() => localStorage.setItem('sj_cart', JSON.stringify(cart)), [cart]);
  useEffect(() => localStorage.setItem('sj_wishlist', JSON.stringify(wishlist)), [wishlist]);
  useEffect(() => localStorage.setItem('sj_user', JSON.stringify(user)), [user]);
  useEffect(() => localStorage.setItem('sj_recents', JSON.stringify(recentViews)), [recentViews]);

  // Cart Management Engine
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
        );
      }
      return [...prev, { ...product, quantity: qty }];
    });
    setIsCartOpen(true); // Open side cart drawer immediately for visual feedback
  };

  const removeFromCart = (productId) => {
    setCart(prev => prev.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart(prev => prev.map(item => {
      if (item.id === productId) {
        const newQty = item.quantity + amount;
        return newQty > 0 ? { ...item, quantity: newQty } : item;
      }
      return item;
    }));
  };

  // Wishlist Engine
  const toggleWishlist = (product) => {
    setWishlist(prev => 
      prev.some(item => item.id === product.id)
        ? prev.filter(item => item.id !== product.id)
        : [...prev, product]
    );
  };

  // Recently Viewed History Tracker
  const trackRecentView = (product) => {
    setRecentViews(prev => {
      const filtered = prev.filter(item => item.id !== product.id);
      return [product, ...filtered].slice(0, 4); // Keep maximum 4 items
    });
  };

  // Financial Computations
  const cartTotal = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);
  const cartCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <AppContext.Provider value={{
      cart, setCart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount,
      isCartOpen, setIsCartOpen,
      wishlist, toggleWishlist,
      user, setUser,
      recentViews, trackRecentView,
      quickViewItem, setQuickViewItem
    }}>
      {children}
    </AppContext.Provider>
  );
};