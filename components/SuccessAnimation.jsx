'use client';

import { useEffect, useState } from 'react';

export default function SuccessAnimation({ isVisible, onComplete }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        onComplete?.();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      
      <div className="relative bg-zinc-900 border border-zinc-700 rounded-xl p-8 mx-4 max-w-sm w-full text-center">
        {/* Success Icon */}
        <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
          <svg 
            className="w-8 h-8 text-green-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={3} 
              d="M5 13l4 4L19 7" 
            />
          </svg>
        </div>
        
        {/* Success Message */}
        <h3 className="text-xl font-semibold text-white mb-2">
          🎉 Ders Tamamlandı!
        </h3>
        <p className="text-zinc-300">
          Tebrikler! Bu dersi başarıyla tamamladınız.
        </p>
        
        {/* Progress Indicator */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
}
