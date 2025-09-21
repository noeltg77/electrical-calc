import { Calculator } from 'lucide-react';

interface CalculatorPlaceholderProps {
  title: string;
  description: string;
}

export function CalculatorPlaceholder({ title, description }: CalculatorPlaceholderProps) {
  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/40 shadow-lg">
      <div className="text-center mb-8">
        <div 
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
          style={{ backgroundColor: 'var(--brand-primary-light)' }}
        >
          <Calculator size={32} style={{ color: 'var(--brand-primary-dark)' }} />
        </div>
        <h2 
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--brand-text-accent)' }}
        >
          {title}
        </h2>
        <p 
          className="text-lg"
          style={{ color: 'var(--brand-text-accent)', opacity: '0.8' }}
        >
          {description}
        </p>
      </div>

      <div 
        className="border-2 border-dashed rounded-2xl p-12 text-center"
        style={{ borderColor: 'var(--brand-primary)' }}
      >
        <div 
          className="text-6xl font-bold mb-4"
          style={{ color: 'var(--brand-primary)' }}
        >
          V = I × R
        </div>
        <p 
          className="text-lg mb-8"
          style={{ color: 'var(--brand-text-accent)', opacity: '0.7' }}
        >
          Interactive calculator coming soon...
        </p>
        
        {/* Mock input fields */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {['Voltage (V)', 'Current (I)', 'Resistance (R)'].map((field, index) => (
            <div key={index} className="space-y-2">
              <label 
                className="block text-sm font-medium"
                style={{ color: 'var(--brand-text-accent)' }}
              >
                {field}
              </label>
              <div 
                className="w-full h-12 rounded-xl border-2 flex items-center justify-center"
                style={{ 
                  borderColor: 'var(--brand-primary-light)',
                  backgroundColor: 'rgba(94, 234, 212, 0.1)'
                }}
              >
                <span 
                  className="text-sm"
                  style={{ color: 'var(--brand-primary)', opacity: '0.6' }}
                >
                  Enter value
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button 
          className="mt-8 px-8 py-3 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ backgroundColor: 'var(--brand-primary)' }}
          disabled
        >
          Calculate
        </button>
      </div>
    </div>
  );
}