import { WithContext, Service } from "schema-dts";
import Avatar from "./Avatar";
import Link from "next/link";

const structuredData: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://samuelbrooke.com/#free-site-audit",
  name: "Free Website Audit",
  serviceType: "Website Performance and SEO Review",
  description:
    "Free audit of your website with recommendations for improving performance, SEO, and user experience. No obligation.",
  provider: {
    "@type": "Person",
    name: "Samuel Brooke | Freelance Web Designer & Developer",
    url: "https://samuelbrooke.com",
  },
  offers: {
    "@type": "Offer",
    name: "Free Site Audit",
    price: "0",
    priceCurrency: "GBP",
    url: "https://samuelbrooke.com/#audit",
    availability: "https://schema.org/InStock",
  },
  areaServed: {
    "@type": "GeoShape",
    name: "Worldwide",
    box: "-90 -180 90 180",
  },
  audience: {
    "@type": "Audience",
    audienceType: "Small Business Owners, Designers, Developers",
  },
};

export default function Footer() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
      <footer className="border-t-2 border-white/5">
        <div className="bg-texture footer flex flex-col items-center justify-between px-10 pt-10 pb-7 text-base-300 sm:gap-6 sm:pt-8 md:pb-10 xl:flex-row">
          <aside className="flex w-full flex-col items-center justify-start gap-4 sm:gap-4 lg:flex-row landscape:flex-row">
            <div className="mb-1 md:mb-4">
              <Avatar />
            </div>
            <Link className="w-full" href="/">
              <p className="flex flex-col items-center text-center font-mono sm:gap-2 lg:flex-row landscape:items-start landscape:text-left">
                <span className="text-lg font-bold text-[#89ff8e]">
                  Samuel Brooke
                </span>
                <span className="hidden text-lg text-slate-400/80 lg:block">
                  {" "}
                  |{" "}
                </span>
                <span className="text-lg font-semibold text-[#89ff8e]">
                  Web Development & Design
                </span>
                <span className="hidden text-lg text-slate-400/80 lg:block">
                  {" "}
                  |{" "}
                </span>
                <span className="pt-2 text-lg text-slate-400 sm:pt-0">
                  © {new Date().getFullYear()} All rights reserved.
                </span>
              </p>
            </Link>
          </aside>

          <nav className="flex flex-row gap-4 text-[#89ff8e]/70 lg:self-end landscape:self-end">
            {/* LinkedIn */}
            <a
              href="https://uk.linkedin.com/in/sam-brooke-4bb43a13"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z"></path>
              </svg>
            </a>
            {/* Github */}
            <a href="https://github.com/sam010000101" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 496 512"
                className="fill-current"
              >
                <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
              </svg>
            </a>
            {/* Dev */}
            <a href="https://dev.to/sambr00ke" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 448 512"
                className="fill-current"
              >
                <path d="M120.1 208.3c-3.9-2.9-7.8-4.4-11.7-4.4H91v104.5h17.5c3.9 0 7.8-1.5 11.7-4.4 3.9-2.9 5.8-7.3 5.8-13.1v-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32H43.9C19.7 32 .1 51.6 0 75.8v360.4C.1 460.4 19.7 480 43.9 480h360.2c24.2 0 43.8-19.6 43.9-43.8V75.8c-.1-24.2-19.7-43.8-43.9-43.8zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3h-46.4V173h47.4c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7H201.6v38.4h32.6v29.6H201.6v38.4h53.3v29.6h-62.2c-11.2 .3-20.4-8.5-20.7-19.7V193.7c-.3-11.2 8.6-20.4 19.7-20.7h63.2l0 29.5zm103.6 115.3c-13.2 30.8-36.9 24.6-47.4 0l-38.5-144.8h32.6l29.7 113.7 29.6-113.7h32.6l-38.5 144.8z" />
              </svg>
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
