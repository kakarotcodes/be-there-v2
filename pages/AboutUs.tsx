
import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">About Be There</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Your trusted partner in medical equipment and furniture upholstery repair, dedicated to extending the life of your healthcare investments.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          We provide services in GTA & all surrounding areas with Southern and Northern Ontario, Canada
        </div>
      </div>

      {/* Our Story */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
          <p className="text-slate-600">
            Be There was founded with a simple mission: to provide healthcare facilities with a cost-effective, sustainable alternative to replacing worn or damaged medical furniture. We recognized that quality medical equipment represents a significant investment, and with proper care and repair, it can serve patients for many more years.
          </p>
          <p className="text-slate-600">
            What started as a small upholstery repair shop has grown into a specialized service provider trusted by dental clinics, hospitals, physical therapy centers, and medical offices across the region. Our team combines traditional craftsmanship with modern materials specifically designed for healthcare environments.
          </p>
        </div>
        <div className="bg-orange-50 rounded-3xl p-8 flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 bg-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-5xl">B</span>
            </div>
            <p className="text-2xl font-bold text-slate-900">Be There</p>
            <p className="text-slate-500">Medical & Upholstery</p>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">Why Choose Be There</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: 'Healthcare Expertise',
              description: 'We specialize exclusively in medical and healthcare furniture. Our team understands the unique requirements of clinical environments, from infection control to patient comfort.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              )
            },
            {
              title: 'Medical-Grade Materials',
              description: 'We use only FDA and CDC compliant materials, including antimicrobial vinyls, puncture-resistant fabrics, and easy-to-clean surfaces that meet healthcare standards.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )
            },
            {
              title: 'Minimal Downtime',
              description: 'We understand that your equipment needs to be operational. Most repairs are completed within 48-72 hours, and we offer pickup and delivery services to minimize disruption.',
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center text-orange-500 mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What We Repair */}
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Repair</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Dental Chairs',
            'Examination Tables',
            'Hospital Beds',
            'Medical Recliners',
            'Waiting Room Seating',
            'Physical Therapy Tables',
            'Wheelchairs',
            'Procedure Chairs'
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-slate-200">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Our Commitment */}
      <div className="text-center mb-20">
        <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Commitment</h2>
        <div className="max-w-3xl mx-auto space-y-4 text-slate-600">
          <p>
            At Be There, we believe in doing things right the first time. Every repair is backed by our satisfaction guarantee, and we stand behind the quality of our workmanship.
          </p>
          <p>
            We're committed to sustainability—by repairing rather than replacing, we help reduce landfill waste while saving your facility money. It's better for your budget and better for the environment.
          </p>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="bg-orange-50 rounded-3xl p-8 md:p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Ready to Restore Your Equipment?</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Contact us today for a free assessment and quote. We'll be there when you need us.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="tel:+16474711249" className="bg-orange-400 hover:bg-orange-500 text-white px-8 py-3 rounded-xl font-bold transition-colors">
            Call +1 647 471 1249
          </a>
          <a href="mailto:betheresofarepairs@gmail.com" className="bg-white border border-slate-200 text-slate-700 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-colors">
            Email Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
