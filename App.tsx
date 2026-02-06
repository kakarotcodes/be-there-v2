
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Services from './pages/Services';
import AIRepairAssistant from './pages/AIRepairAssistant';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const handleAddToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    
    // Simple toast notification simulation
    const notification = document.createElement('div');
    notification.className = 'fixed bottom-4 right-4 bg-slate-900 text-white px-6 py-3 rounded-xl shadow-xl z-[9999] animate-bounce';
    notification.innerText = `Added ${product.name} to cart`;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 2000);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-slate-50">
        <Navbar cartCount={cartCount} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
            <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ai-assistant" element={<AIRepairAssistant />} />
            <Route path="/cart" element={
              <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                <h1 className="text-3xl font-bold mb-4">Your Shopping Cart</h1>
                {cart.length === 0 ? (
                  <p className="text-slate-500">Your cart is empty.</p>
                ) : (
                  <div className="grid gap-4 max-w-2xl mx-auto text-left">
                    {cart.map(item => (
                      <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
                        <div className="flex items-center gap-4">
                          <img src={item.imageUrl} className="w-16 h-16 rounded object-cover" />
                          <div>
                            <p className="font-bold">{item.name}</p>
                            <p className="text-sm text-slate-500">${item.price} x {item.quantity}</p>
                          </div>
                        </div>
                        <p className="font-bold">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    ))}
                    <div className="mt-8 border-t pt-4 text-right">
                      <p className="text-2xl font-bold">Total: ${cart.reduce((a, b) => a + (b.price * b.quantity), 0).toFixed(2)}</p>
                      <button className="mt-4 bg-blue-600 text-white px-8 py-3 rounded-xl font-bold">Checkout Now</button>
                    </div>
                  </div>
                )}
              </div>
            } />
          </Routes>
        </main>

        <footer className="bg-white border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">B</span>
                  </div>
                  <span className="text-xl font-bold text-slate-900">Be There</span>
                </div>
                <p className="text-slate-500 max-w-md">
                  Your dedicated partner for medical equipment procurement and furniture maintenance. We bridge the gap between aesthetics and clinical excellence.
                </p>
              </div>
              <div>
                <h4 className="font-bold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-slate-500">
                  <li><a href="#" className="hover:text-blue-600">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600">Compliance Info</a></li>
                  <li><a href="#" className="hover:text-blue-600">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-blue-600">Contact Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-4">Contact</h4>
                <ul className="space-y-2 text-slate-500">
                  <li>1234 Healthcare Plaza</li>
                  <li>Medical District, ST 56789</li>
                  <li>+1 (555) 000-0000</li>
                  <li>support@bethere.med</li>
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-slate-100 text-center text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Be There Medical & Upholstery. All rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
