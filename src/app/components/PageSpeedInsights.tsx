"use client";
import styles from "./PageSpeedInsights.module.css";
import AnimateInOnScroll from "./AnimateInOnScroll";
import { useEffect, useState, useRef } from "react";
const criterion = ["Performance", "Accessibility", "Best Practices", "SEO"];

const desktopTargetValues: number[] = [99, 96, 100, 100];
const mobileTargetValues: number[] = [94, 96, 100, 100];

export default function PageSpeedInsights() {
  const [desktopAnimatedValues, setDesktopAnimatedValues] = useState<number[]>([
    0, 0, 0, 0,
  ]);
  const [mobileAnimatedValues, setMobileAnimatedValues] = useState<number[]>([
    0, 0, 0, 0,
  ]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const duration = 2000; // Animation duration in milliseconds
    const interval = 50; // Update interval in milliseconds

    const animateValues = (
      targetValues: number[],
      setValues: React.Dispatch<React.SetStateAction<number[]>>,
    ) => {
      targetValues.forEach((target: number, index: number) => {
        let current = 0;
        const step = (target / duration) * interval;

        const intervalId = setInterval(() => {
          current += step;
          if (current >= target) {
            current = target;
            clearInterval(intervalId);
          }
          setValues((prev: number[]) => {
            const updated = [...prev];
            updated[index] = Math.round(current);
            return updated;
          });
        }, interval);
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setTimeout(() => {
            animateValues(desktopTargetValues, setDesktopAnimatedValues);
            animateValues(mobileTargetValues, setMobileAnimatedValues);
            setHasAnimated(true);
          }, 300); // 300ms delay before animation starts
        }
      },
      { threshold: 0.5 },
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, [hasAnimated]);

  return (
    <AnimateInOnScroll
      animationClasses="animate-in fade-in slide-in-from-bottom"
      duration="duration-1000"
      delay="delay-300"
    >
      <div className="section wrapper flex flex-row justify-center py-0 md:bg-primary/5 lg:py-20">
        <section
          id="page-speed-insights"
          className="mx-auto my-10 grid w-fit grid-cols-1 gap-6 py-6 will-change-transform motion-reduce:transform-none min-[1700px]:grid-cols-[1fr_1fr] sm:h-fit lg:mx-25"
          ref={sectionRef}
        >
          <h2
            id="page-speed-insights-heading"
            className="self-center p-4 py-6 text-center font-mono text-2xl font-bold text-primary antialiased text-shadow-lg sm:pt-0 sm:pb-0 md:text-3xl md:text-white/75 lg:text-left lg:text-4xl xl:text-5xl"
          >
            Is your website built for the modern web?...
          </h2>
          <div className="container mx-auto grid w-fit grid-cols-1 items-center gap-1 rounded-sm text-center font-mono text-primary sm:py-10">
            {/* <div className="container mx-auto w-fit rounded-md border-1 border-white/5 bg-black-sabath p-4 text-center font-mono text-white"> */}
            <div className="grid w-full items-center justify-center gap-1 sm:grid-cols-2 md:py-0 lg:grid-cols-4">
              {criterion.map((crit, index) => (
                <div
                  className="flex flex-col items-center gap-2 rounded-sm border-1 border-[#89ff8e]/5 bg-black-sabath/50 p-1 text-xl shadow-sm lg:p-2"
                  key={index}
                >
                  <p className="font-normal text-[#89ff8e]">{crit}</p>
                  <div className="flex flex-row items-center justify-center gap-2 lg:gap-4">
                    <div className="flex flex-col items-center gap-2 p-1">
                      <p className="text-sm text-white/50">Desktop</p>
                      <div
                        className={styles.radialProgress}
                        style={
                          {
                            "--value": desktopAnimatedValues[index],
                            "--progress-color": "#89ff8e",
                            "--background-color": "transparent",
                          } as React.CSSProperties
                        }
                        aria-valuenow={desktopAnimatedValues[index]}
                        role="progressbar"
                      >
                        <p className="text-sm text-white/50">
                          {desktopAnimatedValues[index]}%
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-1">
                      <p className="text-sm text-white/50">Mobile</p>
                      <div
                        className={styles.radialProgress}
                        style={
                          {
                            "--value": mobileAnimatedValues[index],
                            "--progress-color": "#89ff8e",
                            "--background-color": "transparent",
                          } as React.CSSProperties
                        }
                        aria-valuenow={mobileAnimatedValues[index]}
                        role="progressbar"
                      >
                        <p className="text-sm text-white/50">
                          {mobileAnimatedValues[index]}%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex h-full w-full flex-row items-center justify-center rounded-sm border-[#89ff8e]/5 p-1 shadow-sm md:border-1 md:bg-black-sabath/25">
              <p className="!mb-0 w-fit px-2 text-xl font-normal text-white/75">
                Google PageSpeed Insights Module
              </p>
            </div>
          </div>
        </section>
      </div>
    </AnimateInOnScroll>
  );
}
