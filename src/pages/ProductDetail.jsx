import React, { useState, useContext, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { SAMJOE_MASTER_INVENTORY } from '../data/inventory';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, Heart, Shield, RotateCcw, Truck, ChevronRight } from 'lucide-react';

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, wishlist, trackRecentView, recentViews } = useContext(AppContext);
  
  const [activeImage, setActiveImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // 1. Locate Core Target Asset Schema
  const product = useMemo(() => {
    return SAMJOE_MASTER_INVENTORY.find(item => item.id === id);
  }, [id]);

  // Handle fallback capture routing if user manually passes bad telemetry IDs
  useEffect(() => {
    if (!product) {
      navigate('/shop');
    } else {
      // Record this interaction inside the client's recently viewed local array hook
      trackRecentView(product);
      // Reset active thumbnail states back to base zero index on item switches
      setActiveImage(0);
      setQuantity(1);
    }
  }, [product, id, navigate]);

  if (!product) return null;

  const isWishlisted = wishlist.some(item => item.id === product.id);

  // 2. Compute Segment Matrix Recommendations (Exclude current item view)
  const structuralRecommendations = SAMJOE_MASTER_INVENTORY
    .filter(item => item.category === product.category && item.id !== product.id)
    .slice(0, 3);

  return (
    <div class="bg-avant-dark min-h-screen text-white w-full pt-6 pb-24 px-6 font-sans">
      <div class="max-w-7xl mx-auto space-y-16">
        
        {/* Minimalist Micro Breadcrumb Ribbon */}
        <div class="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-neutral-500">
          <Link to="/" class="hover:text-white transition-colors">House</Link>
          <ChevronRight size={10} />
          <Link to="/shop" class="hover:text-white transition-colors">The Index</Link>
          <ChevronRight size={10} />
          <span class="text-avant-gold truncate">{product.name}</span>
        </div>

        {/* Core Showcase Stage (Image Deck vs Informational Form Split) */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT PANEL: Imagery Suite Block */}
          <div class="lg:col-span-7 space-y-4">
            <div class="aspect-[4/5] w-full bg-neutral-950 overflow-hidden border border-neutral-900 relative">
              <img 
                src={product.images[activeImage] || product.images[0]} 
                alt={product.name} 
                class="w-full h-full object-cover filter grayscale contrast-[1.02]" 
              />
            </div>
            
            {/* Gallery Cluster Array Strip */}
            {product.images.length > 1 && (
              <div class="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    class={`w-20 h-24 border overflow-hidden bg-avant-card shrink-0 transition-colors cursor-pointer ${
                      idx === activeImage ? 'border-avant-gold' : 'border-neutral-800 hover:border-neutral-600'
                    }`}
                  >
                    <img src={img} alt="" class="w-full h-full object-cover filter grayscale" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT PANEL: Metadata Telemetry Desk */}
          <div class="lg:col-span-5 space-y-6">
            
            {/* Asset Headline Profile */}
            <div class="space-y-2 border-b border-neutral-900 pb-6">
              <span class="text-[8px] uppercase tracking-[0.3em] font-extrabold text-avant-gold block">
                {product.category} // {product.subCategory}
              </span>
              <h1 class="font-serif text-2xl sm:text-3xl font-medium tracking-tight text-white uppercase leading-tight">
                {product.name}
              </h1>
              <div class="pt-3 font-sans font-black text-lg text-avant-neon tracking-wider">
                ${product.price.toLocaleString()}.00
              </div>
            </div>

            {/* General Copy Spec Description */}
            <p class="text-[11px] font-light tracking-wide leading-relaxed text-neutral-400 normal-case">
              {product.desc}
            </p>

            {/* Dynamic Core Specification Grid Table */}
            {product.specs && (
              <div class="space-y-2 pt-2">
                <div class="text-[8px] uppercase tracking-[0.2em] font-extrabold text-neutral-500">System Parameters Architecture:</div>
                <div class="bg-avant-surface border border-neutral-950 p-4 space-y-2 text-[9px] font-medium tracking-wider">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} class="flex justify-between items-center text-neutral-400 normal-case border-b border-neutral-900/40 pb-1.5 last:border-b-0 last:pb-0">
                      <span class="text-neutral-500 uppercase text-[8px] tracking-widest">{key}</span>
                      <span class="text-white text-right font-light">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* User Interaction Intake Console Bar */}
            <div class="space-y-4 pt-4">
              <div class="flex items-center gap-3">
                
                {/* Numeric Volume Adjust Meter */}
                <div class="flex items-center border border-neutral-800 bg-neutral-950 h-12 text-[11px]">
                  <button 
                    onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                    class="px-4 h-full text-neutral-500 hover:text-white transition-colors cursor-pointer font-bold"
                  >
                    -
                  </button>
                  <span class="px-2 font-mono font-bold text-white text-center min-w-[24px]">
                    {quantity}
                  </span>
                  <button 
                    onClick={() => setQuantity(prev => prev + 1)}
                    class="px-4 h-full text-neutral-500 hover:text-white transition-colors cursor-pointer font-bold"
                  >
                    +
                  </button>
                </div>

                {/* Primary Intake Command Trigger */}
                <button
                  onClick={() => addToCart(product, quantity)}
                  class="flex-grow bg-avant-gold text-avant-dark font-sans font-black text-[10px] uppercase tracking-[0.25em] h-12 flex items-center justify-center gap-2 hover:bg-white transition-colors duration-300 cursor-pointer"
                >
                  <ShoppingCart size={13} class="stroke-[2.5]" /> Secure Asset Acquisition
                </button>

                {/* Wishlist Secondary Hold Anchor */}
                <button
                  onClick={() => toggleWishlist(product)}
                  class={`w-12 h-12 border flex items-center justify-center transition-colors shrink-0 cursor-pointer ${
                    isWishlisted 
                      ? 'border-avant-gold text-avant-gold bg-avant-gold/5' 
                      : 'border-neutral-800 text-neutral-400 hover:text-white hover:border-neutral-600'
                  }`}
                  aria-label="Toggle Asset Hold Saved State"
                >
                  <Heart size={14} fill={isWishlisted ? "currentColor" : "none"} />
                </button>
              </div>
            </div>

            {/* Luxury Logistical Assurances */}
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-neutral-900 text-neutral-500 text-[8px] font-bold tracking-widest uppercase">
              <div class="flex items-center gap-2">
                <Truck size={14} class="text-avant-gold shrink-0" />
                <span>Express Insured Delivery</span>
              </div>
              <div class="flex items-center gap-2">
                <RotateCcw size={14} class="text-avant-gold shrink-0" />
                <span>Complimentary Vault Returns</span>
              </div>
              <div class="flex items-center gap-2">
                <Shield size={14} class="text-avant-gold shrink-0" />
                <span>Certified Authenticity</span>
              </div>
            </div>

          </div>
        </div>

        {/* FOOTER SHELF: Cross-Reference Category Asset Recommendations */}
        {structuralRecommendations.length > 0 && (
          <section class="space-y-8 pt-8 border-t border-neutral-900">
            <div class="space-y-1">
              <span class="text-[8px] tracking-[0.3em] uppercase text-avant-gold font-bold block">Cross-Reference Telemetry</span>
              <h3 class="font-serif text-lg uppercase tracking-wider font-medium text-white">Parallel Curations</h3>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {structuralRecommendations.map(item => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}