
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  threshold?: number;
  rootMargin?: string;
}

const Reveal: React.FC<RevealProps> = ({
  children,
  className,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  rootMargin = '0px',
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (ref.current) {
                if (direction === 'left') {
                  ref.current.classList.add('reveal-left-visible');
                } else if (direction === 'right') {
                  ref.current.classList.add('reveal-right-visible');
                } else {
                  ref.current.classList.add('reveal-visible');
                }
              }
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay, direction, threshold, rootMargin]);

  return (
    <div
      ref={ref}
      className={cn(
        direction === 'left'
          ? 'reveal-left'
          : direction === 'right'
          ? 'reveal-right'
          : 'reveal',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Reveal;
