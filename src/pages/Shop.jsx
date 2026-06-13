import React, { useState, useMemo } from 'react';
import { SAMJOE_MASTER_INVENTORY } from '../data/inventory';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal, LayoutGrid } from 'lucide-react';

const CATEGORIES = ["All Assets", "Jewelry", "Clothing", "Electronics"];

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All Assets");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [priceRange, setPriceRange] = useState(10000); // Max cap matching our luxury watches

  // High-performance useMemo filtering computation engine
  const filteredProducts = useMemo(() => {
    return SAMJOE_MASTER_INVENTORY.filter(product => {
      const matchesCategory = selectedCategory === "All Assets" || product.category === selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            product.subCategory.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesPrice = product.price <= priceRange;
      
      return matchesCategory && matchesSearch && matchesPrice;
    }).sort((a, b) => {
      if (sortOption === "price-low") return a.price - b.price;
      if (sortOption === "price-high") return b.price - a.price;
      if (sortOption === "rating") return b.rating - a.rating;
      return 0; // Maintain natural inventory schema sequence
    });
  }, [selectedCategory, searchQuery, sortOption, priceRange]);

  return (
    <div class="bg-avant-dark min-h-screen text-white w-full pt-10 pb-20 px-6">
      <div class="max-w-7xl mx-auto space-y-10">
        
        {/* Page Context Branding Header */}
        <div class="space-y-2 border-b border-neutral-900 pb-6">
          <h1 class="font-serif text-3xl uppercase tracking-widest text-white">The Catalog Index</h1>
          <p class="text-[9px] tracking-[0.2em] text-avant-gold uppercase font-semibold">
            Displaying {filteredProducts.length} Authenticated Architecture Units
          </p>
        </div>

        {/* Tactical Control Console Layer (Search & Segment Controls) */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Lateral Filtering Control Deck Sidebar */}
          <div class="lg:col-span-3 bg-avant-surface border border-neutral-950 p-6 space-y-8">
            
            {/* Search Input Box */}
            <div class="space-y-2">
              <label class="text-[8px] uppercase tracking-[0.25em] text-neutral-500 font-black flex items-center gap-1.5">
                <Search size={10} class="text-avant-gold" /> Filter Keywords
              </label>
              <div class="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="SEARCH TAGS..." 
                  class="pr-10 font-mono tracking-wider placeholder:text-neutral-700"
                />
              </div>
            </div>

            {/* Category Quick Segment Toggles */}
            <div class="space-y-3">
              <label class="text-[8px] uppercase tracking-[0.25em] text-neutral-500 font-black flex items-center gap-1.5">
                <LayoutGrid size={10} class="text-avant-gold" /> Core Matrices
              </label>
              <div class="flex flex-col gap-1">
                {CATEGORIES.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    class={`text-left text-[10px] uppercase tracking-widest font-bold py-2 px-3 border transition-all duration-300 cursor-pointer ${
                      selectedCategory === cat 
                        ? 'bg-avant-gold text-avant-dark border-avant-gold font-black' 
                        : 'border-transparent text-neutral-400 hover:text-white hover:bg-neutral-900/40'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Dynamic Value Metrics Slider */}
            <div class="space-y-3">
              <div class="flex justify-between items-center text-[8px] uppercase tracking-[0.25em] text-neutral-500 font-black">
                <span>Value Ceiling</span>
                <span class="text-avant-neon font-sans font-bold">${priceRange.toLocaleString()}</span>
              </div>
              <input 
                type="range" 
                min="500" 
                max="10000" 
                step="500"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                class="w-full accent-avant-gold bg-neutral-950 h-1 cursor-pointer appearance-none"
              />
            </div>

            {/* Matrix Arrangement Order Dropdown */}
            <div class="space-y-2">
              <label class="text-[8px] uppercase tracking-[0.25em] text-neutral-500 font-black flex items-center gap-1.5">
                <SlidersHorizontal size={10} class="text-avant-gold" /> Array Sequence
              </label>
              <select 
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                class="w-full bg-neutral-950 border border-neutral-800 text-white font-bold tracking-widest uppercase text-[9px] p-3 focus:outline-none focus:border-avant-gold rounded-none"
              >
                <option value="default">Default Catalog Sorting</option>
                <option value="price-low">Valuation: Ascending</option>
                <option value="price-high">Valuation: Descending</option>
                <option value="rating">System Grading Architecture</option>
              </select>
            </div>

          </div>

          {/* Right Core Products Grid View Canvas Area */}
          <div class="lg:col-span-9">
            {filteredProducts.length === 0 ? (
              <div class="border border-neutral-900 border-dashed py-32 text-center space-y-3">
                <div class="text-[10px] tracking-[0.3em] uppercase text-neutral-600 font-bold">Zero Telemetry Matches Found</div>
                <p class="text-[9px] text-neutral-500 max-w-xs mx-auto normal-case font-light leading-relaxed">
                  No core assets configured within these parameters. Try loosening your sidebar filter options.
                </p>
              </div>
            ) : (
              <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}