import { useState, useEffect } from 'react';
import { FloatingSidebar } from './floating-sidebar';
import { OhmsLawCalculator } from './ohms-law-calculator';
import { LearnMoreSection } from './learn-more-section';
import { FaqSection } from './faq-section';
import { AdPlaceholder } from './ad-placeholder';

interface OhmsLawPageProps {
  onNavigate?: (calculatorId: string) => void;
}

export function OhmsLawPage({ onNavigate }: OhmsLawPageProps) {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  // Set document title
  useEffect(() => {
    document.title = "Ohm's Law Calculator | electricalcalculator.tools";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Floating Sidebar */}
      <FloatingSidebar 
        currentCalculator="ohm" 
        onNavigate={onNavigate}
        onExpandedChange={setIsSidebarExpanded}
      />
      
      <main 
        className={`transition-all duration-300 pb-24 md:pb-0 ${
          isSidebarExpanded 
            ? 'md:ml-72 max-w-5xl mx-auto px-6' 
            : 'md:ml-24 md:mr-6 px-6'
        }`}
      >
        {/* Top Ad */}
        <div className="pt-[50px] pb-[32px] pr-[0px] pl-[0px]">
          <AdPlaceholder />
        </div>
        
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 mb-6">
            <span 
              className="text-sm font-medium"
              style={{ color: 'var(--brand-primary)' }}
            >
              electricalcalculator.tools
            </span>
          </div>
          
          <h1 
            className="text-5xl md:text-6xl font-bold mb-4"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            Ohm's Law Calculator
          </h1>
          
          <p 
            className="text-xl max-w-2xl mx-auto leading-relaxed"
            style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
          >
            Calculate voltage, current, resistance, and power using the fundamental law of electrical circuits.
          </p>
        </div>

        {/* Calculator Section */}
        <section className="mb-16">
          <OhmsLawCalculator />
        </section>

        {/* Ad Below Calculator */}
        <AdPlaceholder className="mb-16" />

        {/* Learn More Section */}
        <LearnMoreSection />

        {/* Ad After Learn More */}
        <AdPlaceholder className="mb-16" />

        {/* FAQ Section */}
        <FaqSection 
          calculatorName="Ohm's Law"
          title="Ohm's Law Calculator FAQ"
          description="Get answers to common questions about Ohm's Law calculations and how to use this electrical calculator effectively."
        />

        {/* Ad After FAQ */}
        <AdPlaceholder className="mb-16" />

        {/* Footer */}
        <footer className="py-12 text-center">
          <div 
            className="text-sm"
            style={{ color: 'var(--brand-text-accent)', opacity: '0.6' }}
          >
            © 2024 electricalcalculator.tools - Professional electrical calculation tools.
          </div>
        </footer>
      </main>
    </div>
  );
}