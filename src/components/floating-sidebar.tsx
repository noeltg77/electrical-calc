import { useState, useEffect } from 'react';
import { Zap, Cable, TrendingDown, Power, Weight, Layers, Home, ChevronLeft, ChevronRight } from 'lucide-react';

const calculators = [
  { name: "Ohm's Law", icon: Zap, href: '/ohms-law', id: 'ohm', isComingSoon: false },
  { name: "Wire Size", icon: Cable, href: '/wire-size', id: 'wire', isComingSoon: true },
  { name: "Voltage Drop", icon: TrendingDown, href: '/voltage-drop', id: 'voltage', isComingSoon: true },
  { name: "Power", icon: Power, href: '/power', id: 'power', isComingSoon: true },
  { name: "Load", icon: Weight, href: '/load', id: 'load', isComingSoon: true },
  { name: "Conduit Fill", icon: Layers, href: '/conduit-fill', id: 'conduit', isComingSoon: true },
];

interface FloatingSidebarProps {
  currentCalculator?: string;
  onNavigate?: (calculatorId: string) => void;
  onExpandedChange?: (isExpanded: boolean) => void;
}

export function FloatingSidebar({ currentCalculator, onNavigate, onExpandedChange }: FloatingSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  // Notify parent of initial expanded state
  useEffect(() => {
    onExpandedChange?.(!isCollapsed);
  }, []);

  const handleToggle = () => {
    const newCollapsed = !isCollapsed;
    setIsCollapsed(newCollapsed);
    onExpandedChange?.(!newCollapsed);
  };

  const handleNavigation = (calculatorId: string, isComingSoon: boolean = false) => {
    if (!isComingSoon) {
      onNavigate?.(calculatorId);
    }
  };

  // Mobile Bottom Navigation
  const MobileNavigation = () => (
    <div className="fixed bottom-6 left-4 right-4 z-40 md:hidden">
      <div 
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 p-3"
        style={{
          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)`,
        }}
      >
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 pb-1" style={{ width: 'max-content' }}>
            {/* Home */}
            <button
              onClick={() => handleNavigation('home')}
              className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-200 min-w-[70px] ${
                currentCalculator === 'home' 
                  ? 'shadow-md' 
                  : 'hover:bg-gray-50/50'
              }`}
              style={{
                backgroundColor: currentCalculator === 'home' ? 'var(--brand-primary-light)' : 'transparent',
                color: currentCalculator === 'home' ? 'var(--brand-primary-dark)' : 'var(--brand-text-accent)',
              }}
            >
              <Home size={20} />
              <span className="text-xs font-medium">Home</span>
            </button>

            {/* Calculators */}
            {calculators.map((calc) => {
              const IconComponent = calc.icon;
              const isActive = currentCalculator === calc.id;
              
              return (
                <div key={calc.id} className="relative">
                  <button
                    onClick={() => handleNavigation(calc.id, calc.isComingSoon)}
                    className={`flex flex-col items-center space-y-1 p-3 rounded-xl transition-all duration-200 min-w-[70px] ${
                      calc.isComingSoon 
                        ? 'opacity-50 cursor-not-allowed' 
                        : isActive 
                          ? 'shadow-md' 
                          : 'hover:bg-gray-50/50'
                    }`}
                    style={{
                      backgroundColor: isActive && !calc.isComingSoon ? 'var(--brand-primary-light)' : 'transparent',
                      color: calc.isComingSoon 
                        ? 'rgba(107, 114, 128, 0.6)' 
                        : isActive 
                          ? 'var(--brand-primary-dark)' 
                          : 'var(--brand-text-accent)',
                    }}
                  >
                    <IconComponent size={20} />
                    <span className="text-xs font-medium text-center leading-tight">
                      {calc.name.split(' ')[0]}
                    </span>
                  </button>
                  
                  {/* Coming Soon Badge for Mobile */}
                  {calc.isComingSoon && (
                    <div className="absolute -top-1 -right-1 bg-gray-800 text-white text-[10px] px-1.5 py-0.5 rounded-md font-semibold">
                      SOON
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  // Desktop Sidebar
  const DesktopNavigation = () => (
    <div 
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 transition-all duration-300 hidden md:block ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div 
        className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.85) 100%)`,
        }}
      >
        {/* Header */}
        <div className="p-4 border-b border-gray-100/50">
          <div className="flex items-center justify-between">
            {!isCollapsed && (
              <div className="flex items-center space-x-2">
                <div 
                  className="w-6 h-6 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: 'var(--brand-primary)' }}
                >
                  <span className="text-white text-xs font-bold">E</span>
                </div>
                <span 
                  className="font-semibold text-sm"
                  style={{ color: 'var(--brand-text-accent)' }}
                >
                  Calculator Tools
                </span>
              </div>
            )}
            
            <button
              onClick={handleToggle}
              className="p-1.5 rounded-lg transition-colors duration-200 hover:bg-gray-100/50"
              style={{ color: 'var(--brand-primary)' }}
            >
              {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
            </button>
          </div>
        </div>

        {/* Navigation */}
        <div className="p-2">
          {/* Home Link */}
          <button
            onClick={() => handleNavigation('home')}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 mb-2 ${
              currentCalculator === 'home' 
                ? 'shadow-md' 
                : 'hover:bg-gray-50/50'
            }`}
            style={{
              backgroundColor: currentCalculator === 'home' ? 'var(--brand-primary-light)' : 'transparent',
              color: currentCalculator === 'home' ? 'var(--brand-primary-dark)' : 'var(--brand-text-accent)',
            }}
          >
            <Home size={18} />
            {!isCollapsed && <span className="font-medium text-sm">Home</span>}
          </button>

          {/* Separator */}
          <div className="h-px bg-gray-100/50 my-3" />

          {/* Calculator Links */}
          <div className="space-y-1">
            {calculators.map((calc) => {
              const IconComponent = calc.icon;
              const isActive = currentCalculator === calc.id;
              
              return (
                <div key={calc.id} className="relative">
                  <button
                    onClick={() => handleNavigation(calc.id, calc.isComingSoon)}
                    className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-200 ${
                      calc.isComingSoon 
                        ? 'opacity-50 cursor-not-allowed' 
                        : isActive 
                          ? 'shadow-md' 
                          : 'hover:bg-gray-50/50'
                    }`}
                    style={{
                      backgroundColor: isActive && !calc.isComingSoon ? 'var(--brand-primary-light)' : 'transparent',
                      color: calc.isComingSoon 
                        ? 'rgba(107, 114, 128, 0.6)' 
                        : isActive 
                          ? 'var(--brand-primary-dark)' 
                          : 'var(--brand-text-accent)',
                    }}
                  >
                    <IconComponent size={18} />
                    {!isCollapsed && (
                      <div className="flex items-center justify-between w-full">
                        <span className="font-medium text-sm truncate">{calc.name}</span>
                        {calc.isComingSoon && (
                          <span className="text-[10px] bg-gray-800 text-white px-2 py-0.5 rounded-md font-semibold ml-2">
                            SOON
                          </span>
                        )}
                      </div>
                    )}
                  </button>
                  
                  {/* Coming Soon Badge for Collapsed State */}
                  {calc.isComingSoon && isCollapsed && (
                    <div className="absolute -top-1 -right-1 bg-gray-800 text-white text-[8px] px-1 py-0.5 rounded-md font-semibold">
                      SOON
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <DesktopNavigation />
      <MobileNavigation />
    </>
  );
}