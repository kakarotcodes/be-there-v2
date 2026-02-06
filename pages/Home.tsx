
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants';

const Home: React.FC = () => {
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

      {/* Services Highlight */}
      <section className="bg-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900">Expert Medical Equipment Repair</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Don't replace when you can restore. Our experts specialize in medical-grade furniture restoration using hospital-approved materials.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.map(service => (
              <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm group">
                <div className="h-72 overflow-hidden">
                  <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
