'use client';

import { useScramble } from 'use-scramble';
import { useEffect, useState } from 'react';

export default function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [hasRun, setHasRun] = useState(false);

  // Only run on first visit per browser (persist using localStorage)
  useEffect(() => {
    const seen = typeof window !== 'undefined' && localStorage.getItem('seenLoader') === 'true';
    if (seen) {
      onComplete();
    } else {
      setHasRun(true);
      localStorage.setItem('seenLoader', 'true');
    }
  }, [onComplete]);

  const { ref, replay } = useScramble({
    text: 'SYSTEM INITIALIZING, LINKING TO SYM...'
  });

  useEffect(() => {
    if (!hasRun) return;
    replay();
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);
    return () => clearTimeout(timer);
  }, [hasRun, onComplete, replay]);

  if (!hasRun) return null; // if not running (repeat visit), render nothing

  return (
    <div className="fixed inset-0 bg-[var(--background)] flex items-center justify-center z-50">
      <div className="text-center">
        <div ref={ref} className="text-[var(--accent)] font-msgothic text-lg sm:text-xl tracking-wider" />
      </div>
    </div>
  );
} 