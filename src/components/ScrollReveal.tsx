import { useEffect, useRef, ReactNode } from "react";

type Animation =
  | "reveal-up"
  | "reveal-fade"
  | "reveal-scale"
  | "reveal-left"
  | "reveal-right"
  | "reveal-clip-up"
  | "reveal-clip-left";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: Animation;
  delay?: number;
  duration?: number;
  threshold?: number;
}

const ScrollReveal = ({
  children,
  className = "",
  animation = "reveal-up",
  delay = 0,
  duration,
  threshold = 0.15,
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`;
          if (duration) el.style.animationDuration = `${duration}ms`;
          el.classList.add(`animate-${animation}`);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, duration, threshold]);

  return (
    <div ref={ref} className={`opacity-0 ${className}`}>
      {children}
    </div>
  );
};

export default ScrollReveal;
