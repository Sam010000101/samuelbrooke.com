import AnimateInOnScroll from "./AnimateInOnScroll";
import Card from "./Card";
import services from "@lib/services.json";
export default function MultiCard() {
  return (
    <AnimateInOnScroll
      animationClasses="fade-in"
      duration="duration-1000"
      delay="delay-0"
    >
      <section id="services" className="services">
        <div id="services-header" className="">
          <h2 className="to-info-50 container mx-auto flex h-[calc(100vh-80px)] flex-col content-center justify-center gap-4 rounded-xs bg-linear-to-t from-info/10 px-0 text-center font-mono text-4xl font-bold text-primary antialiased shadow-sm text-shadow-lg sm:mt-8 sm:h-full sm:flex-row sm:bg-none sm:px-10 sm:py-4 sm:pt-2.5 sm:pb-2 sm:text-left sm:text-5xl sm:text-white/80 sm:shadow-none sm:max-md:text-4xl">
            <span
              className="flex justify-center text-7xl sm:hidden"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="1em"
                height="1em"
              >
                <path
                  fill="#BE1931"
                  d="M12.908 30.75c-.276 2.209-2.291 3-4.5 3s-3.776-1.791-3.5-4l1-9c.276-2.209 2.291-4 4.5-4s6.468 0 3.5 4s-1 10-1 10"
                />
                <path
                  fill="#CCD6DD"
                  d="M35.825 14.75c0 6.902-1.544 12.5-3.45 12.5c-1.905 0-20.45-5.598-20.45-12.5s18.545-12.5 20.45-12.5c1.906 0 3.45 5.597 3.45 12.5"
                />
                <ellipse
                  cx="32.375"
                  cy="14.75"
                  fill="#66757F"
                  rx="3.45"
                  ry="12.5"
                />
                <path
                  fill="#DD2E44"
                  d="m17.925 21.75l-14-1c-5 0-5-12 0-12l14-1c-3 3-3 11 0 14"
                />
                <ellipse
                  cx="31.325"
                  cy="14.75"
                  fill="#99AAB5"
                  rx="1.5"
                  ry="4.348"
                />
              </svg>
            </span>
            <span
              className="hidden self-center rounded-full sm:inline"
              aria-hidden="true"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 36 36"
                width="1em"
                height="1em"
              >
                <path
                  fill="#BE1931"
                  d="M12.908 30.75c-.276 2.209-2.291 3-4.5 3s-3.776-1.791-3.5-4l1-9c.276-2.209 2.291-4 4.5-4s6.468 0 3.5 4s-1 10-1 10"
                />
                <path
                  fill="#CCD6DD"
                  d="M35.825 14.75c0 6.902-1.544 12.5-3.45 12.5c-1.905 0-20.45-5.598-20.45-12.5s18.545-12.5 20.45-12.5c1.906 0 3.45 5.597 3.45 12.5"
                />
                <ellipse
                  cx="32.375"
                  cy="14.75"
                  fill="#66757F"
                  rx="3.45"
                  ry="12.5"
                />
                <path
                  fill="#DD2E44"
                  d="m17.925 21.75l-14-1c-5 0-5-12 0-12l14-1c-3 3-3 11 0 14"
                />
                <ellipse
                  cx="31.325"
                  cy="14.75"
                  fill="#99AAB5"
                  rx="1.5"
                  ry="4.348"
                />
              </svg>
            </span>{" "}
            <span className="w-screen text-shadow-lg">
              Speak to me about...
            </span>
          </h2>
        </div>
        <div className="services container mx-auto grid grid-cols-1 items-center justify-center gap-0 px-0 sm:gap-8 sm:px-10 sm:py-16 xl:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={`${service.name}-${index}`}
              id={service.idPrefix}
              articleClassName="service-card h-screen sm:h-auto"
              icon={service.icon}
              title={service.name}
              description={service.description}
              imageVisible={true}
              imageSrc={service.iconSrc}
              headingLevel="h3"
              formType={service.formType}
              label={service.label}
              submitLabel="Send Enquiry"
            />
          ))}
        </div>
      </section>
    </AnimateInOnScroll>
  );
}
