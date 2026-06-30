import React, { useState } from 'react';
import alcaptradeImage from '../assets/images/ALCapTradeCard.jpeg';
import algovernanceImage from '../assets/images/ALCapitalGovernanceCard.jpeg';
import alcryptopayImage from '../assets/images/ALCryptoPayCard.jpeg';
import { Sparkles, Milestone, Sparkle } from 'lucide-react';

export default function ShowcaseMobile() {
  const [activeTab, setActiveTab] = useState<'trade' | 'gov' | 'pay'>('trade');

  return (
    <div className="block md:hidden w-full relative">
      {/* Decorative branding for mobile */}
      <div className="text-center py-2 -mt-4 mb-4 select-none pointer-events-none">
        <h1 className="font-display font-black text-4xl leading-none tracking-tight flex items-center justify-center gap-1">
          <span className="text-outline-alex">ALEX</span>
          <span className="text-[#111111]">VALMYR</span>
        </h1>
        <p className="text-[10px] text-slate-400 font-mono mt-1 tracking-wider uppercase">
          Frontend & Full-stack Fintech Engineering
        </p>
      </div>

      {/* Tabs list to toggle between live dashboards */}
      <div className="flex bg-slate-200/60 p-1 rounded-full border border-slate-300/30 gap-1 mb-4 h-11 items-center">
        <button 
          onClick={() => setActiveTab('trade')}
          className={`flex-1 py-1.5 px-3 rounded-full text-[10.5px] font-bold transition flex items-center justify-center gap-1 h-9 ${activeTab === 'trade' ? 'bg-[#0B0F17] text-white shadow-sm' : 'text-slate-600 hover:text-black'}`}
        >
          <Sparkle className="w-3 h-3 text-emerald-400" /> ALCapTrade
        </button>
        <button 
          onClick={() => setActiveTab('gov')}
          className={`flex-1 py-1.5 px-3 rounded-full text-[10.5px] font-bold transition flex items-center justify-center gap-1 h-9 ${activeTab === 'gov' ? 'bg-[#0B0F17] text-white shadow-sm' : 'text-slate-600 hover:text-black'}`}
        >
          <Sparkle className="w-3 h-3 text-purple-400" /> ALCapital
        </button>
        <button 
          onClick={() => setActiveTab('pay')}
          className={`flex-1 py-1.5 px-3 rounded-full text-[10.5px] font-bold transition flex items-center justify-center gap-1 h-9 ${activeTab === 'pay' ? 'bg-[#0B0F17] text-white shadow-sm' : 'text-slate-600 hover:text-black'}`}
        >
          <Sparkle className="w-3 h-3 text-blue-400" /> ALCrypto-Pay
        </button>
      </div>

      {/* Render active dashboard dynamically */}
      <div className="transition-all duration-300 ease-in-out">
        {activeTab === 'trade' && (
          <div className="animate-fade-in shadow-premium-md rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <img 
              src={alcaptradeImage} 
              alt="ALCapTrade Dashboard Mockup" 
              className="w-full h-auto object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        {activeTab === 'gov' && (
          <div className="animate-fade-in shadow-premium-md rounded-xl overflow-hidden bg-slate-900 border border-slate-800">
            <img 
              src={algovernanceImage} 
              alt="ALCapital Governance Dashboard Mockup" 
              className="w-full h-auto object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
        {activeTab === 'pay' && (
          <div className="animate-fade-in shadow-premium-md rounded-xl overflow-hidden bg-white border border-slate-200">
            <img 
              src={alcryptopayImage} 
              alt="ALCryptoPay Landing Mockup" 
              className="w-full h-auto object-contain select-none"
              referrerPolicy="no-referrer"
            />
          </div>
        )}
      </div>

      {/* Mini indicator */}
      <p className="text-center text-[10px] text-slate-400 mt-3 font-mono">
        Select a tab above to preview each custom interface layout
      </p>
    </div>
  );
}
