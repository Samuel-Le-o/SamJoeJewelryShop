import React, { useContext, useState } from 'react';
import { X, ShoppingCart, Heart } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

export default function QuickViewModal() {
  const { quickViewItem, setQuickViewItem, addToCart, toggleWishlist, wishlist } = useContext(AppContext);
  const [activeImg, setActiveImg] = useState(0);

  // Safeguard execution path if element is unpopulated
  if (!quickViewItem) return null;

  const isWishlisted = wishlist.some(item => item.id === quickViewItem.id);

  return (
    <div class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-hidden font-sans">
      
      {/* Absolute Ambient Dark Blur Overlay Backing */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setQuickViewItem(null)}
        class="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
      />

      {/* Main Center Console Interface Card Frame */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        class="relative w-full max-w-4xl bg-avant-surface border border-neutral-950 shadow-2xl grid grid-cols-1 md:grid-cols-12 max-h-[90vh] overflow-y-auto md:overflow-hidden rounded-none"
      >
        {/* Absolute Exit Handle Anchor */}
        <button 
          onClick={() => setQuickViewItem(null)}
          class="absolute top-4 right-4 z-30 p-2 bg-avant-dark/80 text-neutral-400 hover:text-white border border-neutral-900 transition-colors cursor-pointer"
          aria-label="Terminate Quick Inspection Overlay"
        >
          <X size={14} />
        </button>

        {/* Visual Engine Half (Left Mesh Block) */}
        <div class="md:col-span-6 bg-neutral-950 flex flex-col justify-between p-6 gap-4 border-b md:border-b-0 md:border-r border-neutral-900">
          <div class="w-full aspect-[4/5] overflow-hidden bg-avant-card relative">
            <img 
              src={quickViewItem.images[activeImg] || quickViewItem.images[0]} 
              alt={quickViewItem.name} 
              class="w-full h-full object-cover filter grayscale contrast-[1.02]" 
            />
          </div>

          {/* Alternative Thumb Array Loop */}
          {quickViewItem.images.length > 1 && (
            <div class="flex gap-2.5 overflow-x-auto pt-1">
              {quickViewItem.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImg(index)}
                  class={`w-14 h-16 border bg-avant-card overflow-hidden shrink-0 transition-colors cursor-pointer ${
                    index === activeImg ? 'border-avant-gold' : 'border-neutral-800 hover:border-neutral-600'
                  }`}
                >
                  <img src={img} alt="" class="w-full h-full object-cover filter grayscale" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Informational Spec Half (Right Mesh Block) */}
        <div class="md:col-span-6 p-8 flex flex-col justify-between overflow-y-auto max-h-[50vh] md:max-h-[85vh]">
          
          {/* Main Copy Context Block */}
          <div class="space-y-4">
            <div class="text-[8px] uppercase tracking-[0.3em] font-extrabold text-avant-gold">
              {quickViewItem.category} // {quickViewItem.subCategory}
            </div>
            
            <h2 class="font-serif text-xl sm:text-2xl tracking-tight text-white font-medium">
              {quickViewItem.name}
            </h2>
            
            <div class="font-sans font-bold text-sm text-avant-neon tracking-wide">
              ${quickViewItem.price.toLocaleString()}.00
            </div>

            <p class="text-[10px] text-neutral-400 normal-case tracking-normal font-light leading-relaxed pt-2 border-t border-neutral-900">
              {quickViewItem.desc}
            </p>

            {/* Dynamic Metric Spec Property Table */}
            {quickViewItem.specs && (
              <div class="pt-4 space-y-2">
                <div class="text-[8px] uppercase tracking-[0.2em] font-black text-neutral-500">Core Telemetry Architecture:</div>
                <div class="bg-avant-card/50 border border-neutral-900/60 p-3 space-y-1.5 text-[9px] font-medium tracking-wider">
                  {Object.entries(quickViewItem.specs).map(([key, val]) => (
                    <div key={key} class="flex justify-between items-center text-neutral-400 normal-case">
                      <span class="text-neutral-500 uppercase text-[8px] tracking-widest">{key}</span>
                      <span class="text-white text-right font-light">{val}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Operational Action Footer Block */}
          <div class="grid grid-cols-12 gap-3 pt-6 border-t border-neutral-900 mt-8">
            <button
              onClick={() => {
                addToCart(quickViewItem, 1);
                setQuickViewItem(null);
              }}
              class="col-span-9 bg-avant-gold text-avant-dark font-sans font-black text-[10px] uppercase tracking-[0.2em] py-3.5 flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 cursor-pointer"
            >
              <ShoppingCart size={12} class="stroke-[2.5]" /> Add To Cart
            </button>

            <button
              onClick={() => toggleWishlist(quickViewItem)}
              class={`col-span-3 border flex items-center justify-center transition-colors cursor-pointer ${
                isWishlisted 
                  ? 'border-avant-gold text-avant-gold bg-avant-gold/5' 
                  : 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
              }`}
              aria-label="Vault Toggle Link"
            >
              <Heart size={13} fill={isWishlisted ? "currentColor" : "none"} />
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}