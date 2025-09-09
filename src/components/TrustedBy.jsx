import { company_logos } from "../assets/assets";

const TrustedBy = () => {
  return (
    <div className="flex flex-col items-center gap-10 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white/80 overflow-hidden">
      <h3 className="font-medium">Trusted by Leading Companies</h3>

      <div className="max-w-4xl overflow-hidden m-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {company_logos.concat(company_logos).map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt=""
              className="h-6 w-auto mx-8 inline-block"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
