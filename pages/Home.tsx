
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, SERVICES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Product } from '../types';

interface HomeProps {
  onAddToCart: (p: Product) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hero1/1600/900" 
            alt="Medical background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              We'll Be There for your Medical Seating Repairs
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Premium medical equipment repairs. Helping healthcare providers maintain their facilities with excellence.
            </p>
            <Link to="/services" className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105">
              Book a Repair
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Featured Equipment</h2>
            <p className="text-slate-500 mt-2">Latest additions to our marketplace.</p>
          </div>
          <Link to="/products" className="text-orange-500 font-semibold hover:underline">View All &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map(product => (
            <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Services Highlight */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Expert Upholstery Repair</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Don't replace when you can restore. Our upholstery experts specialize in medical-grade furniture restoration using hospital-approved materials.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm group">
                <div className="h-48 overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                  <p className="text-slate-500 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <span className="text-orange-500 font-bold">{service.priceEstimate}</span>
                    <Link to="/services" className="text-slate-900 font-semibold text-sm group-hover:text-orange-500 transition-colors">Learn More &rarr;</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-orange-400 to-amber-500 rounded-3xl p-8 md:p-16 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">Try Our AI Repair Analysis Tool</h2>
            <p className="text-orange-100 text-lg mb-6">Take a photo of your damaged furniture, and our AI-powered assistant will provide an instant diagnosis and repair estimate.</p>
            <Link to="/ai-assistant" className="inline-block bg-white text-orange-500 px-8 py-3 rounded-xl font-bold hover:bg-orange-50 transition-colors">Launch AI Assistant</Link>
          </div>
          <div className="w-full md:w-1/3 aspect-video bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm">
             <div className="text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">Smart Visual Analysis</span>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
