'use client';

export default function ProgressBar({ 
  current, 
  total, 
  showText = true, 
  size = 'md',
  className = '',
  lang = 'tr'
}) {
  const percentage = total > 0 ? Math.round((current / total) * 100) : 0;
  
  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  };

  return (
    <div className={`w-full ${className}`}>
      {showText && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-zinc-300">
            {lang === 'tr' ? 'İlerleme' : 'Progress'}
          </span>
          <span className="text-sm text-zinc-400">
            {current}/{total} ({percentage}%)
          </span>
        </div>
      )}
      
      <div className={`w-full bg-zinc-800 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <div 
          className="h-full bg-gradient-to-r from-red-500 to-red-600 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        >
          {/* Shimmer effect */}
          <div className="h-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
