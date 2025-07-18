import Card from "./Card";
import services from "@lib/services.json";
export default function MultiCard() {
  return (
    <section
      id="services"
      className="services bg-transparent sm:bg-slate-400/5 sm:py-20"
    >
      <div
        id="services-header"
        className="grid grid-cols-1 items-center justify-center gap-8 px-0 sm:mb-10 sm:grid-cols-2 sm:px-10 sm:py-0 lg:grid-cols-2"
      >
        <h2 className="col-span-2 rounded-xs border-white/10 bg-info/5 px-2 pt-2.5 pb-2 text-center font-mono text-2xl font-bold antialiased sm:border-1 sm:px-0 sm:py-4 sm:pl-4 sm:text-left sm:text-5xl sm:text-white/80 sm:max-md:text-4xl">
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
      <div className="services grid grid-cols-1 items-center justify-center gap-0 px-0 sm:gap-8 sm:px-10 lg:grid-cols-2 xl:grid-cols-2">
        {services.map((service, index) => (
          <Card
            key={`${service.name}-${index}`}
            id={service.idPrefix}
            articleClassName="service-card"
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
