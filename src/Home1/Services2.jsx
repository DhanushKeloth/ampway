import React from 'react';
import { Zap, Truck, Package, Battery } from 'lucide-react';
import Services from './Services';

const Services2 = () => {
  const services = [
    {
      icon: <Zap className="w-12 h-12 text-yellow-500" />,
      title: "Zero Emissions Freight",
      description: "Reduce your carbon footprint with electric trucks.",
      bgColor: "bg-green-100"
    },
    {
      icon: <Truck className="w-12 h-12 text-teal-600" />,
      title: "Trucking-as-a-Service",
      description: "Flexible fleet solutions without the ownership hassle",
      bgColor: "bg-teal-100"
    },
    {
      icon: <Package className="w-12 h-12 text-orange-500" />,
      title: "Tailored for Corporate Logistics",
      description: "Scalable services for enterprise supply chains",
      bgColor: "bg-cyan-100"
    },
    {
      icon: <Battery className="w-12 h-12 text-green-600" />,
      title: "Powered by Clean Energy",
      description: "Driving sustainability from source to delivery",
      bgColor: "bg-emerald-100"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="w-full  mx-auto">
        <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Ampway helps companies electrify freight logistics with efficient, eco-friendly, and scalable solutions.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`${service.bgColor} rounded-3xl p-8 hover:scale-105 transition-transform duration-300`}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="mb-6">
                  {service.icon}
                </div>
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