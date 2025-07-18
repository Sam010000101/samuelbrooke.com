"use client";
import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  animationClasses?: string; // e.g. "animate-in fade-in zoom-in"
  duration?: string; // e.g. "duration-1000"
  delay?: string; // e.g. "delay-200"
};

export default function AnimateInOnScroll({
  children,
  animationClasses = "animate-in fade-in slide-in-from-bottom",
  duration = "duration-300 ease-in",
  delay = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${visible ? `${animationClasses} ${duration} ${delay}` : "opacity-0"}`}
    >
      {children}
    </div>
  );
}
