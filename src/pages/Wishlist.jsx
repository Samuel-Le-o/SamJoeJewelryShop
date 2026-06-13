import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import ProductCard from '../components/ProductCard';
import { ArrowLeft, Trash2 } from 'lucide-react';

export default function Wishlist() {
  const { wishlist, clearWishlist } = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div class="bg-avant-dark min-h-screen text-white w-full pt-10 pb-24 px-6 font-sans">
      <div class="max-w-7xl mx-auto space-y-10">
        
        {/* Wishlist Header Action Row */}
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-neutral-900 pb-6">
          <div class="space-y-2">
            <h1 class="font-serif text-3xl uppercase tracking-widest text-white">The Hold Vault</h1>
            <p class="text-[9px] tracking-[0.2em] text-avant-gold uppercase font-semibold">
              {wishlist.length} Curated Assets Under Consideration Ledger
            </p>
          </div>
          
          {wishlist.length > 0 && (
            <button
              onClick={clearWishlist}
              class="inline-flex items-center gap-1.5 text-[8px] uppercase font-bold tracking-widest text-neutral-500 hover:text-red-400 transition-colors cursor-pointer bg-transparent border-none p-0 self-start sm:self-auto"
            >
              <Trash2 size={11} /> Purge Hold Vault
            </button>
          )}
        </div>

        {/* Dynamic Canvas Routing Flow Context Switch */}
        {wishlist.length === 0 ? (
          /* Empty Vault State Visual Canvas */
          <div class="border border-neutral-900 border-dashed py-32 text-center space-y-4">
            <span class="text-[10px] tracking-[0.3em] uppercase text-neutral-600 font-bold block">
              Hold Matrix Vacant
            </span>
            <p class="text-[9px] text-neutral-500 max-w-xs mx-auto normal-case font-light leading-relaxed">
              No tactical assets or custom jewelry profiles are currently staged for monitoring. 
            </p>
            <button 
              onClick={() => navigate('/shop')}
              class="inline-flex items-center gap-2 border border-neutral-800 text-neutral-300 text-[9px] uppercase font-bold tracking-widest px-6 py-3 hover:border-avant-gold hover:text-avant-gold transition-colors cursor-pointer mt-2"
            >
              <ArrowLeft size={11} /> Explore Index Index
            </button>
          </div>
        ) : (
          /* Active Holds Responsive Mesh Grid Map */
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}