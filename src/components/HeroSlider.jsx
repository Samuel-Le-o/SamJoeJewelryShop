import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?auto=format&fit=crop&w=1600&q=80",
    tagline: "The Jewelry Core",
    headline: "Flawless Settings",
    sub: "Hand-calibrated precious metal bands and custom-cut diamond bezels."
  },
  {
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1600&q=80",
    tagline: "Atelier Apparel",
    headline: "Monarch Tailoring",
    sub: "Pure Italian cashmere double-breasted jackets and unstructured silken silhouettes."
  },
  {
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1600&q=80",
    tagline: "Elite Hardware",
    headline: "Tactical Systems",
    sub: "Custom mechanical terminal work stations built with aerospace titanium."
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % SLIDES.length);
    }, 6000); // Transitions automatically every 6 seconds
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent(prev => (prev + 1) % SLIDES.length);
  const prevSlide = () => setCurrent(prev => (prev - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section class="relative h-[85vh] w-full bg-neutral-950 overflow-hidden flex items-center justify-center">
      
      {/* Background Image Layer with Crossfade Physics */}
      <div class="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 0.35, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            class="w-full h-full bg-cover bg-center mix-blend-luminosity"
            style={{ backgroundImage: `url('${SLIDES[current].image}')` }}
          />
        </AnimatePresence>
        {/* Luxury Vignette Gradient Overlay */}
        <div class="absolute inset-0 bg-gradient-to-t from-avant-dark via-transparent to-black/50" />
      </div>

      {/* Typography Layout Content Frame */}
      <div class="relative z-10 max-w-4xl text-center px-6 space-y-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            class="space-y-4"
          >
            <span class="text-[10px] tracking-[0.4em] text-avant-gold font-bold uppercase block">
              {SLIDES[current].tagline}
            </span>
            <h1 class="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-none">
              {SLIDES[current].headline}
            </h1>
            <p class="font-sans text-[11px] sm:text-xs tracking-wider text-neutral-400 font-light max-w-lg mx-auto leading-relaxed normal-case">
              {SLIDES[current].sub}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Call to Actions */}
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.4 }}
          class="pt-6"
        >
          <button 
            onClick={() => navigate('/shop')}
            class="border border-avant-gold text-avant-gold text-[10px] uppercase font-bold tracking-[0.25em] px-8 py-3.5 hover:bg-avant-gold hover:text-avant-dark transition-all duration-500 ease-out cursor-pointer"
          >
            Explore Master Vault
          </button>
        </motion.div>
      </div>

      {/* Manual Directional Controls */}
      <button 
        onClick={prevSlide}
        class="absolute left-4 z-20 text-neutral-500 hover:text-avant-gold p-2 transition-colors cursor-pointer hidden sm:block"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} class="stroke-[1.5]" />
      </button>
      <button 
        onClick={nextSlide}
        class="absolute right-4 z-20 text-neutral-500 hover:text-avant-gold p-2 transition-colors cursor-pointer hidden sm:block"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} class="stroke-[1.5]" />
      </button>

      {/* Slide Index Progress Indicators */}
      <div class="absolute bottom-6 z-20 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            class={`h-[2px] transition-all duration-500 cursor-pointer ${idx === current ? 'w-8 bg-avant-gold' : 'w-2 bg-neutral-800'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

    </section>
  );
}