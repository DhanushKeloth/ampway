import React from "react";
import { Zap, Truck, Package, Battery, TruckElectric } from "lucide-react";
import Services from "./Services";

const Services2 = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Electric Vehicles",
      description: "From EV procurement to deployment and maintenance, we handle the entire lifecycle.",
      bgColor: "bg-green-100",
    },
    {
      icon: <Truck className="w-12 h-12 text-teal-600" />,
      title: "Charging Infrastructure",
      description: "We plan, design, and install robust charging networks to efficiently move your freight.",
      bgColor: "bg-teal-100",
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "Renewable Electricity",
      description: "We power your freight movement with asset backed renewable electricity.",
      bgColor: "bg-cyan-100",
    },
    {
      icon: <Battery className="w-12 h-12 text-green-600" />,
      title: "Fleet Tracking",
      description: "We monitor, manage, and optimize your freight movement in real-time using state-of-the-art tech",
      bgColor: "bg-emerald-100",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="w-full  mx-auto">
    <span className="bg-[#FFAC20] mb-5 text-md text-black px-8 py-2 rounded-full flex items-center w-fit mx-auto">
        <TruckElectric className="inline mr-2" height={20} />
        Our Service
      </span>
        <h2 className="md:text-5xl text-2xl font-bold text-center mb-4">Zero Emissions Transportation (ZET) as a Service</h2>
        <p className="md:text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Ampway helps companies electrify freight logistics with efficient,
          eco-friendly, and scalable solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} rounded-3xl p-8 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-4 leading-tight">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services2;
