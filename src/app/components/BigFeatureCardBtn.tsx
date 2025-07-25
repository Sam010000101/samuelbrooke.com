"use client";
import { WithContext, Service } from "schema-dts";
import EnquiryFormButton from "./EnquiryFormButton";
import AnimateInOnScroll from "./AnimateInOnScroll";

const siteAuditSchema: WithContext<Service> = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://samuelbrooke.com/#free-site-audit",
  name: "Free Website Audit",
  serviceType: "Website Performance and SEO Review",
  description:
    "Free audit of your website with recommendations for improving performance, SEO, and user experience. No obligation.",
  provider: {
    "@type": "Person", // or "Organization" if applicable
    name: "Samuel Brooke | Freelance Web Designer & Developer",
    url: "https://samuelbrooke.com", // your real site URL
  },
  offers: {
    "@type": "Offer",
    name: "Free Site Audit",
    price: "0",
    priceCurrency: "GBP",
    url: "https://samuelbrooke.com/#audit", // direct link to section
    availability: "https://schema.org/InStock",
  },
  areaServed: {
    "@type": "GeoShape",
    name: "Worldwide",
    box: "-90 -180 90 180", // Covers the whole globe
  },

  audience: {
    "@type": "Audience",
    audienceType: ["Small Business Owners", "Designers", "Developers"],
  },
};

export default function BigFeatureCardBtn() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(siteAuditSchema).replace(/</g, "\\u003c"),
        }}
      />
      <AnimateInOnScroll
        animationClasses="animate-in fade-in slide-in-from-bottom"
        duration="duration-1000"
        delay="delay-300"
      >
        <section
          aria-labelledby="audit-heading"
          className="grid-row grid gap-y-8 md:px-10 xl:grid-cols-8"
        >
          <div className="card min-h-screen border border-primary/10 bg-info/5 text-neutral shadow-sm sm:col-start-2 sm:col-end-8 sm:min-h-full sm:border-2">
            <div className="card-body h-full place-content-center bg-linear-65 from-primary/10 to-accent/5 px-4 py-8 sm:p-8 sm:pb-8">
              {/* Accessible heading */}
              <header className="">
                <h2
                  id="audit-heading"
                  className="card-title rounded-xs text-center font-mono text-3xl font-bold tracking-wide text-[#89ff8e]/80 sm:py-1 sm:font-black md:font-titillium md:text-4xl lg:text-6xl"
                >
                  <span className="flex flex-wrap items-center justify-center gap-2">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-[2em] rounded-full bg-primary/10 p-2 text-white/60 md:size-[1.25em]"
                    >
                      <path d="M19 11v-1c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2S5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22" />
                      <path d="m21 22-1.714-1.714m.571-2.857a3.429 3.429 0 1 1-6.857 0a3.429 3.429 0 0 1 6.857 0M7 7h8m-8 4h4" />
                    </svg>
                    <div className="space-x-4">
                      <span>Request A</span>

                      <span className="text-white/60 underline underline-offset-4">
                        FREE
                      </span>
                      <span>Site Audit!</span>
                    </div>
                  </span>
                </h2>
              </header>

              {/* Row layout: paragraph + button */}
              <div className="flex flex-col gap-4 sm:items-center sm:justify-between sm:gap-6 md:gap-8 lg:flex-row">
                <p className="text-center font-mono text-xl text-zinc-300 sm:text-xl sm:leading-relaxed md:text-left md:text-lg">
                  Want a new website, or just want to improve your existing
                  one?... I offer a free audit of your current website, with
                  suggestions on how to improve it — including performance, SEO,
                  and user experience — no obligation!
                </p>
                <div className="mb-3 text-center sm:mb-0 sm:w-fit">
                  <EnquiryFormButton
                    className="!rounded-xs !border-2 border-[#89ff8e] text-[#89ff8e] opacity-75 hover:bg-[#89ff8e]/5 hover:text-[#89ff8e]"
                    formType="audit"
                    title="Free Audit"
                    aria-label="Free Audit"
                    label="Free Audit"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimateInOnScroll>
    </>
  );
}
