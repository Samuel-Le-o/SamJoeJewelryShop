import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingBag, Heart, User, Menu, X, ShieldAlert } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { setIsCartOpen, cartCount, wishlist } = useContext(AppContext);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Active Link Styling Blueprint
  const getLinkStyle = ({ isActive }) => 
    `hover:text-avant-gold transition-colors duration-300 tracking-[0.25em] uppercase ${
      isActive ? 'text-avant-gold' : 'text-neutral-300'
    }`;

  return (
    <nav class="bg-avant-dark/95 backdrop-blur-md text-white fixed top-0 left-0 w-full z-40 border-b border-neutral-950 text-[10px] font-bold h-20">
      <div class="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        
        {/* Mobile Hamburger Trigger */}
        <button 
          class="md:hidden text-avant-gold p-2 -ml-2 cursor-pointer" 
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Queue"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Anchor Architecture */}
        <div class="hidden md:flex items-center gap-8">
          <NavLink to="/shop" class={getLinkStyle}>Shop</NavLink>
          <NavLink to="/about" class={getLinkStyle}>About Us</NavLink>
          <NavLink to="/contact" class={getLinkStyle}>Contact</NavLink>
        </div>

        {/* Master Brand Identity Centerpiece */}
        <Link to="/" class="flex items-center gap-2 group">
          <ShieldAlert size={14} class="text-avant-gold transform group-hover:rotate-180 transition-transform duration-700 ease-out" />
          <span class="font-serif text-xs sm:text-sm tracking-[0.3em] text-white">
            SAMJOE <span class="font-sans font-light text-[10px] text-avant-muted">.CLASSY</span>
          </span>
        </Link>

        {/* Functional Vault Actions Tray */}
        <div class="flex items-center gap-4 sm:gap-6">
          <Link 
            to="/wishlist" 
            class="text-neutral-400 hover:text-avant-gold transition-colors relative p-1"
            aria-label="View Wishlist Vault"
          >
            <Heart size={16} />
            {wishlist.length > 0 && (
              <span class="absolute -top-0.5 -right-0.5 w-2 h-2 bg-avant-gold rounded-full" />
            )}
          </Link>

          <Link 
            to="/account" 
            class="text-neutral-400 hover:text-avant-gold transition-colors p-1"
            aria-label="View Account Profiling"
          >
            <User size={16} />
          </Link>

          <button 
            onClick={() => setIsCartOpen(true)} 
            class="flex items-center gap-2 hover:text-avant-gold transition-colors relative p-1 cursor-pointer"
            aria-label="Open Selection Vault Drawer"
          >
            <ShoppingBag size={16} class="text-avant-gold" />
            <span class="hidden sm:inline text-[9px] text-neutral-400 font-medium tracking-[0.15em]">Cart</span>
            <span class="bg-avant-gold text-avant-dark font-sans font-black text-[9px] px-1.5 py-0.5 -mt-1">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Animated Mobile Drawer Panel Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            class="absolute top-20 left-0 w-full bg-avant-surface border-b border-neutral-950 flex flex-col px-8 py-8 gap-5 border-t border-neutral-900 md:hidden shadow-2xl"
          >
            <NavLink to="/shop" onClick={() => setMobileOpen(false)} class={getLinkStyle}>Shop</NavLink>
            <NavLink to="/about" onClick={() => setMobileOpen(false)} class={getLinkStyle}>About Us</NavLink>
            <NavLink to="/contact" onClick={() => setMobileOpen(false)} class={getLinkStyle}>Contact</NavLink>
            <NavLink to="/wishlist" onClick={() => setMobileOpen(false)} class={getLinkStyle}>Wishlist</NavLink>
            <NavLink to="/account" onClick={() => setMobileOpen(false)} class={getLinkStyle}>Account Terminal</NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}