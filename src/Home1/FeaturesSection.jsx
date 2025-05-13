import React from 'react';
import { Zap, Truck, Package, Battery } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "Trade Instantly",
      description: "Trade your favorite cryptocurrencies with fast and secure transactions",
      bgColor: "bg-[#3FB185]",
    },
    {
      icon: <Truck className="text-white w-6 h-6" />,
      title: "Secure Wallet Storage",
      description: "Store your digital assets safely with advanced encryption and protection",
      bgColor: "bg-[#3F56B1]",
    },
    {
      icon: <Package className="text-white w-6 h-6" />,
      title: "Market Insights",
      description: "Track live prices, trends, and analytics to make informed decisions",
      bgColor: "bg-[#B13F41]",
    },
    {
      icon: <Battery className="text-white w-6 h-6" />,
      title: "Seamless Conversion",
      description: "Deposit and withdraw funds instantly with multiple payment options",
      bgColor: "bg-[#B19E3F]",
    }
  ];

  return (
    <section className="w-full py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Ampway helps companies electrify freight logistics with efficient, eco-friendly, and scalable solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-xl w-full max-w-md bg-gradient-to-b from-green-400/20 via-white to-white border-t-4 border-transparent shadow-sm"
              style={{
                borderImage: 'linear-gradient(to right, transparent, #3FB185, transparent) 1',
                borderImageSlice: 1
              }}
            >
              <div className="flex flex-col items-center gap-6">
                <div className={`w-12 h-12 flex items-center justify-center ${feature.bgColor} rounded-lg`}>
                  {feature.icon}
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-extrabold text-black">{feature.title}</h3>
                  <p className="text-gray-600 mt-2">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
