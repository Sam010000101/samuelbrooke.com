import Card from "./Card";
import services from "@lib/services.json";
export default function MultiCard() {
  return (
    <section id="services" className="services">
      <div
        id="services-header"
        className="grid grid-cols-1 items-center justify-center gap-8 px-0 sm:grid-cols-2 sm:py-0 lg:grid-cols-2"
      >
        <h2 className="to-info-50 col-span-2 container mx-auto h-screen content-center rounded-xs border-white/10 bg-linear-to-t from-primary/10 px-2 text-center font-mono text-4xl font-bold antialiased shadow-sm sm:mt-8 sm:h-full sm:border-0 sm:bg-none sm:px-0 sm:py-4 sm:pt-2.5 sm:pb-2 sm:pl-4 sm:text-left sm:text-5xl sm:text-white/80 sm:shadow-none sm:max-md:text-4xl">
          <span
            className="block w-full text-center text-7xl sm:hidden"
            aria-hidden="true"
          >
            📢
          </span>
          <span
            className="hidden self-center rounded-full sm:inline"
            aria-hidden="true"
          >
            📢
          </span>{" "}
          <span className="w-screen text-shadow-lg">Speak to me about...</span>
        </h2>
      </div>
      <div className="services container mx-auto grid grid-cols-1 items-center justify-center gap-0 px-0 sm:gap-8 sm:px-10 md:py-16 xl:grid-cols-2">
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
  );
}
