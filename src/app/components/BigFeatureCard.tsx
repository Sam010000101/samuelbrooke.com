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
  title = "Websites built with the latest frameworks for the modern web...",
  description = "high-performing & responsive websites fit for any device!",
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
        className="container mx-auto grid items-center px-2 py-6 sm:mb-4 sm:h-fit"
      >
        <div className="card h-full p-0 py-0 sm:h-fit sm:p-[1.5rem] sm:py-8 md:card-body">
          <div className="card-body justify-center gap-6 p-0 text-neutral sm:gap-12 sm:p-1 md:p-6 landscape:gap-16">
            <header className="flex flex-col items-center">
              <h2
                id="developer-tools-heading"
                className="card-title flex flex-wrap items-center justify-center gap-4 rounded-xs text-center font-mono text-2xl font-bold text-[#89ff8e]/90 text-shadow-lg sm:gap-2 sm:text-white md:text-5xl"
              >
                {title}
              </h2>
            </header>

            <div className="mx-auto grid grid-cols-1 place-items-center items-center gap-8 text-[#673AB7] sm:mx-0 sm:grid-cols-4 sm:gap-4 lg:px-50 landscape:grid-cols-4">
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
                    className="flex flex-col items-center gap-2"
                  >
                    <div className="h-12 w-12 sm:h-15 sm:w-15">
                      {feature.icon}
                    </div>
                    <figcaption
                      className="text-xl text-white/80"
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
                className="card-title rounded-xs bg-black-sabath/25 text-center font-mono text-2xl text-[#96cd98] lg:text-4xl"
              >
                <span className="text-xl text-shadow-lg sm:italic md:text-4xl">
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
