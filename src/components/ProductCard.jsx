import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Eye, ShoppingCart } from 'lucide-react';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const { toggleWishlist, wishlist, addToCart, setQuickViewItem } = useContext(AppContext);
  
  // Track if item currently sits inside the user's local state array
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      class="bg-avant-card border border-neutral-900 flex flex-col justify-between hover:border-neutral-700 transition-all duration-500 overflow-hidden relative group"
    >
      {/* Visual Canvas Block */}
      <div class="relative overflow-hidden aspect-[4/5] bg-neutral-950">
        <img 
          src={product.images[0]} 
          alt={product.name} 
          loading="lazy"
          class="w-full h-full object-cover filter grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
        />
        
        {/* Soft Shadow Vignette Bottom Gradient Layer */}
        <div class="absolute inset-0 bg-gradient-to-t from-avant-dark/80 via-transparent to-transparent opacity-80" />
        
        {/* Dynamic Absolute Interaction Controls Tray */}
        <div class="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300 z-20">
          <button 
            onClick={() => toggleWishlist(product)}
            class={`p-3 bg-avant-dark/90 backdrop-blur-md border border-neutral-800 transition-colors cursor-pointer ${
              isWishlisted ? 'text-avant-gold' : 'text-neutral-400 hover:text-white'
            }`}
            aria-label="Toggle Asset Hold Saved State"
          >
            <Heart size={13} fill={isWishlisted ? "currentColor" : "none"} />
          </button>
          
          <button 
            onClick={() => setQuickViewItem(product)}
            class="p-3 bg-avant-dark/90 backdrop-blur-md border border-neutral-800 text-neutral-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Launch Quick Diagnostic Modal Overlay"
          >
            <Eye size={13} />
          </button>
        </div>
      </div>
      
      {/* Metadata Context Descriptions Box */}
      <div class="p-6 space-y-4 bg-avant-card z-10 flex-grow flex flex-col justify-between">
        <div class="space-y-1">
          <div class="text-[8px] uppercase tracking-[0.25em] font-extrabold text-avant-gold">
            {product.category} — {product.subCategory}
          </div>
          <h3 class="font-serif text-sm tracking-tight text-white line-clamp-1 group-hover:text-avant-neon transition-colors duration-300">
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </h3>
        </div>
        
        {/* Action Valuation Pricing Line */}
        <div class="flex items-center justify-between pt-3 border-t border-neutral-900/60 mt-auto">
          <span class="font-sans font-bold text-xs text-avant-neon tracking-wide">
            ${product.price.toLocaleString()}.00
          </span>
          <button 
            onClick={() => addToCart(product, 1)}
            class="inline-flex items-center gap-1.5 text-[9px] uppercase font-bold tracking-widest text-neutral-300 hover:text-avant-gold transition-colors cursor-pointer"
          >
            <ShoppingCart size={11} /> Acquire
          </button>
        </div>
      </div>
    </motion.div>
  );
}