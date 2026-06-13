import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { ShieldCheck, CreditCard, Lock, ArrowLeft, Loader2, Smartphone } from 'lucide-react';

export default function Checkout() {
  const { cart, cartTotal, setCart } = useContext(AppContext);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Payment Mode Vector: 'card' or 'momo'
  const [paymentMethod, setPaymentMethod] = useState('momo');

  // Unified Form State Capture
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', country: 'Ghana',
    // Card Specs
    cardNumber: '', expDate: '', cvc: '',
    // MoMo Specs
    momoNetwork: 'mtn', momoNumber: ''
  });

  // Fixed Logistics Overhead (GHS pricing equivalent standard)
  const shippingFee = cart.length > 0 ? 150.00 : 0;
  const grandTotal = cartTotal + shippingFee;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const executeOrderSettlement = (e) => {
    e.preventDefault();
    if (cart.length === 0) return;

    setIsSubmitting(true);

    // Simulate encrypted payment resolution cycle
    setTimeout(() => {
      setIsSubmitting(false);
      setCart([]); // Purge cart vault array
      navigate('/success');
    }, 3000);
  };

  if (cart.length === 0) {
    return (
      <div class="bg-avant-dark min-h-screen text-white flex flex-col items-center justify-center p-6 text-center space-y-4">
        <span class="text-[10px] tracking-[0.4em] uppercase text-neutral-600 font-bold">Ledger Empty</span>
        <h2 class="font-serif text-xl uppercase tracking-wider text-neutral-400">No Assets Staged for Settlement</h2>
        <button 
          onClick={() => navigate('/shop')}
          class="border border-neutral-800 text-neutral-300 text-[10px] uppercase font-bold tracking-widest px-6 py-3 hover:border-avant-gold hover:text-avant-gold transition-colors cursor-pointer"
        >
          Return to Index Catalog
        </button>
      </div>
    );
  }

  return (
    <div class="bg-avant-dark min-h-screen text-white w-full pt-10 pb-24 px-6 font-sans">
      <div class="max-w-7xl mx-auto space-y-10">
        
        {/* Navigation Escape Anchor */}
        <button 
          type="button"
          onClick={() => navigate(-1)}
          class="inline-flex items-center gap-2 text-[9px] uppercase font-bold tracking-widest text-neutral-500 hover:text-white transition-colors cursor-pointer bg-transparent border-none"
        >
          <ArrowLeft size={12} /> Back to Asset Deck
        </button>

        {/* Master Double Column Split layout */}
        <form onSubmit={executeOrderSettlement} class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT CONSOLE: Client Information & Gateway Forms (7 Columns) */}
          <div class="lg:col-span-7 space-y-8">
            
            {/* Section 1: Logistics Telemetry */}
            <div class="space-y-4">
              <h3 class="font-serif text-lg tracking-wider uppercase text-white pb-2 border-b border-neutral-900">
                01. Delivery Logistics
              </h3>
              
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" name="firstName" required placeholder="FIRST NAME"
                  value={formData.firstName} onChange={handleInputChange}
                />
                <input 
                  type="text" name="lastName" required placeholder="LAST NAME"
                  value={formData.lastName} onChange={handleInputChange}
                />
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="email" name="email" required placeholder="SECURE EMAIL NODE"
                  value={formData.email} onChange={handleInputChange}
                />
                <input 
                  type="tel" name="phone" required placeholder="CONTACT PHONE"
                  value={formData.phone} onChange={handleInputChange}
                />
              </div>

              <input 
                type="text" name="address" required placeholder="STREET RESIDENCE / DIGITAL ADDRESS (e.g., GA-123-4567)"
                value={formData.address} onChange={handleInputChange}
              />

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                  type="text" name="city" required placeholder="CITY / REGION (e.g., ACCRA)"
                  value={formData.city} onChange={handleInputChange}
                />
                <input 
                  type="text" name="country" required disabled placeholder="COUNTRY"
                  value={formData.country}
                />
              </div>
            </div>

            {/* Section 2: Payment Protocol Strategy Choice */}
            <div class="space-y-4">
              <h3 class="font-serif text-lg tracking-wider uppercase text-white pb-2 border-b border-neutral-900 flex items-center justify-between">
                <span>02. Settlement Protocol</span>
                <span class="text-[8px] text-avant-gold tracking-[0.2em] font-black flex items-center gap-1">
                  <Lock size={10} /> SECURE GATEWAY HUB
                </span>
              </h3>

              {/* Payment Method Selector Tabs */}
              <div class="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('momo')}
                  class={`py-4 px-4 border flex flex-col items-center justify-center gap-2 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold cursor-pointer ${
                    paymentMethod === 'momo'
                      ? 'bg-avant-gold text-avant-dark border-avant-gold'
                      : 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900/40'
                  }`}
                >
                  <Smartphone size={16} />
                  Mobile Money
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  class={`py-4 px-4 border flex flex-col items-center justify-center gap-2 transition-all duration-300 text-[10px] uppercase tracking-widest font-bold cursor-pointer ${
                    paymentMethod === 'card'
                      ? 'bg-avant-gold text-avant-dark border-avant-gold'
                      : 'border-neutral-800 text-neutral-400 hover:text-white hover:bg-neutral-900/40'
                  }`}
                >
                  <CreditCard size={16} />
                  Credit Card
                </button>
              </div>

              {/* Dynamic Sub-Form Canvas Area */}
              <div class="bg-avant-surface border border-neutral-950 p-6">
                {paymentMethod === 'momo' ? (
                  /* MOBILE MONEY DISPATCH OVERLAY */
                  <div class="space-y-4">
                    <div class="space-y-2">
                      <label class="text-[8px] tracking-[0.2em] text-neutral-500 font-bold block uppercase">Select Local Carrier Network</label>
                      <select
                        name="momoNetwork"
                        value={formData.momoNetwork}
                        onChange={handleInputChange}
                        class="w-full bg-neutral-950 border border-neutral-800 text-white font-bold tracking-widest uppercase text-[9px] p-3 focus:outline-none focus:border-avant-gold rounded-none"
                      >
                        <option value="mtn">MTN MoMo</option>
                        <option value="telecel">Telecel Cash</option>
                        <option value="at">AT Money</option>
                      </select>
                    </div>

                    <div class="space-y-1">
                      <label class="text-[8px] tracking-[0.2em] text-neutral-500 font-bold block uppercase">Mobile Money Wallet Number</label>
                      <input 
                        type="tel" 
                        name="momoNumber" 
                        required={paymentMethod === 'momo'} 
                        placeholder="024 / 054 / 020 / 026 NUMBER"
                        maxLength="10"
                        value={formData.momoNumber} 
                        onChange={handleInputChange}
                      />
                    </div>
                    <p class="text-[8px] text-neutral-500 tracking-normal normal-case font-light italic pt-1">
                      * A secure prompt pin verification request will drop automatically on the authorized handset device framework.
                    </p>
                  </div>
                ) : (
                  /* STANDARD CARD BLOCK MESH */
                  <div class="space-y-4">
                    <div class="relative">
                      <input 
                        type="text" name="cardNumber" required={paymentMethod === 'card'} maxLength="19" placeholder="CREDIT DIRECT CARD NUMBER"
                        value={formData.cardNumber} onChange={handleInputChange}
                        class="pl-12"
                      />
                      <CreditCard size={14} class="absolute left-4 top-4 text-neutral-600" />
                    </div>

                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input 
                        type="text" name="expDate" required={paymentMethod === 'card'} placeholder="MM / YY" maxLength="5"
                        value={formData.expDate} onChange={handleInputChange}
                      />
                      <input 
                        type="password" name="cvc" required={paymentMethod === 'card'} placeholder="CVC VAULT CODE" maxLength="4"
                        value={formData.cvc} onChange={handleInputChange}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT CONSOLE: Aggregated Manifest Ledger Recaps (5 Columns) */}
          <div class="lg:col-span-5 bg-avant-surface border border-neutral-950 p-6 space-y-6 lg:sticky lg:top-24">
            <h3 class="font-serif text-sm tracking-widest uppercase text-white pb-2 border-b border-neutral-900">
              Vault Asset Summary Manifest
            </h3>

            {/* Item List Summary */}
            <div class="max-h-60 overflow-y-auto space-y-3 pr-2 border-b border-neutral-900 pb-4">
              {cart.map(item => (
                <div key={item.id} class="flex items-center justify-between gap-4 text-[10px] bg-avant-card/40 p-2.5 border border-neutral-900/40">
                  <div class="flex items-center gap-3 truncate">
                    <img src={item.images[0]} alt="" class="w-8 h-10 object-cover bg-neutral-950 filter grayscale" />
                    <span class="text-neutral-300 font-medium truncate normal-case">{item.name}</span>
                  </div>
                  <span class="text-neutral-500 shrink-0 font-mono">
                    {item.quantity}x <span class="text-white font-bold">${item.price.toLocaleString()}</span>
                  </span>
                </div>
              ))}
            </div>

            {/* Balance Calculus Display */}
            <div class="space-y-2 text-[10px] tracking-wider font-medium text-neutral-400 uppercase">
              <div class="flex justify-between">
                <span>Staged Asset Evaluation:</span>
                <span class="text-white">${cartTotal.toLocaleString()}.00</span>
              </div>
              <div class="flex justify-between">
                <span>Secure Logistics Delivery:</span>
                <span class="text-white">${shippingFee.toLocaleString()}.00</span>
              </div>
              <div class="flex justify-between items-center text-sm font-black tracking-widest text-white pt-4 border-t border-neutral-900 mt-2">
                <span>AGGREGATED BALANCE:</span>
                <span class="text-avant-neon font-sans text-base">${grandTotal.toLocaleString()}.00</span>
              </div>
            </div>

            {/* Settlement Action Core Switch Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              class="w-full bg-avant-gold text-avant-dark font-sans font-black text-[10px] uppercase tracking-[0.25em] py-4 flex items-center justify-center gap-2 hover:bg-white disabled:bg-neutral-800 disabled:text-neutral-600 transition-colors duration-300 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={13} class="animate-spin" /> 
                  {paymentMethod === 'momo' ? 'DISPATCHING MOMO USSD PROMPT PIN...' : 'AUTHORIZING CREDIT CARD CLEARANCE...'}
                </>
              ) : (
                <>
                  <ShieldCheck size={13} class="stroke-[2.5]" /> 
                  {paymentMethod === 'momo' ? 'Authorize MoMo Transaction' : 'Authorize Credit Card Settlement'}
                </>
              )}
            </button>

            <p class="text-[8px] text-center text-neutral-600 normal-case tracking-normal font-light leading-relaxed">
              Logistics and escrow routing protected via multi-house end-to-end local encryptions.
            </p>
          </div>

        </form>
      </div>
    </div>
  );
}