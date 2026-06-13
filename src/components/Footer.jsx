import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="bg-neutral-950 text-neutral-400 text-[10px] tracking-[0.25em] uppercase font-bold border-t border-neutral-900 pt-16 pb-8 px-6 mt-auto">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-neutral-900">
        
        {/* Column 1: Brand Architecture */}
        <div class="md:col-span-4 space-y-4">
          <div class="font-serif text-xs tracking-[0.3em] text-white">
            SAMJOE <span class="font-sans font-light text-[10px] text-neutral-500">.CLASSY</span>
          </div>
          <p class="text-[9px] text-neutral-500 tracking-wider leading-relaxed normal-case font-light max-w-sm">
            An elite curation of high-concept jewelry settings, premium apparel tailoring, and precision personal electronics. Redefining modern luxury design principles.
          </p>
        </div>

        {/* Column 2: Index Navigation */}
        <div class="md:col-span-4 space-y-3">
          <h4 class="text-[9px] text-white tracking-[0.3em] font-black">The Index</h4>
          <div class="flex flex-col gap-2 text-neutral-500 font-medium">
            <Link to="/shop" class="hover:text-yellow-400 transition-colors">All Assets</Link>
            <Link to="/about" class="hover:text-yellow-400 transition-colors">Our Manifesto</Link>
            <Link to="/contact" class="hover:text-yellow-400 transition-colors">Concierge Desk</Link>
          </div>
        </div>

        {/* Column 3: Concierge Information */}
        <div class="md:col-span-4 space-y-3 font-medium text-neutral-500 normal-case text-[9px] tracking-wider font-light">
          <h4 class="text-[9px] text-white tracking-[0.3em] font-black uppercase">Headquarters</h4>
          <div class="space-y-2 pt-1 text-neutral-400">
            <div class="flex items-center gap-2">
              <MapPin size={12} class="text-yellow-500 shrink-0" />
              <span>Sowutoum, Accra, Ghana</span>
            </div>
            <div class="flex items-center gap-2">
              <Phone size={12} class="text-yellow-500 shrink-0" />
              <span>+233 50 123 4567</span>
            </div>
            <div class="flex items-center gap-2">
              <Mail size={12} class="text-yellow-500 shrink-0" />
              <span class="lowercase">concierge@samjoeclassy.com</span>
            </div>
          </div>
        </div>

      </div>

      {/* Legal & Insurance Footer Row */}
      <div class="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[9px] font-medium text-neutral-500">
        <div>
          © {currentYear} SAMJOE CLASSY MULTI-HOUSE INC.
        </div>
        <div class="flex items-center gap-1.5 tracking-widest uppercase text-[8px] text-neutral-400">
          <ShieldCheck size={12} class="text-yellow-500" />
          <span>Secured Direct Asset Logistics</span>
        </div>
      </div>
    </footer>
  );
}