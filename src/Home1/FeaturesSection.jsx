import React from 'react';
import { Zap, Truck, Package, Battery } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "Zero Emissions Freight",
      description: "Reduce your carbon footprint with electric trucks.",
      bgColor: "bg-[#3FB185]",
      gradient: "bg-gradient-to-br from-white/10 to-[#3FB185]/10"
    },
    {
      icon: <Truck className="text-white w-6 h-6" />,
      title: "Trucking-as-a-Service",
      description: "Flexible fleet solutions without the ownership hassle.",
      bgColor: "bg-[#3F56B1]",
      gradient: ""
    },
    {
      icon: <Package className="text-white w-6 h-6" />,
      title: "Tailored for Corporate Logistics",
      description: "Scalable services for enterprise supply chains.",
      bgColor: "bg-[#B13F41]",
      gradient: ""
    },
    {
      icon: <Battery className="text-white w-6 h-6" />,
      title: "Powered by Clean Energy",
      description: "Driving sustainability from source to delivery.",
      bgColor: "bg-[#B19E3F]",
      gradient: "bg-gradient-to-tl from-white/10 to-[#3FB185]/10"
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Ampway helps companies electrify freight logistics with efficient, eco-friendly, and scalable solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-lg ${feature.gradient || 'bg-white shadow-md'}`}
            >
              <div className="flex flex-col items-center gap-8">
                <div className={`w-[60px] h-[60px] flex items-center justify-center ${feature.bgColor} rounded-[10px]`}>
                  {feature.icon}
                </div>
                <div className="flex flex-col items-center gap-2">
                  <h3 className="font-['Inter_Tight'] font-extrabold text-3xl text-center tracking-tight text-[#101014]">
                    {feature.title}
                  </h3>
                  <p className="font-['Inter_Tight'] text-lg text-center tracking-tight text-[#6C6767]">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Central Decorative Hub */}
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:block">
            <div className="relative w-[140px] h-[140px] rounded-full border border-white/10 backdrop-blur-[30px] bg-white/[0.02]">
              <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-[#3FB185] rounded-full flex items-center justify-center">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9V21M24 9V21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="absolute w-[140px] h-[140px] left-0 top-0 rounded-full bg-gradient-to-br from-[rgba(63,177,133,0)] via-transparent to-[#3FB185] opacity-50"></div>
              <div className="absolute w-[140px] h-[140px] left-0 top-0 rounded-full bg-gradient-to-tl from-[rgba(63,177,133,0)] via-transparent to-[#3FB185] opacity-50 transform rotate-180"></div>
              <div className="absolute w-2 h-2 bg-[#3FB185] rounded-full left-[135px] top-[68px]"></div>
              <div className="absolute w-2 h-2 bg-[#3FB185] rounded-full left-[-3px] top-[76px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
