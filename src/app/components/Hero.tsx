"use client";
import { useParallax } from "react-scroll-parallax";
import { useEffect, useState } from "react";
import { WithContext, Person } from "schema-dts";
import Image from "next/image";

const personSchema: WithContext<Person> = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Samuel Brooke",
  jobTitle: "Freelance Web Engineer",
  url: "https://samuelbrooke.com",
  sameAs: [
    "https://github.com/sam010000101",
    "https://uk.linkedin.com/in/sam-brooke-4bb43a13",
    "https://dev.to/sambr00ke",
  ],
  knowsAbout: [
    "Web Development",
    "Front-end Development",
    "Back-end Development",
    "Full-stack Development",
    "Software Engineering",
    "Web Design",
    "User Experience (UX)",
    "User Interface (UI)",
    "Responsive Design",
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
    "Page Speed Insights",
    "Web Performance",
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
            src="web-dev-background-250725.svg"
            alt="Background illustration showing the world"
            fill
            priority={true}
            sizes="(max-width: 480px) 100vw, (max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
            className="z-[-10] object-cover py-2"
          />
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
              <div className="mx-auto flex flex-row items-center justify-center gap-2 rounded-lg border-1 border-[#89ff8e]/10 bg-black-sabath py-2 !pr-3 !pl-1 shadow-lg sm:w-fit sm:gap-3 sm:p-4 sm:px-3 sm:max-sm:self-end landscape:mt-10 landscape:sm:mx-0 landscape:sm:max-md:mb-20 landscape:sm:max-md:self-end landscape:2xl:!pr-5">
                <div className="flex h-16 max-[361px]:h-13 max-[361px]:w-13 md:h-27 md:w-27 landscape:sm:h-23 landscape:sm:w-23 landscape:2xl:h-37 landscape:2xl:w-37">
                  <svg
                    viewBox="0 0 50.000053 50.000038"
                    preserveAspectRatio="xMidYMid meet"
                    className="h-full w-auto rotate-90 rounded-lg md:rounded-xl landscape:sm:rounded-xl"
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
                            fill: "#00b6ff",
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
                </div>
                <h1 className="gap-4 divide-y-2 divide-info/10 text-2xl text-shadow-md md:text-6xl xl:text-nowrap">
                  <span className="block text-4xl font-bold text-[#89ff8e] max-[361px]:text-3xl md:text-7xl landscape:sm:text-6xl landscape:2xl:text-8xl">
                    Samuel Brooke:
                  </span>
                  <span className="block max-[360px]:text-xl md:text-5xl landscape:sm:text-4xl landscape:2xl:text-7xl">
                    Freelance Web Engineer
                  </span>
                </h1>
              </div>
            </div>
          </header>
        </div>
      </section>
    </>
  );
}
