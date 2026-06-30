import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, Github, FileText, ArrowRight } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Fintech Platform',
    budget: '$5k - $10k',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate premium backend post latency
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        projectType: 'Fintech Platform',
        budget: '$5k - $10k',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl border border-black/5 shadow-premium-md overflow-hidden font-sans">
      <div className="grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Side: Contact details & Call-to-action indicators */}
        <div className="md:col-span-5 bg-slate-950 text-white p-7 sm:p-10 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle dot matrix lines */}
          <div className="absolute inset-0 bg-dot-matrix opacity-10 pointer-events-none" />
          
          <div className="relative z-10">
            <span className="text-[10px] text-emerald-400 font-mono font-bold tracking-widest uppercase block mb-2">
              Get in Touch
            </span>
            <h3 className="font-display font-black text-2xl tracking-tight text-white mb-4">
              Let's create something high-performance.
            </h3>
            <p className="text-slate-400 text-[11px] leading-relaxed mb-6">
              Reach out with your business parameters, design parameters, or full-stack proposals. I respond typically within 4-6 business hours.
            </p>
          </div>

          {/* Explicitly positioned direct contact details as demanded */}
          <div className="relative z-10 space-y-4 pt-4 border-t border-slate-800">
            <div>
              <span className="text-[9px] text-slate-500 uppercase font-mono block tracking-wider">Direct Inbox</span>
              <a 
                href="mailto:alexvalmyr15@gmail.com" 
                className="text-[12px] sm:text-sm text-emerald-400 font-mono font-semibold block hover:underline mt-0.5"
              >
                alexvalmyr15@gmail.com
              </a>
            </div>

            <div>
              <span className="text-[9px] text-slate-500 uppercase font-mono block tracking-wider">GitHub Portal</span>
              <a 
                href="https://github.com/11alexandro" 
                target="_blank" 
                rel="noreferrer" 
                className="text-[12px] sm:text-sm text-slate-200 font-mono font-bold hover:text-white hover:underline flex items-center gap-1.5 mt-0.5"
              >
                <Github className="w-4 h-4 text-slate-400" /> github.com/11alexandro
              </a>
            </div>

            <div>
              <span className="text-[9px] text-slate-500 uppercase font-mono block tracking-wider">Developer Specialization</span>
              <span className="text-[11px] text-slate-300 font-medium block mt-0.5">
                Fintech, High-Frequency Trading Consoles, and Web3 Multi-chain Escrows.
              </span>
            </div>
          </div>
        </div>

        {/* Right Side: Dynamic Submission Form Dashboard */}
        <div className="md:col-span-7 p-7 sm:p-10 relative">
          {submitted ? (
            <div className="h-full flex flex-col justify-center items-center text-center animate-fade-in py-10">
              <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-4">
                <CheckCircle2 className="w-7 h-7 text-emerald-600 animate-bounce" />
              </div>
              <h4 className="font-display font-extrabold text-[#111111] text-lg tracking-tight mb-2">
                Transmission Dispatch Success!
              </h4>
              <p className="text-slate-500 text-[11px] max-w-sm leading-relaxed mb-6">
                Your credentials and request have been securely routed. Alex will be in touch with a custom breakdown of strategies within 4 hours.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="bg-slate-900 text-white hover:bg-slate-800 px-5 py-2 rounded-full text-[10px] font-bold tracking-tight transition"
              >
                Send Another Dispatch
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Full Name Input */}
                <div>
                  <label htmlFor="form-name" className="text-slate-500 text-[9px] font-bold uppercase tracking-wider block mb-1">
                    Your Name
                  </label>
                  <input 
                    type="text"
                    id="form-name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Satoshi Nakamoto"
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-slate-800 px-3.5 py-2.5 rounded-lg text-slate-800 text-[11.5px] outline-none transition font-sans"
                  />
                </div>

                {/* Contact Email Input */}
                <div>
                  <label htmlFor="form-email" className="text-slate-500 text-[9px] font-bold uppercase tracking-wider block mb-1">
                    Contact Email
                  </label>
                  <input 
                    type="email"
                    id="form-email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. satoshi@bitcoin.org"
                    className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-slate-800 px-3.5 py-2.5 rounded-lg text-slate-800 text-[11.5px] outline-none transition font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Project Model Category */}
                <div>
                  <label htmlFor="form-project-type" className="text-slate-500 text-[9px] font-bold uppercase tracking-wider block mb-1">
                    Core Target System
                  </label>
                  <select 
                    id="form-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full bg-slate-50 hover:bg-[#eaeaea]/50 focus:bg-white border border-slate-200 focus:border-slate-800 px-3 py-2.5 rounded-lg text-slate-800 text-[11.5px] outline-none transition font-sans"
                  >
                    <option>Fintech Platform</option>
                    <option>Web3 Smart Escrow</option>
                    <option>Real-time Trading Terminal</option>
                    <option>SaaS Automation Core</option>
                    <option>Custom SaaS Consulting</option>
                  </select>
                </div>

                {/* Project Budget Category */}
                <div>
                  <label htmlFor="form-budget" className="text-slate-500 text-[9px] font-bold uppercase tracking-wider block mb-1">
                    Approximated Budget Range
                  </label>
                  <select 
                    id="form-budget"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-slate-50 hover:bg-[#eaeaea]/50 focus:bg-white border border-slate-200 focus:border-slate-800 px-3 py-2.5 rounded-lg text-slate-800 text-[11.5px] outline-none transition font-sans"
                  >
                    <option>$5,000 - $10,000</option>
                    <option>$10,000 - $25,000</option>
                    <option>$25,000 - $50,000</option>
                    <option>$50,000+</option>
                  </select>
                </div>
              </div>

              {/* Message Payload */}
              <div>
                <label htmlFor="form-message" className="text-slate-500 text-[9px] font-bold uppercase tracking-wider block mb-1">
                  Brief Project Parameters
                </label>
                <textarea 
                  id="form-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the core deliverables, technical needs, or direct hiring questions..."
                  className="w-full bg-slate-50 hover:bg-slate-100/50 focus:bg-white border border-slate-200 focus:border-slate-800 px-3.5 py-2.5 rounded-lg text-slate-800 text-[11.5px] outline-none transition font-sans resize-none leading-relaxed"
                />
              </div>

              {/* Submit Trigger Call To Action */}
              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-slate-950 hover:bg-slate-850 text-white rounded-lg py-3 font-semibold text-[11.5px] transition shadow-md flex items-center justify-center gap-1.5 h-11 uppercase tracking-wider cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                    Routing Payload...
                  </>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" /> Dispatch Custom Project Request
                  </>
                )}
              </button>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
