import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2 } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '', email: '', subject: 'Bespoke Curation Order', message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const dispatchConciergeTicket = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate localized intake node handshake logging
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: 'Bespoke Curation Order', message: '' });
    }, 2000);
  };

  return (
    <div class="bg-avant-dark min-h-screen text-white w-full pt-10 pb-24 px-6 font-sans">
      <div class="max-w-7xl mx-auto space-y-12">
        
        {/* Page Context Heading Strip */}
        <div class="space-y-2 border-b border-neutral-900 pb-6">
          <h1 class="font-serif text-xl sm:text-3xl uppercase tracking-[0.2em] text-white">The Concierge Desk</h1>
          <p class="text-[9px] tracking-[0.25em] text-avant-gold uppercase font-semibold">
            Direct Transmission Conduit For Custom Procurement & Telemetry Support
          </p>
        </div>

        {/* Core Double Column Layout Grid */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT PANEL: Telemetry Contact Parameters (5 Columns) */}
          <div class="lg:col-span-5 space-y-6">
            <div class="bg-avant-surface border border-neutral-950 p-6 space-y-8">
              
              <div class="space-y-2">
                <h3 class="font-serif text-sm tracking-widest text-white uppercase font-bold">Studio Headquarters</h3>
                <p class="text-[9px] text-neutral-500 font-light normal-case tracking-normal leading-relaxed">
                  Our main digital design workspace operates out of Accra, coordinating tailored asset logistics across global distribution channels.
                </p>
              </div>

              {/* Data Spec Matrix Lists */}
              <div class="space-y-4 text-[10px] font-medium tracking-wider text-neutral-400 uppercase">
                <div class="flex items-start gap-4 p-3 bg-avant-card/40 border border-neutral-900/60">
                  <MapPin size={14} class="text-avant-gold shrink-0 mt-0.5" />
                  <div class="space-y-1 normal-case">
                    <span class="text-[8px] font-black text-neutral-500 uppercase tracking-widest block">Physical Anchor</span>
                    <span class="text-white font-light">Sowutoum, Accra, Ghana</span>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-3 bg-avant-card/40 border border-neutral-900/60">
                  <Phone size={14} class="text-avant-gold shrink-0 mt-0.5" />
                  <div class="space-y-1 normal-case">
                    <span class="text-[8px] font-black text-neutral-500 uppercase tracking-widest block">Direct Phone Hub</span>
                    <span class="text-white font-light">+233 50 123 4567</span>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-3 bg-avant-card/40 border border-neutral-900/60">
                  <Mail size={14} class="text-avant-gold shrink-0 mt-0.5" />
                  <div class="space-y-1 normal-case">
                    <span class="text-[8px] font-black text-neutral-500 uppercase tracking-widest block">Encrypted Email Node</span>
                    <span class="text-white font-light lowercase">concierge@samjoeclassy.com</span>
                  </div>
                </div>

                <div class="flex items-start gap-4 p-3 bg-avant-card/40 border border-neutral-900/60">
                  <Clock size={14} class="text-avant-gold shrink-0 mt-0.5" />
                  <div class="space-y-1 normal-case">
                    <span class="text-[8px] font-black text-neutral-500 uppercase tracking-widest block">Active Window</span>
                    <span class="text-white font-light">Monday — Saturday // 09:00 - 18:00 GMT</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT PANEL: Secure Intake Request Form Engine (7 Columns) */}
          <div class="lg:col-span-7 bg-avant-surface border border-neutral-950 p-8 space-y-6">
            <div class="space-y-1 pb-4 border-b border-neutral-900">
              <h3 class="font-serif text-sm tracking-widest text-white uppercase font-bold">Transmit Inquiry Ticket</h3>
              <p class="text-[8px] text-neutral-500 uppercase tracking-widest font-medium">All communications are classified and logged manually.</p>
            </div>

            {submitted ? (
              <div class="border border-avant-gold/40 bg-avant-gold/5 p-6 text-center space-y-3">
                <span class="text-[10px] tracking-[0.3em] uppercase text-avant-gold font-black block">Transmission Logged</span>
                <p class="text-[10px] text-neutral-300 normal-case font-light leading-relaxed max-w-sm mx-auto">
                  Your inquiry message dataset has successfully cleared our entry protocol layer. A concierge officer will contact your node within 12 standard operating hours.
                </p>
                <button 
                  type="button"
                  onClick={() => setSubmitted(false)}
                  class="text-[8px] tracking-widest text-neutral-500 uppercase underline hover:text-white transition-colors pt-2 cursor-pointer bg-transparent border-none"
                >
                  Open Clean Channel Form
                </button>
              </div>
            ) : (
              <form onSubmit={dispatchConciergeTicket} class="space-y-5">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="space-y-1.5">
                    <label class="text-[8px] tracking-[0.2em] text-neutral-500 font-bold uppercase">Client Label</label>
                    <input 
                      type="text" name="name" required placeholder="YOUR FULL NAME"
                      value={formData.name} onChange={handleInputChange}
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label class="text-[8px] tracking-[0.2em] text-neutral-500 font-bold uppercase">Return Routing Node</label>
                    <input 
                      type="email" name="email" required placeholder="VALID EMAIL ADDRESS"
                      value={formData.email} onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label class="text-[8px] tracking-[0.2em] text-neutral-500 font-bold uppercase">Telemetry Context Classification</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    class="w-full bg-neutral-950 border border-neutral-800 text-white font-bold tracking-widest uppercase text-[9px] p-3 focus:outline-none focus:border-avant-gold rounded-none"
                  >
                    <option value="Bespoke Curation Order">Bespoke Jewelry Calibration</option>
                    <option value="Logistics Discrepancy Tracking">Logistics Escrow Delivery Support</option>
                    <option value="Bulk Corporate Procurement">Bulk Curation Sourcing</option>
                    <option value="General Brand System Inquiries">General House Inquiry</option>
                  </select>
                </div>

                <div class="space-y-1.5">
                  <label class="text-[8px] tracking-[0.2em] text-neutral-500 font-bold uppercase">Inquiry Parameter Details</label>
                  <textarea 
                    name="message" required rows="5" placeholder="ELABORATE EXPLICIT COMMUNIQUE SPECIFICATIONS HERE..."
                    value={formData.message} onChange={handleInputChange}
                    class="w-full bg-neutral-950 border border-neutral-800 text-white font-mono text-[10px] tracking-wider p-3 focus:outline-none focus:border-avant-gold rounded-none placeholder:text-neutral-700 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  class="w-full bg-avant-gold text-avant-dark font-sans font-black text-[10px] uppercase tracking-[0.25em] py-4 flex items-center justify-center gap-2 hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-600 transition-colors duration-300 cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={12} class="animate-spin" /> ENGAGING TRANSIT ENVELOPE HANDSHAKE...
                    </>
                  ) : (
                    <>
                      <Send size={11} class="stroke-[2.5]" /> Secure Dispatch Communique
                    </>
                  )}
                </button>
              </form>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}