import ParallaxWrapper from "./components/ParallaxWrapper";
import { WithContext, WebPage } from "schema-dts";
import Hero from "./components/Hero";
import MultiCard from "./components/MultiCard";
import Footer from "./components/Footer";
import BigFeatureCardBtn from "./components/BigFeatureCardBtn";
import BigFeatureCard from "./components/BigFeatureCard";
import { ReactIcon, NextIcon, VercelIcon, TypeScriptIcon } from "@/icons";
import { integrations } from "@/data/integrations";
import LinksList from "./components/LinksList";

const homepageSchema: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Samuel Brooke | Freelance Web Designer & Developer",
  url: "https://samuelbrooke.com",
  description:
    "The profile page for Samuel Brooke, a freelance web designer and developer.",
};

const features = [
  { name: "React", href: "https://react.dev/", icon: <ReactIcon /> },
  { name: "Next.js", href: "https://nextjs.org/", icon: <NextIcon /> },
  { name: "Vercel", href: "https://vercel.com/home", icon: <VercelIcon /> },
  {
    name: "TypeScript",
    href: "https://www.typescriptlang.org/",
    icon: <TypeScriptIcon />,
  },
];

export default function Home() {
  return (
    <>
      {/* homepageSchema["@type"] = "WebPage"; */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homepageSchema).replace(/</g, "\\u003c"), // Escape '<' to prevent script injection
        }}
      />
      {/* Main Layout Structure */}
      <main className="grid-rows grid min-h-screen items-center gap-4 sm:gap-8">
        {/* Hero */}
        <ParallaxWrapper>
          <Hero />
        </ParallaxWrapper>
        {/* Services Section */}
        <MultiCard />
        {/* Main Layout Sub Structure */}
        <div className="grid sm:mt-10 sm:mb-20 sm:gap-8">
          {/* Frameworks and Libraries Block */}
          <BigFeatureCard features={features} />
          {/* 3rd Party Integrations Block */}
          <LinksList
            header="Third Party Integrations..."
            items={integrations}
            footer="...for full-on functionality"
          />
          {/* Free Website Audit Block */}
          <div className="py-10">
            <BigFeatureCardBtn />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
