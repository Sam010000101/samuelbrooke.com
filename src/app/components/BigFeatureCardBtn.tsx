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
          className="grid items-center justify-center gap-y-8 md:px-10 xl:grid-cols-8"
        >
          <div className="card col-start-2 col-end-8 border border-primary/10 bg-info/5 text-neutral shadow-sm sm:border-2">
            <div className="card-body bg-linear-65 from-primary/10 to-accent/5 py-8 sm:p-8 sm:pb-8">
              {/* Accessible heading */}
              <header className="">
                <h2
                  id="audit-heading"
                  className="card-title rounded-xs text-center font-mono text-2xl text-primary/90 sm:px-2 sm:py-1 lg:text-4xl"
                >
                  <span className="flex flex-wrap items-center justify-center gap-4 sm:gap-2">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 22 24"
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="size-[2em] text-primary"
                    >
                      <path d="M19 11v-1c0-3.771 0-5.657-1.172-6.828S14.771 2 11 2S5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22" />
                      <path d="m21 22-1.714-1.714m.571-2.857a3.429 3.429 0 1 1-6.857 0a3.429 3.429 0 0 1 6.857 0M7 7h8m-8 4h4" />
                    </svg>
                    <div className="space-x-4">
                      <span>Request a</span>
                      <span className="text-primary underline underline-offset-4">
                        FREE
                      </span>
                      <span>Site Audit Today!</span>
                    </div>
                  </span>
                </h2>
              </header>

              {/* Row layout: paragraph + button */}
              <div className="flex flex-col gap-6 sm:items-center sm:justify-between lg:flex-row">
                <p className="text-center font-mono text-lg text-white/90 sm:text-left sm:text-xl sm:leading-relaxed">
                  Want a new website, or just want to improve your existing one?
                  I offer a free audit of your current website, with suggestions
                  on how to improve it — including performance, SEO, and user
                  experience — no obligation!
                </p>
                <div className="sm:w-fit">
                  <EnquiryFormButton
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
