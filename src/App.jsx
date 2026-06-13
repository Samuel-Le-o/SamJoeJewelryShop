import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Global Framework Architecture Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import WhatsAppButton from './components/WhatsAppButton';

// Global Screen Views
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetail from './pages/ProductDetail';
import Checkout from './pages/Checkout';
import Success from './pages/Success';
import Contact from './pages/Contact';
import Wishlist from './pages/Wishlist'; //

import { AppContext } from './context/AppContext';
import About from './pages/About';

export default function App() {
  const { isCartOpen, quickViewItem } = useContext(AppContext);

  return (
    <BrowserRouter>
      <div class="bg-avant-dark text-white font-sans antialiased min-h-screen flex flex-col selection:bg-avant-gold selection:text-avant-dark">
        {/* Navigation Layer */}
        <Navbar />
        
        {/* Universal Functional Layers */}
        <AnimatePresence mode="wait">
          {isCartOpen && <CartDrawer />}
        </AnimatePresence>
        <AnimatePresence mode="wait">
          {quickViewItem && <QuickViewModal />}
        </AnimatePresence>
        
        {/* Core Screen Context Delivery Router */}
        <main class="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/success" element={<Success />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/wishlist" element={<Wishlist />} /> 
            <Route path="*" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        {/* Universal Persistent Footer Layer */}
        <Footer />
        
        {/* Universal Floating Communication Nodes */}
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}