"use client";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import { WithContext, Person } from "schema-dts";

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
        <div className="bg-hero absolute top-0 h-screen w-full gap-0 text-shadow-md sm:gap-2">
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
              <h1 className="bg-texture m-4 w-full rounded-lg border-1 border-white/20 bg-base-200/95 p-2 sm:w-fit sm:p-3 sm:px-3">
                <span className="flex text-5xl font-bold text-primary text-shadow-lg sm:flex-row md:text-7xl xl:text-nowrap">
                  Samuel Brooke:
                </span>
                <span className="flex items-center text-2xl text-shadow-md sm:flex-row md:text-7xl">
                  Freelance Web Designer
                </span>
                <span className="flex items-center justify-between text-2xl text-shadow-md sm:flex-row md:text-7xl">
                  & Developer{" "}
                  <svg
                    viewBox="0 0 50.000053 50.000038"
                    className="inline-block h-8 w-8 rotate-90 md:h-16 md:w-16"
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
                        <stop
                          offset="10%"
                          stopColor="#4dabff
"
                        />{" "}
                        {/* purple-500 */}
                        <stop offset="50%" stopColor="#fff" />{" "}
                        <stop
                          offset="90%"
                          stopColor="#4dabff
"
                        />{" "}
                        {/* pink-500 */}
                      </linearGradient>
                    </defs>
                    <g id="layer2">
                      <g id="g7" transform="translate(-95.205558,-208.25193)">
                        <path
                          style={{
                            opacity: 0.712788,
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
                            opacity: 0.712788,
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
                            opacity: 0.712788,
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
                </span>
              </h1>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
