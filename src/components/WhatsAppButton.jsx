import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Configuration Variables
  const targetPhoneNumber = "233501234567"; // Replace with your client's live business phone setup (use country code without +)
  const defaultCurationMessage = encodeURIComponent(
    "Hello SamJoe Classy, I am currently exploring your Master Catalog Index and would like to inquire about securing an asset allocation."
  );

  const whatsAppSecureUrl = `https://wa.me/${targetPhoneNumber}?text=${defaultCurationMessage}`;

  return (
    <a
      href={whatsAppSecureUrl}
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 left-6 z-40 bg-[#25D366] text-white p-3.5 shadow-2xl hover:bg-white hover:text-[#25D366] hover:scale-105 transition-all duration-300 group border border-transparent hover:border-[#25D366]/20 flex items-center justify-center rounded-none"
      aria-label="Engage Secure Direct WhatsApp Concierge Channel"
    >
      {/* Messaging Icon Indicator */}
      <MessageCircle size={18} class="fill-current transition-transform duration-300 group-hover:rotate-6" />
      
      {/* Sliding Minimal Text Label */}
      <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-out text-[9px] uppercase tracking-[0.2em] font-black font-sans flex items-center whitespace-nowrap pl-0 group-hover:pl-2.5">
        Chat Concierge
      </span>
    </a>
  );
}