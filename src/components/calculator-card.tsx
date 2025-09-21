import { ArrowRight, Zap, Cable, TrendingDown, Power, Weight, Layers } from 'lucide-react';

interface CalculatorCardProps {
  title: string;
  description: string;
  icon: 'ohm' | 'wire' | 'voltage' | 'power' | 'load' | 'conduit';
  onClick?: () => void;
  isComingSoon?: boolean;
}

const iconMap = {
  ohm: Zap,
  wire: Cable,
  voltage: TrendingDown,
  power: Power,
  load: Weight,
  conduit: Layers,
};

export function CalculatorCard({ title, description, icon, onClick, isComingSoon = false }: CalculatorCardProps) {
  const IconComponent = iconMap[icon];

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-sm border border-white/40 p-6 transition-all duration-300 ${
        isComingSoon 
          ? 'opacity-50 cursor-not-allowed' 
          : 'hover:scale-105 hover:shadow-xl hover:bg-white/90 cursor-pointer'
      }`}
      onClick={isComingSoon ? undefined : onClick}
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(20, 184, 166, 0.05) 0%, rgba(94, 234, 212, 0.1) 100%)`,
      }}
    >
      {/* Decorative gradient overlay */}
      <div 
        className={`absolute inset-0 opacity-0 transition-opacity duration-300 ${!isComingSoon ? 'group-hover:opacity-100' : ''}`}
        style={{
          background: `linear-gradient(135deg, var(--brand-primary-light) 0%, var(--brand-primary) 100%)`,
          opacity: '0.03',
        }}
      />
      
      {/* Coming Soon Overlay */}
      {isComingSoon && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <div 
            className="bg-gray-800/90 text-white px-6 py-2 rounded-xl font-semibold text-sm transform -rotate-12 shadow-lg"
            style={{ 
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            COMING SOON
          </div>
        </div>
      )}
      
      <div className="relative z-10">
        <div className="flex items-start justify-between mb-4">
          <div 
            className={`p-3 rounded-xl transition-all duration-300 ${!isComingSoon ? 'group-hover:scale-110' : ''}`}
            style={{ 
              backgroundColor: isComingSoon ? 'rgba(156, 163, 175, 0.3)' : 'var(--brand-primary-light)',
              color: isComingSoon ? 'rgba(107, 114, 128, 1)' : 'var(--brand-primary-dark)'
            }}
          >
            <IconComponent size={24} />
          </div>
          
          <div 
            className={`p-2 rounded-full opacity-60 transition-all duration-300 ${
              !isComingSoon ? 'group-hover:opacity-100 group-hover:translate-x-1' : ''
            }`}
            style={{ color: isComingSoon ? 'rgba(107, 114, 128, 0.5)' : 'var(--brand-primary)' }}
          >
            <ArrowRight size={20} />
          </div>
        </div>
        
        <h3 
          className={`font-semibold text-xl mb-2 transition-transform duration-300 ${
            !isComingSoon ? 'group-hover:translate-x-1' : ''
          }`}
          style={{ 
            color: isComingSoon ? 'rgba(107, 114, 128, 0.8)' : 'var(--brand-text-accent)' 
          }}
        >
          {title}
        </h3>
        
        <p 
          className={`text-sm leading-relaxed transition-transform duration-300 ${
            !isComingSoon ? 'group-hover:translate-x-1' : ''
          }`}
          style={{ 
            color: isComingSoon ? 'rgba(107, 114, 128, 0.6)' : 'var(--brand-text-accent)', 
            opacity: isComingSoon ? '1' : '0.8' 
          }}
        >
          {description}
        </p>
      </div>
      
      {/* Animated border effect */}
      {!isComingSoon && (
        <div 
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(135deg, var(--brand-primary) 0%, var(--brand-primary-light) 100%)`,
            padding: '1px',
          }}
        >
          <div className="w-full h-full bg-white rounded-2xl" />
        </div>
      )}
    </div>
  );
}