'use client';

export default function LoadingSkeleton({ type = 'card', count = 1 }) {
  const renderSkeleton = () => {
    switch (type) {
      case 'card':
        return (
          <div className="card p-6 animate-pulse">
            <div className="flex items-center justify-between mb-4">
              <div className="h-6 bg-zinc-700 rounded w-3/4"></div>
              <div className="h-4 w-4 bg-zinc-700 rounded"></div>
            </div>
            <div className="space-y-3">
              <div className="h-4 bg-zinc-700 rounded w-full"></div>
              <div className="h-4 bg-zinc-700 rounded w-5/6"></div>
              <div className="h-4 bg-zinc-700 rounded w-4/6"></div>
            </div>
          </div>
        );
      
      case 'lesson':
        return (
          <div className="space-y-6 animate-pulse">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="h-8 bg-zinc-700 rounded w-1/2"></div>
                <div className="h-6 w-20 bg-zinc-700 rounded"></div>
              </div>
              <div className="space-y-4">
                <div className="h-4 bg-zinc-700 rounded w-full"></div>
                <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
                <div className="h-4 bg-zinc-700 rounded w-5/6"></div>
              </div>
            </div>
            <div className="card p-6">
              <div className="h-6 bg-zinc-700 rounded w-1/3 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-zinc-700 rounded w-full"></div>
                <div className="h-4 bg-zinc-700 rounded w-4/5"></div>
              </div>
            </div>
          </div>
        );
      
      case 'quiz':
        return (
          <div className="card p-6 animate-pulse">
            <div className="h-6 bg-zinc-700 rounded w-1/2 mb-4"></div>
            <div className="space-y-3">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-12 bg-zinc-700 rounded"></div>
              ))}
            </div>
          </div>
        );
      
      default:
        return (
          <div className="animate-pulse">
            <div className="h-4 bg-zinc-700 rounded w-full mb-2"></div>
            <div className="h-4 bg-zinc-700 rounded w-3/4"></div>
          </div>
        );
    }
  };

  return (
    <div className="space-y-4">
      {[...Array(count)].map((_, i) => (
        <div key={i}>{renderSkeleton()}</div>
      ))}
    </div>
  );
}
