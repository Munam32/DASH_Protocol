
"use client";

import { useState, useEffect } from 'react';
import { Loader, PlayCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export function AnimatedIcon() {
  const [isBuffering, setIsBuffering] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsBuffering(false);
    }, 2000); // Animate for 2 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative h-24 w-24 text-primary">
      <Loader
        className={cn(
          "absolute inset-0 h-full w-full transform transition-all duration-500 ease-in-out",
          "spinning-loader",
          isBuffering ? "scale-100 opacity-100" : "scale-50 opacity-0"
        )}
      />
      <PlayCircle
        className={cn(
          "absolute inset-0 h-full w-full transform transition-all duration-500 ease-in-out",
          !isBuffering ? "scale-100 opacity-100" : "scale-150 opacity-0"
        )}
      />
    </div>
  );
}
