import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ShieldAlert } from 'lucide-react';

export default function Success() {
  const navigate = useNavigate();
  const manifestReceiptToken = Math.random().toString(36).substring(2, 11).toUpperCase();

  return (
    <div class="bg-avant-dark min-h-screen text-white flex flex-col items-center justify-center p-6 text-center font-sans">
      <div class="max-w-md bg-avant-surface border border-neutral-950 p-8 space-y-6 shadow-2xl relative overflow-hidden">
        
        {/* Soft Linear Top Matrix Accents */}
        <div class="absolute top-0 left-0 w-full h-[2px] bg-avant-gold animate-pulse" />

        <div class="flex flex-col items-center space-y-2">
          <CheckCircle size={32} class="text-avant-gold stroke-[1.5]" />
          <span class="text-[8px] tracking-[0.4em] uppercase text-avant-gold font-bold block">
            Escrow Settlement Verified
          </span>
          <h1 class="font-serif text-xl uppercase tracking-widest text-white pt-2">Vault Allocation Cleared</h1>
        </div>

        <p class="text-[10px] text-neutral-400 normal-case tracking-normal font-light leading-relaxed">
          Your direct asset transaction request has successfully checked into our tracking log index matrix system. Armored transit logistics manifest schedules are routing now.
        </p>

        {/* System Reference Voucher Details Box */}
        <div class="bg-neutral-950 border border-neutral-900 p-4 font-mono text-[9px] tracking-widest uppercase text-left space-y-1">
          <div class="text-neutral-600 text-[8px]">LOGISTICS DISPATCH SECURE KEY:</div>
          <div class="text-white font-bold flex items-center gap-2">
            <ShieldAlert size={10} class="text-avant-gold" /> SMC-{manifestReceiptToken}-ACC
          </div>
        </div>

        <button 
          onClick={() => navigate('/shop')}
          class="w-full bg-neutral-900 border border-neutral-800 text-neutral-300 text-[9px] uppercase font-bold tracking-[0.2em] py-3.5 hover:border-avant-gold hover:text-avant-gold transition-colors cursor-pointer"
        >
          Return to Index Catalog Terminal
        </button>
      </div>
    </div>
  );
}