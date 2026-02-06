
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Professional Upholstery Services</h1>
        <p className="text-slate-600 text-lg">
          We specialize in the restoration of high-traffic medical furniture. From dental chairs to waiting room benches, 
          we use antimicrobial, durable materials that meet all healthcare standards.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-900">Why Repair with "Be There"?</h2>
          <div className="space-y-4">
            {[
              { title: 'Cost Efficient', desc: 'Repairing costs typically 60-70% less than replacement.' },
              { title: 'Quick Turnaround', desc: 'Most repairs completed within 48-72 hours to minimize clinic downtime.' },
              { title: 'Compliance', desc: 'We only use FDA/CDC compliant medical-grade vinyls.' },
              { title: 'Sustainability', desc: 'Reduce landfill waste by extending the life of your furniture frames.' }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-20"></div>
          <h3 className="text-2xl font-bold mb-6">Request a Service Quote</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Name</label>
                <input type="text" className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Clinic Email</label>
                <input type="email" className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="john@clinic.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Furniture Type</label>
              <select className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 outline-none">
                <option>Dental Chair</option>
                <option>Examination Table</option>
                <option>Waiting Room Seating</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Description of Damage</label>
              <textarea className="w-full bg-slate-800 border-slate-700 rounded-lg px-4 py-2 h-32 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. 5-inch tear in lumbar area..."></textarea>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors shadow-lg">
              Send Quote Request
            </button>
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SERVICES.map(service => (
          <div key={service.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 flex flex-col">
            <img src={service.imageUrl} alt={service.title} className="w-full h-56 object-cover" />
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-500 text-sm mb-6">{service.description}</p>
              <div className="mt-auto border-t border-slate-100 pt-4 flex items-center justify-between">
                <span className="text-blue-600 font-bold">{service.priceEstimate}</span>
                <button className="text-slate-900 font-bold text-sm hover:text-blue-600">Select Service</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
