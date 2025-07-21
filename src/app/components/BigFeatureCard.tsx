import React from "react";
import AnimateInOnScroll from "./AnimateInOnScroll";
import Link from "next/link";

export type Feature = {
  name: string;
  href: string;
  icon: React.ReactNode;
};

interface BigFeatureCardProps {
  title?: string;
  description?: string;
  features: Feature[];
}

export default function BigFeatureCardIcons({
  title = "Websites built with the latest frameworks for the modern web",
  description = "...for high-performance & responsive websites that look great on any device!",
  features,
}: BigFeatureCardProps) {
  return (
    <AnimateInOnScroll
      animationClasses="animate-in fade-in slide-in-from-bottom"
      duration="duration-1000"
      delay="delay-300"
    >
      <section
        id="developer-tools"
        aria-labelledby="developer-tools-heading"
        className="container mx-auto grid h-[calc(100vh-50px)] border-t-1 border-b-1 px-2 sm:mb-4 sm:h-fit sm:border-0"
      >
        <div className="card rounded-xs border border-primary/10 p-0 py-0 shadow-lg sm:border-2 sm:bg-info/1 sm:p-[1.5rem] sm:py-8 md:card-body">
          <div className="card-body justify-center gap-12 p-0 text-neutral sm:gap-12 sm:p-1 md:p-6">
            <header className="flex flex-col items-center">
              <h2
                id="developer-tools-heading"
                className="card-title flex flex-wrap items-center justify-center gap-4 rounded-xs text-center font-mono text-2xl text-white/80 text-shadow-lg sm:gap-2 md:text-4xl"
              >
                {title}
              </h2>
            </header>

            <div className="mx-auto grid grid-cols-2 place-items-center items-center gap-12 text-primary sm:mx-0 sm:grid-cols-4 sm:gap-4 lg:px-50">
              {features.map((feature) => (
                <Link
                  href={feature.href}
                  key={feature.name}
                  aria-label={feature.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <figure
                    role="group"
                    className="flex h-25 w-25 flex-col items-center gap-2"
                  >
                    {feature.icon}
                    <figcaption
                      className="text-xl text-white/60"
                      id={`${feature.name.toLowerCase().replace(/[^a-z0-9-]/g, "")}-caption`}
                      aria-hidden="true"
                    >
                      {feature.name}
                    </figcaption>
                  </figure>
                </Link>
              ))}
            </div>
            <header className="flex flex-col items-center">
              <p
                id="technology-heading"
                className="card-title rounded-xs bg-black-sabath/25 text-center font-mono text-2xl text-white/90 sm:text-zinc-400 lg:text-4xl"
              >
                <span className="text-xl italic text-shadow-lg md:text-2xl">
                  {description}
                </span>
              </p>
            </header>
          </div>
        </div>
      </section>
    </AnimateInOnScroll>
  );
}
