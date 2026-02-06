
import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-slate-900 mb-8">Privacy Policy</h1>

      <div className="prose prose-slate max-w-none space-y-8">
        <p className="text-slate-600 text-lg">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">1. Introduction</h2>
          <p className="text-slate-600">
            Be There Medical & Upholstery ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our medical equipment repair services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">2. Information We Collect</h2>
          <p className="text-slate-600">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li><strong>Contact Information:</strong> Name, email address, phone number, and business address.</li>
            <li><strong>Service Information:</strong> Details about the medical equipment requiring repair, including type, condition, and photos of damage.</li>
            <li><strong>Business Information:</strong> Clinic or facility name, type of practice, and billing information.</li>
            <li><strong>Communication Records:</strong> Records of correspondence regarding service requests and quotes.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">3. How We Use Your Information</h2>
          <p className="text-slate-600">We use the information we collect to:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Provide and manage our medical equipment repair services</li>
            <li>Process service requests and generate repair quotes</li>
            <li>Communicate with you about your repair orders and service updates</li>
            <li>Improve our services and customer experience</li>
            <li>Comply with legal and regulatory requirements</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">4. Healthcare Compliance</h2>
          <p className="text-slate-600">
            We understand the sensitive nature of medical equipment and healthcare environments. We maintain strict confidentiality regarding all client information and adhere to applicable healthcare privacy regulations. We do not access, store, or process any patient health information (PHI) as part of our repair services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">5. Data Security</h2>
          <p className="text-slate-600">
            We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. This includes secure storage of client records and limiting access to authorized personnel only.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">6. Information Sharing</h2>
          <p className="text-slate-600">
            We do not sell, trade, or rent your personal information to third parties. We may share information only in the following circumstances:
          </p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>With service providers who assist in our operations</li>
            <li>To comply with legal obligations or respond to lawful requests</li>
            <li>To protect our rights and safety or the rights and safety of others</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">7. Data Retention</h2>
          <p className="text-slate-600">
            We retain your information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Service records may be retained for warranty and quality assurance purposes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">8. Your Rights</h2>
          <p className="text-slate-600">You have the right to:</p>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information, subject to legal requirements</li>
            <li>Opt out of marketing communications</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">9. Contact Us</h2>
          <p className="text-slate-600">
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100">
            <p className="text-slate-700 font-medium">Be There Medical & Upholstery</p>
            <p className="text-slate-600">Email: betheresofarepairs@gmail.com</p>
            <p className="text-slate-600">Phone: +1 647 471 1249</p>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900">10. Changes to This Policy</h2>
          <p className="text-slate-600">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
