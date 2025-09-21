import { Sparkles, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: 'var(--brand-primary-light)' }}
        />
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-15"
          style={{ backgroundColor: 'var(--brand-primary)' }}
        />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/60 backdrop-blur-sm border border-white/40 mb-8">
          <Sparkles size={16} style={{ color: 'var(--brand-primary)' }} />
          <span 
            className="text-sm font-medium"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            electricalcalculator.tools
          </span>
        </div>
        
        {/* Main heading */}
        <h1 
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          style={{ color: 'var(--brand-text-accent)' }}
        >
          Electrical Calculator
          <span 
            className="block bg-gradient-to-r from-[var(--brand-primary-dark)] to-[var(--brand-primary)] bg-clip-text text-transparent"
          >
            Tools
          </span>
        </h1>
        
        {/* Subtitle */}
        <p 
          className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto leading-relaxed"
          style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
        >
          Professional electrical calculation tools designed for engineers, electricians, and technical professionals.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button 
            className="px-8 py-4 rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            style={{ backgroundColor: 'var(--brand-primary)' }}
          >
            <Zap size={20} />
            Start Calculating
          </button>
          
          <button 
            className="px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 border-2"
            style={{ 
              color: 'var(--brand-primary)', 
              borderColor: 'var(--brand-primary)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)'
            }}
          >
            Learn More
          </button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          {[
            { label: 'Calculations', value: '6+' },
            { label: 'Accuracy', value: '99.9%' },
            { label: 'Users', value: '10K+' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div 
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: 'var(--brand-primary)' }}
              >
                {stat.value}
              </div>
              <div 
                className="text-sm font-medium"
                style={{ color: 'var(--brand-text-accent)', opacity: '0.7' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}