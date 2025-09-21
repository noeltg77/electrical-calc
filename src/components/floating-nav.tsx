import { useState, useEffect } from 'react';

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Calculators', href: '#calculators' },
  { name: 'About', href: '#' },
  { name: 'Contact', href: '#' },
];

export function FloatingNav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-lg border border-white/20'
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}
      style={{
        borderRadius: '50px',
        padding: '8px 24px',
      }}
    >
      <div className="flex items-center space-x-8">
        <div className="flex items-center space-x-2">
          <div 
            className="w-8 h-8 rounded-full flex items-center justify-center"
            style={{ backgroundColor: 'var(--brand-primary)' }}
          >
            <span className="font-bold text-white">E</span>
          </div>
          <span 
            className="font-bold text-lg"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            Calculator Tools
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium transition-colors duration-200 hover:opacity-70"
              style={{ color: 'var(--brand-text-accent)' }}
            >
              {item.name}
            </a>
          ))}
        </div>
        
        <button
          className="px-6 py-2 rounded-full text-white font-medium text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
          style={{ backgroundColor: 'var(--brand-primary)' }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}