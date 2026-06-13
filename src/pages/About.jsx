import React from 'react';
import { Shield, Eye, Gem, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div class="bg-avant-dark min-h-screen text-white w-full pt-10 pb-24 px-6 font-sans">
      <div class="max-w-7xl mx-auto space-y-20">
        
        {/* Editorial Header Section */}
        <div class="text-center space-y-4 max-w-3xl mx-auto border-b border-neutral-900 pb-12">
          <span class="text-[8px] tracking-[0.4em] uppercase text-avant-gold font-bold block">
            The Architecture of Luxury
          </span>
          <h1 class="font-serif text-3xl sm:text-5xl uppercase tracking-widest text-white leading-tight">
            Our Manifesto
          </h1>
          <div class="w-12 h-[1px] bg-avant-gold mx-auto my-4" />
          <p class="text-[11px] font-light text-neutral-400 normal-case tracking-wide leading-relaxed">
            Established on the core principles of elite curation, SamJoe Classy handles high-concept jewelry settings, premium atelier outerwear cuts, and precision personal electronics. We bridge international luxury logistics directly into the modern Ghanaian ecosystem.
          </p>
        </div>

        {/* Visual Dual Grid: Philosophy vs Imagery Split */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Block */}
          <div class="lg:col-span-6 space-y-6">
            <span class="text-[8px] tracking-[0.3em] uppercase text-avant-neon font-black block">
              01 // CORE ORIENTATION
            </span>
            <h2 class="font-serif text-xl sm:text-2xl uppercase tracking-wider text-white">
              Uncompromising Quality Control
            </h2>
            <p class="text-[11px] font-light text-neutral-400 normal-case tracking-wide leading-relaxed">
              Every single asset logged into our Master Inventory undergoes strict calibration analysis before catalog ingestion. From hand-checking custom-cut flawless diamond bezels to ensuring the structural thread counts of fine wool tailoring, we cater exclusively to individuals seeking elite precision.
            </p>
            <p class="text-[11px] font-light text-neutral-400 normal-case tracking-wide leading-relaxed">
              Based out of Sowutoum, Accra, our central studio architecture functions as an active private checkpoint hub, ensuring that deliveries to our local clients completely bypass traditional supply vulnerabilities.
            </p>
          </div>

          {/* Right Image Frame */}
          <div class="lg:col-span-6 aspect-[16/10] bg-neutral-950 overflow-hidden border border-neutral-900 filter grayscale contrast-[1.05]">
            <img 
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80" 
              alt="Luxury workspace design curation matrix" 
              class="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:scale-102 transition-all duration-700 ease-out"
            />
          </div>

        </div>

        {/* Tactical Value Columns Grid */}
        <section class="pt-12 border-t border-neutral-900/60">
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div class="bg-avant-surface border border-neutral-950 p-6 space-y-4">
              <Gem size={20} class="text-avant-gold stroke-[1.25]" />
              <h4 class="font-serif text-xs uppercase tracking-wider text-white">Bespoke Metallurgy</h4>
              <p class="text-[10px] text-neutral-500 normal-case font-light leading-relaxed">
                Precious high-karat gold bands and high-clarity diamond settings curated directly from certified international global extraction houses.
              </p>
            </div>

            <div class="bg-avant-surface border border-neutral-950 p-6 space-y-4">
              <Shield size={20} class="text-avant-gold stroke-[1.25]" />
              <h4 class="font-serif text-xs uppercase tracking-wider text-white">Escrow Protection</h4>
              <p class="text-[10px] text-neutral-500 normal-case font-light leading-relaxed">
                All order processing networks support secure Mobile Money channels and instant bank handshakes guarded by deep local encryption layers.
              </p>
            </div>

            <div class="bg-avant-surface border border-neutral-950 p-6 space-y-4">
              <Award size={20} class="text-avant-gold stroke-[1.25]" />
              <h4 class="font-serif text-xs uppercase tracking-wider text-white">Certified Grading</h4>
              <p class="text-[10px] text-neutral-500 normal-case font-light leading-relaxed">
                Assets retain unique diagnostic serialization tags, validating raw material grade architecture metrics flawlessly.
              </p>
            </div>

            <div class="bg-avant-surface border border-neutral-950 p-6 space-y-4">
              <Eye size={20} class="text-avant-gold stroke-[1.25]" />
              <h4 class="font-serif text-xs uppercase tracking-wider text-white">Visual Minimalisms</h4>
              <p class="text-[10px] text-neutral-500 normal-case font-light leading-relaxed">
                Eliminating structural noise to build deep, dark, and highly accessible consumer systems tailored precisely to client needs.
              </p>
            </div>

          </div>
        </section>

        {/* Corporate Slogan/Footer Banner */}
        <div class="bg-avant-surface border border-neutral-950 p-12 text-center space-y-2">
          <p class="font-serif italic text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            "True elegance resides in the complete elimination of unnecessary details."
          </p>
          <span class="text-[8px] tracking-[0.3em] uppercase text-neutral-600 font-bold block pt-4">
            SAMJOE CLASSY HOUSE LOGISTICS OPERATIONAL BLUEPRINT // 2026
          </span>
        </div>

      </div>
    </div>
  );
}