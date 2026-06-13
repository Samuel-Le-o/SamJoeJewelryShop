import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductCard from '../components/ProductCard';
import { SAMJOE_MASTER_INVENTORY } from '../data/inventory';

export default function Home() {
  // Filter for items explicitly flagged as featured inside our storage ledger
  const featuredProducts = SAMJOE_MASTER_INVENTORY.filter(item => item.featured);

  return (
    <div class="bg-avant-dark min-h-screen text-white w-full">
      {/* 1. Cinematic Billboard Stage */}
      <HeroSlider />
      
      {/* 2. Curation Asset Grid Canvas Section */}
      <section class="max-w-7xl mx-auto px-6 py-20 space-y-12">
        
        {/* Structural Header Layout */}
        <div class="text-center space-y-2">
          <span class="text-[8px] tracking-[0.4em] uppercase text-avant-gold font-bold block">
            The Current Season Curation
          </span>
          <h2 class="font-serif text-2xl sm:text-3xl uppercase tracking-wider font-semibold text-white">
            Featured Intakes
          </h2>
          <div class="w-8 h-[1px] bg-avant-gold mx-auto mt-2" />
        </div>

        {/* Reusable Core Response Mapping Mesh */}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-4">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </section>
    </div>
  );
}