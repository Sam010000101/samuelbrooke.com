import React from "react";
import Link from "next/link";
import { WithContext, ItemList } from "schema-dts";
import AnimateInOnScroll from "./AnimateInOnScroll";
import { integrations, IntegrationItem } from "@/data/integrations";
import { integrationIconMap } from "./iconMap";

type Props = {
  header: string;
  items: (IntegrationItem & { icon?: React.ReactNode })[];
  footer?: string;
};

const thirdPartyIntegrationsSchema: WithContext<ItemList> = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Third Party Integrations",
  itemListElement: integrations.map((item, index) => ({
    "@type": "Thing",
    position: index + 1,
    name: item.title,
    url: item.href,
  })),
};

export default function LinksList({ header, items, footer }: Props) {
  return (
    <>
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(thirdPartyIntegrationsSchema).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <AnimateInOnScroll
        animationClasses="animate-in fade-in slide-in-from-bottom"
        duration="duration-1000"
        delay="delay-300"
      >
        <div role="region" aria-labelledby="third-party-integrations">
          <section
            className="third-party-intergrations bg-slate-400/5 sm:mt-10 sm:pt-10 sm:pb-14"
            aria-labelledby="third-party-integrations"
          >
            <div className="container mx-auto rounded-box p-4 text-white sm:p-6">
              {/* Heading */}
              <h2
                id="third-party-integrations"
                className="pt-3 text-center font-mono text-2xl font-bold text-primary antialiased text-shadow-lg sm:mb-6 sm:pt-0 sm:text-left sm:text-4xl sm:text-info/80"
              >
                <span>{header}</span>
                {footer && (
                  <span className="block w-full text-center text-white/70 italic sm:hidden">
                    {footer}
                  </span>
                )}
              </h2>

              {/* Icon Grid */}
              <ul
                role="list"
                className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-4"
              >
                {items.map((item, index) => (
                  <li key={index} role="listitem">
                    <Link
                      href={item.href || "#"}
                      aria-label={item.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-5 rounded-md border border-white/10 p-5 shadow-md transition-transform duration-300 hover:scale-105 hover:bg-white/5"
                    >
                      <span
                        className="h-10 w-10 text-primary"
                        aria-hidden="true"
                      >
                        {item.icon ?? integrationIconMap[item.id] ?? null}
                      </span>
                      <span className="text-lg font-medium text-white">
                        {item.title}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Footer Text */}
              {footer && (
                <p className="hidden text-center font-mono text-2xl font-bold text-primary antialiased text-shadow-lg sm:mt-6 sm:block sm:pt-0 sm:text-right sm:text-4xl sm:text-info/80">
                  {footer}
                </p>
              )}
            </div>
          </section>
        </div>
      </AnimateInOnScroll>
    </>
  );
}
