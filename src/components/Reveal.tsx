import { useEffect, useRef, useState, HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  delay?: number;
  y?: number;
}

const Reveal = ({ className, delay = 0, y = 30, children, ...props }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform',
        visible ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0',
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
        transform: visible ? 'translateY(0)' : `translateY(${y}px)`,
        filter: visible ? 'blur(0)' : 'blur(6px)',
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default Reveal;
