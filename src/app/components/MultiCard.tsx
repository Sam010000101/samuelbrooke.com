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
        <div id="services-header">
          <h2 className="to-info-50 container mx-auto flex w-screen flex-col content-center gap-4 rounded-xs bg-linear-to-t from-info/10 px-0 py-4 text-center text-4xl font-bold text-nowrap text-[#89ff8e] antialiased shadow-sm text-shadow-lg sm:mt-8 sm:h-full sm:flex-row sm:bg-none sm:px-10 sm:py-4 sm:pt-2.5 sm:pb-2 sm:text-left sm:text-5xl sm:text-white sm:shadow-none sm:max-md:text-4xl">
            Speak to me about
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
