import { WithContext, Service } from "schema-dts";
import Image from "next/image";
import { geistMono } from "@/fonts";
import * as Icons from "@/icons";
import AnimateInOnScroll from "./AnimateInOnScroll";
import EnquiryFormButton from "./EnquiryFormButton";

interface CardProps {
  id?: string; // Optional ID for the article element
  articleClassName?: string;
  icon?: string; // Icon name from services.json
  title?: string;
  description: string;
  imageVisible?: boolean;
  imageSrc?: string;

  headingLevel?: "h2" | "h3" | "h4" | "h5" | "h6";
  formType: string; // Form type for EnquiryFormButton
  label: string; // Label for EnquiryFormButton
  submitLabel?: string; // Optional submit label for EnquiryFormButton
}

const fallbackImage = "./web-dev-background.svg";

export default function Card({
  articleClassName = "service-card",
  id,
  icon,
  title = "Title",
  description = "Description",
  imageVisible = true,
  imageSrc = "./web-dev-background.svg",
  headingLevel: HeadingTag = "h2",
  formType,
  label,
  submitLabel,
}: CardProps) {
  // Dynamically resolve the icon component from the Icons object
  const IconComponent =
    icon && Object.prototype.hasOwnProperty.call(Icons, icon)
      ? Icons[icon as keyof typeof Icons]
      : null;

  const serviceSchema: WithContext<Service> = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    description: description,
    provider: {
      "@type": "Organization",
      name: "Samuel Brooke | Freelance Web Designer & Developer",
      url: "https://samuelbrooke.com",
    },
    areaServed: {
      "@type": "Country",
      name: "United Kingdom",
    },
    serviceType: title,
    url: `https://samuelbrooke.com/#${id || "web-development"}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c"),
        }}
      />
      <AnimateInOnScroll
        animationClasses="animate-in fade-in slide-in-from-bottom"
        duration="duration-1000"
        delay="delay-300"
      >
        <article
          id={id}
          aria-labelledby={`${id}-title`}
          className={`${articleClassName} ${geistMono.className} service-card flex h-full w-full items-stretch antialiased`}
        >
          <div className="image-full divide card h-full w-full animate-in divide-y-4 divide-y-reverse divide-info/25 rounded-xl border-[#4dabff]/10 bg-black-sabath/50 duration-1000 fade-in slide-in-from-bottom sm:divide-y-0 sm:border-2 sm:shadow-xl">
            <div className="h-full w-full flex-1">
              {/* Image is optional */}
              {imageVisible && (
                <div className="relative h-full max-w-full opacity-15">
                  <Image
                    className="rounded-xl opacity-35"
                    src={imageSrc?.trim() || fallbackImage}
                    alt=""
                    role="presentation"
                    aria-hidden="true"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              )}
            </div>
            <div className="card-body w-full justify-center gap-2">
              <figure className="flex h-fit flex-col items-center gap-2 text-zinc-400 sm:flex-row sm:gap-4 sm:self-start">
                {/* Render the icon component if it exists */}
                {IconComponent && (
                  <IconComponent
                    aria-hidden="true"
                    role="presentation"
                    className="text-grey-300 h-10 w-10 shrink-0"
                  />
                )}
                <HeadingTag className="card-title items-center gap-4 rounded-xs text-center text-4xl text-[#89ff8e] text-shadow-lg sm:px-2 sm:text-left">
                  {title}
                </HeadingTag>
              </figure>

              <div
                className="card-actions flex h-fit w-full flex-col gap-8 sm:gap-2 sm:py-1"
                aria-label={`Actions for ${title}`}
              >
                <p className="mb-2 text-center text-lg text-zinc-400 sm:text-left sm:text-2xl">
                  {description}
                </p>
                <div className="w-full self-center sm:w-fit sm:self-end">
                  <EnquiryFormButton
                    className="!rounded-md !border-1 border-[#89ff8e] text-[#89ff8e] opacity-75 hover:bg-[#89ff8e]/5 hover:text-[#89ff8e]"
                    formType={formType}
                    label={label}
                    submitLabel={submitLabel}
                    title={title}
                  />
                </div>
              </div>
            </div>
          </div>
        </article>
      </AnimateInOnScroll>
    </>
  );
}
