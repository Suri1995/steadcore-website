'use client';

import { useEffect, useRef, useState } from 'react';

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  from = 'bottom',
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  from?: 'bottom' | 'left' | 'right';
  className?: string;
}) {
  const { ref, visible } = useReveal();
  const hidden =
    from === 'left' ? 'translateX(-32px)' :
    from === 'right' ? 'translateX(32px)' :
    'translateY(28px)';
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : hidden,
        transition: `opacity 0.6s cubic-bezier(.16,1,.3,1) ${delay}s, transform 0.6s cubic-bezier(.16,1,.3,1) ${delay}s`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}