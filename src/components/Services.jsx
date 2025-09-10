import { useState } from "react";
import assets from "../assets/assets";
import ServicesCard from "./ServicesCard";

const services = [
  {
    logo: assets.ads_icon,
    heading: "Advertising",
    info: "We turn ideas into powerful digital solutions that connect, engage, and inspire.",
  },
  {
    logo: assets.marketing_icon,
    heading: "Content marketing",
    info: "We turn ideas into powerful digital solutions that connect, engage, and inspire.",
  },
  {
    logo: assets.content_icon,
    heading: "Content writing",
    info: "We turn ideas into powerful digital solutions that connect, engage, and inspire.",
  },
  {
    logo: assets.social_icon,
    heading: "Social media",
    info: "We turn ideas into powerful digital solutions that connect, engage, and inspire.",
  },
];
const Services = () => {
  return (
    <div
      id="services"
      className="relative flex flex-col items-center text-center gap-7 pt-30 pb-20 px-4 sm:px-12 lg:px-24 xl:px-40 text-gray-700 dark:text-white"
    >
      {/* red light effect */}
      <img
        src={assets.bgImage2}
        alt="background-image"
        className="absolute -top-110 -left-70 -z-1 dark:hidden"
      />

      <h3 className="font-medium text-3xl sm:text-4xl lg:text-5xl">
        How can we help?
      </h3>
      <p className="font-medium text-center text-gray-700 dark:text-white/75 max-w-lg mb-6">
        From strategy to execution, we craft digital solutions that move your
        bussiness forward.
      </p>

      <div className="flex flex-col md:grid md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <ServicesCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
