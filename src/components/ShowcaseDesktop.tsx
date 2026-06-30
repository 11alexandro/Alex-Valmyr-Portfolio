import React, { useState } from 'react';
import alcaptradeImage from '../assets/images/ALCapTradeCard.jpeg';
import algovernanceImage from '../assets/images/ALCapitalGovernanceCard.jpeg';
import alcryptopayImage from '../assets/images/ALCryptoPayCard.jpeg';

export default function ShowcaseDesktop() {
  // Track which card is hovered to adjust z-indices and 3D elevations dynamically
  const [activeCard, setActiveCard] = useState<string | null>(null);

  // Deep shadow glow for extreme premium feeling
  const shadowGlowStyle = (cardId: string) => {
    if (activeCard === cardId) {
      if (cardId === 'alcryptopay') {
        return 'shadow-[0_30px_70px_rgba(0,0,0,0.22)]';
      }
      return 'shadow-[0_30px_70px_rgba(0,0,0,0.55)]';
    }
    
    if (cardId === 'alcryptopay') {
      return 'shadow-[0_15px_40px_rgba(0,0,0,0.12)]';
    }
    return 'shadow-[0_20px_50px_rgba(0,0,0,0.4)]';
  };

  // Compute 3D transformation for each card to match the visual tilt composition
  const getCardStyle = (cardId: string) => {
    const isHovered = activeCard === cardId;
    const isAnyHovered = activeCard !== null;

    const baseTransition = 'transition-all duration-500 ease-out';

    switch (cardId) {
      case 'alcaptrade':
        // Main trading dashboard - centered-right (back layer)
        // Tilts slightly counterclockwise, leans back in perspective
        return {
          style: {
            transform: isHovered
              ? 'rotateX(8deg) rotateY(-15deg) rotateZ(-2.5deg) translate3d(20px, -20px, 80px)'
              : isAnyHovered
              ? 'rotateX(8deg) rotateY(-15deg) rotateZ(-2.5deg) translate3d(0, 0, -20px)'
              : 'rotateX(8deg) rotateY(-15deg) rotateZ(-2.5deg) translate3d(0, 0, 0)',
            transformStyle: 'preserve-3d' as const,
            zIndex: isHovered ? 40 : 10,
            filter: !isHovered && isAnyHovered ? 'brightness(0.8) contrast(0.95)' : 'none',
          },
          className: `${baseTransition} absolute top-[2%] -right-[2%] w-[76%] rounded-xl ${shadowGlowStyle('alcaptrade')}`,
        };

      case 'algovernance':
        // DAO governance card - bottom-left
        // Tilts counterclockwise, sits in front of alcaptrade on the left-bottom
        return {
          style: {
            transform: isHovered
              ? 'rotateX(8deg) rotateY(-15deg) rotateZ(-3.5deg) translate3d(-15px, -25px, 110px)'
              : isAnyHovered && !isHovered
              ? 'rotateX(8deg) rotateY(-15deg) rotateZ(-3.5deg) translate3d(0, 0, -10px)'
              : 'rotateX(8deg) rotateY(-15deg) rotateZ(-3.5deg) translate3d(0, 0, 30px)',
            transformStyle: 'preserve-3d' as const,
            zIndex: isHovered ? 40 : 20,
            filter: !isHovered && isAnyHovered ? 'brightness(0.8) contrast(0.95)' : 'none',
          },
          className: `${baseTransition} absolute bottom-[10%] -left-[14%] w-[51%] rounded-xl ${shadowGlowStyle('algovernance')}`,
        };

      case 'alcryptopay':
        // Crypto Pay light-mode card - bottom-right
        // Tilts slightly clockwise, sits far foreground overlapping both
        return {
          style: {
            transform: isHovered
              ? 'rotateX(6deg) rotateY(-10deg) rotateZ(3deg) translate3d(15px, -25px, 140px)'
              : isAnyHovered && !isHovered
              ? 'rotateX(6deg) rotateY(-10deg) rotateZ(3deg) translate3d(0, 0, -5px)'
              : 'rotateX(6deg) rotateY(-10deg) rotateZ(3deg) translate3d(0, 0, 60px)',
            transformStyle: 'preserve-3d' as const,
            zIndex: isHovered ? 40 : 30,
            filter: !isHovered && isAnyHovered ? 'brightness(0.85) contrast(0.95)' : 'none',
          },
          className: `${baseTransition} absolute -bottom-[12%] -right-[8%] w-[56%] rounded-xl ${shadowGlowStyle('alcryptopay')}`,
        };

      default:
        return { style: {}, className: '' };
    }
  };

  return (
    <div 
      className="relative w-full h-[35rem] hidden md:block select-none"
      style={{ perspective: '1600px', transformStyle: 'preserve-3d', marginTop: '-50px' }}
    >
      {/* 1. ALCapTrade Card - Large Back Row */}
      <div 
        id="showcase-alcaptrade"
        {...getCardStyle('alcaptrade')}
        onMouseEnter={() => setActiveCard('alcaptrade')}
        onMouseLeave={() => setActiveCard(null)}
      >
        <img 
          src={alcaptradeImage} 
          alt="ALCapTrade Dashboard Mockup" 
          className="w-full h-auto object-contain rounded-xl select-none"
          referrerPolicy="no-referrer"
          id="mockup-alcaptrade"
        />
      </div>

      {/* 2. ALCapital Governance Card - Medium Dark, Bottom Left Column overlap */}
      <div 
        id="showcase-algovernance"
        {...getCardStyle('algovernance')}
        onMouseEnter={() => setActiveCard('algovernance')}
        onMouseLeave={() => setActiveCard(null)}
      >
        <img 
          src={algovernanceImage} 
          alt="ALCapital Governance Dashboard Mockup" 
          className="w-full h-auto object-contain rounded-xl select-none"
          referrerPolicy="no-referrer"
          id="mockup-algovernance"
        />
      </div>

      {/* 3. ALCrypto-Pay Card - Light Mock, Bottom Right overlap */}
      <div 
        id="showcase-alcryptopay"
        {...getCardStyle('alcryptopay')}
        onMouseEnter={() => setActiveCard('alcryptopay')}
        onMouseLeave={() => setActiveCard(null)}
      >
        <img 
          src={alcryptopayImage} 
          alt="ALCryptoPay Landing Mockup" 
          className="w-full h-auto object-contain rounded-xl select-none"
          referrerPolicy="no-referrer"
          id="mockup-alcryptopay"
        />
      </div>
    </div>
  );
}

