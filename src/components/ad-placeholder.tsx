interface AdPlaceholderProps {
  className?: string;
}

export function AdPlaceholder({ className = '' }: AdPlaceholderProps) {
  return (
    <div className={`w-full flex justify-center px-6 ${className}`}>
      <div 
        className="w-full max-w-4xl h-24 rounded-2xl border-2 border-dashed flex items-center justify-center relative overflow-hidden"
        style={{ 
          borderColor: 'var(--brand-primary)',
          backgroundColor: 'rgba(20, 184, 166, 0.05)'
        }}
      >
        {/* Subtle background pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, var(--brand-primary) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}
        />
        
        <div className="relative z-10 text-center">
          <div 
            className="font-medium text-sm mb-1"
            style={{ color: 'var(--brand-primary)' }}
          >
            Advertisement Space
          </div>
          <div 
            className="text-xs opacity-60"
            style={{ color: 'var(--brand-text-accent)' }}
          >
            728 × 90 • Leaderboard
          </div>
        </div>
        
        {/* Corner decorations */}
        <div 
          className="absolute top-2 right-2 w-3 h-3 rounded-full"
          style={{ backgroundColor: 'var(--brand-primary-light)' }}
        />
        <div 
          className="absolute bottom-2 left-2 w-2 h-2 rounded-full"
          style={{ backgroundColor: 'var(--brand-primary-light)' }}
        />
      </div>
    </div>
  );
}