"use client";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import { WithContext, Person } from "schema-dts";
import Image from "next/image";

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel Brooke",
  jobTitle: "Freelance Web Designer & Developer",
  url: "https://samuelbrooke.com",
  sameAs: [
    "https://github.com/sam010000101",
    "https://uk.linkedin.com/in/sam-brooke-4bb43a13",
    "https://dev.to/sambr00ke",
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Vercel",
    "GitHub",
    "HTML5",
    "CSS3",
    "Accessibility",
    "Performance Optimization",
    "SEO",
    "Google Analytics",
    "Digital Marketing",
  ],
};

export default function Hero() {
  const [hydrated, setHydrated] = useState(false);
  const { ref } = useParallax<HTMLDivElement>({ speed: 20 });

  useEffect(() => {
    setHydrated(true);
  }, []);

  return (
    <>
      <a href="#hero" tabIndex={-1} className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section
        id="hero"
        className="wrapper relative hero h-screen will-change-transform motion-reduce:transform-none"
      >
        {/* Background Image */}
        <div className="absolute top-0 h-screen w-full gap-0 text-shadow-md sm:gap-2">
          <Image
            src="web-dev-background-240725.svg"
            alt="Background illustration showing the world"
            fill
            priority={true}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="z-[-10] object-cover py-2"
          />
          {/* <picture>
            <source
              srcSet="https://aucs.co.uk/assets/images/web-dev-background-240725_01.webp"
              type="image/webp"
            />
            <img
              src="https://aucs.co.uk/assets/images/web-dev-background-240725_01.png"
              alt="Background illustration showing modern web design tools"
              className="absolute inset-0 z-[-10] h-full w-full object-cover py-2"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </picture> */}
          {/* Text Block */}
          <header role="banner" className="flex h-screen flex-col">
            <div
              ref={ref ?? undefined}
              className="flex h-screen w-full items-center sm:px-6 xl:w-max"
              style={{
                transform: hydrated ? undefined : "translateY(40px)", // mimic parallax start
                transition: " opacity 0.4s ease",
                opacity: hydrated ? 1 : 0,
              }}
            >
              <div className="bg-texture mx-auto mt-10 flex w-full flex-col items-center justify-center gap-2 border-2 border-[#89ff8e]/10 bg-black-sabath p-3 !pr-4 shadow-lg sm:m-4 sm:w-fit sm:flex-row sm:gap-2 sm:rounded-lg sm:border-1 sm:p-4 sm:px-3 sm:max-sm:self-end landscape:sm:max-md:mb-20 landscape:sm:max-md:self-end">
                <svg
                  viewBox="0 0 50.000053 50.000038"
                  className="w-30 rotate-90 rounded-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="myGradient"
                      x1="0%"
                      y1="0%"
                      x2="80%"
                      y2="110%"
                    >
                      <stop offset="10%" stopColor="#89ff8e" />{" "}
                      {/* purple-500 */}
                      {/* <stop offset="50%" stopColor="#fff" />{" "} */}
                      <stop
                        offset="80%"
                        stopColor="#89ff8e
"
                      />{" "}
                      {/* pink-500 */}
                    </linearGradient>
                  </defs>
                  <g id="layer2">
                    <g id="g7" transform="translate(-95.205558,-208.25193)">
                      <path
                        style={{
                          opacity: 0.9,
                          fill: "url(#myGradient)",
                          fillOpacity: 1,
                          fillRule: "evenodd",
                          stroke: "currentColor",
                          strokeWidth: 0,
                          strokeLinejoin: "bevel",
                          strokeOpacity: 1,
                        }}
                        d="m 120.20557,208.25195 h 25.00001 v 25.00001 z"
                        id="path2-1-4"
                      />
                      <path
                        style={{
                          opacity: 0.6,
                          fill: "url(#myGradient)",
                          fillRule: "evenodd",
                          stroke: "currentColor",
                          strokeWidth: 0,
                          strokeLinejoin: "bevel",
                        }}
                        d="m 145.20557,235.93511 -27.68318,-27.68318 h -8.36923 l 36.05241,36.05241 z"
                        id="path7-5"
                      />
                      <path
                        style={{
                          opacity: 0.3,
                          fill: "url(#myGradient)",
                          fillRule: "evenodd",
                          stroke: "currentColor",
                          strokeWidth: 0,
                          strokeLinejoin: "bevel",
                        }}
                        d="m 145.20561,246.64493 -38.39301,-38.393 H 95.205558 l 50.000052,50.00004 z"
                        id="path5-8"
                      />
                    </g>
                  </g>
                </svg>
                <h1 className="gap-4 text-2xl text-shadow-md md:text-6xl xl:text-nowrap">
                  <span className="block font-bold text-[#89ff8e] md:text-7xl">
                    Samuel Brooke:
                  </span>
                  <span className="block">Freelance Web Engineer</span>
                </h1>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
