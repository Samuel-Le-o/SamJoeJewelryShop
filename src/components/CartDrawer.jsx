import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Trash2, Plus, Minus, Lock } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

export default function CartDrawer() {
  const { cart, setIsCartOpen, updateQuantity, removeFromCart, cartTotal } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div class="fixed inset-0 z-50 overflow-hidden font-sans">
      
      {/* Dark Ambient Backdrop Click Layer */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setIsCartOpen(false)}
        class="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
      />

      {/* Main Structural Vault Slider Panel */}
      <motion.div 
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.35, ease: "easeOut" }}
        class="absolute right-0 top-0 h-full w-full max-w-md bg-avant-surface border-l border-neutral-900 shadow-2xl flex flex-col justify-between"
      >
        {/* Header Action Row */}
        <div class="p-6 border-b border-neutral-900 flex items-center justify-between bg-avant-card">
          <div class="space-y-1">
            <h2 class="font-serif text-sm tracking-widest text-white uppercase font-bold">Selection Vault</h2>
            <p class="text-[8px] text-avant-gold tracking-[0.2em] uppercase font-semibold">
              {cart.length} Core Units Registered
            </p>
          </div>
          <button 
            onClick={() => setIsCartOpen(false)}
            class="text-neutral-500 hover:text-white p-2 transition-colors cursor-pointer"
            aria-label="Secure Close Handle"
          >
            <X size={16} />
          </button>
        </div>

        {/* Mid Container Scroll Array */}
        <div class="flex-grow overflow-y-auto p-6 space-y-4 scrollbar-thin">
          {cart.length === 0 ? (
            <div class="h-64 flex flex-col items-center justify-center text-center space-y-3">
              <span class="text-[10px] tracking-[0.3em] text-neutral-600 uppercase font-bold">
                Vault Status: Empty
              </span>
              <p class="text-[9px] text-neutral-500 normal-case max-w-[200px] font-light leading-relaxed">
                Your high-concept asset container is unpopulated. Browse the current collection index to load elements.
              </p>
            </div>
          ) : (
            cart.map(item => (
              <div 
                key={item.id} 
                class="flex gap-4 p-4 bg-avant-card border border-neutral-900/60 items-center justify-between"
              >
                {/* Product Micro Frame */}
                <img 
                  src={item.images[0]} 
                  alt={item.name} 
                  class="w-16 h-20 object-cover bg-neutral-950 filter grayscale shrink-0" 
                />
                
                {/* Meta Description Ledger */}
                <div class="flex-grow space-y-1">
                  <h4 class="text-[11px] font-serif text-white tracking-tight font-medium line-clamp-1">
                    {item.name}
                  </h4>
                  <div class="text-[10px] font-bold text-avant-neon">
                    ${(item.price * item.quantity).toLocaleString()}.00
                  </div>
                  
                  {/* Digital Meter Counting Pod */}
                  <div class="flex items-center gap-2 pt-2">
                    <div class="flex items-center border border-neutral-800 bg-neutral-950 text-[9px]">
                      <button 
                        onClick={() => updateQuantity(item.id, -1)}
                        class="px-2 py-1 text-neutral-500 hover:text-white transition-colors cursor-pointer"
                      >
                        <Minus size={10} />
                      </button>
                      <span class="px-2 font-bold text-white text-center min-w-4">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, 1)}
                        class="px-2 py-1 text-neutral-500 hover:text-white transition-colors cursor-pointer"
                      >
                        <Plus size={10} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Disposal Vector Command */}
                <button 
                  onClick={() => removeFromCart(item.id)}
                  class="text-neutral-600 hover:text-red-400 p-2 transition-colors cursor-pointer self-start"
                  aria-label="Purge Item Ledger Row"
                >
                  <Trash2 size={12} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Valuation Total & Escrow Trigger Block */}
        {cart.length > 0 && (
          <div class="p-6 bg-avant-card border-t border-neutral-900 space-y-4">
            <div class="flex items-center justify-between text-[10px] tracking-[0.2em] font-extrabold uppercase">
              <span class="text-neutral-400">Aggregated Total:</span>
              <span class="text-white font-sans text-xs text-avant-neon">
                ${cartTotal.toLocaleString()}.00
              </span>
            </div>
            
            <button 
              onClick={() => {
                setIsCartOpen(false);
                navigate('/checkout');
              }}
              class="w-full bg-avant-gold text-avant-dark font-sans font-black text-[10px] uppercase tracking-[0.25em] py-4 flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 cursor-pointer"
            >
              <Lock size={12} class="stroke-[2.5]" /> Secure Escrow Checkout
            </button>
            
            <p class="text-[8px] text-center text-neutral-600 normal-case tracking-normal font-light">
              Logistics routed directly via armored encryption gateways.
            </p>
          </div>
        )}

      </motion.div>
    </div>
  );
}