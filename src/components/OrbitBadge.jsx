import React, { useState, useEffect } from 'react';
import { Sparkles, Bot, Zap, Rocket } from 'lucide-react';

export default function OrbitBadge() {
  const words = ['Helping Teams', 'AI Products', 'Agentic Systems', 'SaaS MVPs'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-neutral-200/80 shadow-sm text-xs font-vietnam font-medium text-neutral-800 transition-all hover:border-neutral-300">
      <span className="flex h-2 w-2 relative">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#3649F5] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[#3649F5]"></span>
      </span>
      <span className="text-neutral-500">Shipped In Weeks:</span>
      <span className="font-semibold text-neutral-900 transition-all duration-300">
        {words[currentWordIndex]}
      </span>
    </div>
  );
}

