import { useState, useEffect } from 'react';
import { FloatingNav } from './components/floating-nav';
import { HeroSection } from './components/hero-section';
import { CalculatorCard } from './components/calculator-card';
import { AdPlaceholder } from './components/ad-placeholder';
import { OhmsLawPage } from './components/ohms-law-page';

const calculators = [
  {
    title: "Ohm's Law Calculator",
    description: "Calculate voltage, current, resistance, and power using Ohm's fundamental law of electrical circuits.",
    icon: 'ohm' as const,
  },
  {
    title: "Wire Size Calculator",
    description: "Determine the appropriate wire gauge for your electrical installation based on current and distance.",
    icon: 'wire' as const,
  },
  {
    title: "Voltage Drop Calculator",
    description: "Calculate voltage drop across conductors to ensure optimal circuit performance and safety.",
    icon: 'voltage' as const,
  },
  {
    title: "Power Calculator",
    description: "Compute electrical power consumption and requirements for single and three-phase systems.",
    icon: 'power' as const,
  },
  {
    title: "Load Calculator",
    description: "Calculate electrical loads for residential, commercial, and industrial applications.",
    icon: 'load' as const,
  },
  {
    title: "Conduit Fill Calculator",
    description: "Determine proper conduit sizing based on wire count and NEC fill requirements.",
    icon: 'conduit' as const,
  },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  // Set document title based on current page
  useEffect(() => {
    switch (currentPage) {
      case 'ohm':
        document.title = "Ohm's Law Calculator | electricalcalculator.tools";
        break;
      default:
        document.title = "Electrical Calculator Tools | electricalcalculator.tools";
    }
  }, [currentPage]);

  const handleCalculatorClick = (calculatorTitle: string) => {
    if (calculatorTitle === "Ohm's Law Calculator") {
      setCurrentPage('ohm');
      window.scrollTo(0, 0);
    }
    // Add other calculator navigation here when ready
  };

  const handleNavigation = (calculatorId: string) => {
    if (calculatorId === 'home') {
      setCurrentPage('home');
      window.scrollTo(0, 0);
    } else if (calculatorId === 'ohm') {
      setCurrentPage('ohm');
      window.scrollTo(0, 0);
    }
    // Add other calculator navigation here when ready
  };

  // Render calculator pages
  if (currentPage === 'ohm') {
    return <OhmsLawPage onNavigate={handleNavigation} />;
  }

  // Render home page
  return (
    <div className="min-h-screen">
      <FloatingNav />
      
      <main>
        <HeroSection />
        
        {/* Ad Placement - Above Calculators */}
        <AdPlaceholder className="py-12" />
        
        {/* Calculators Section */}
        <section id="calculators" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: 'var(--brand-text-accent)' }}
              >
                Electrical Calculator Tools
              </h2>
              <p 
                className="text-xl max-w-2xl mx-auto leading-relaxed"
                style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
              >
                Professional electrical calculation tools designed for engineers, electricians, 
                and technical professionals. Fast, accurate, and industry-compliant.
              </p>
            </div>
            
            {/* Calculator Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculators.map((calculator, index) => (
                <CalculatorCard
                  key={index}
                  title={calculator.title}
                  description={calculator.description}
                  icon={calculator.icon}
                  onClick={() => handleCalculatorClick(calculator.title)}
                  isComingSoon={calculator.title !== "Ohm's Law Calculator"}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Ad Placement - Below Calculators */}
        <AdPlaceholder className="py-12" />
        
        {/* Footer CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div 
              className="rounded-3xl p-12 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-dark) 100%)`,
              }}
            >
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to get started?
                </h3>
                <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of professionals who trust electricalcalculator.tools for their electrical projects.
                </p>
                <button className="px-8 py-4 bg-white text-[var(--brand-primary)] rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Start Calculating Now
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}