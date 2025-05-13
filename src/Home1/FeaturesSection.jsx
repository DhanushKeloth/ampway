import React from "react";
import { Zap, Truck, Package, Battery } from "lucide-react";
import { AiFillThunderbolt } from "react-icons/ai";
const FeaturesSection = () => {
const features = [
  {
    icon: <Zap className="text-white w-6 h-6" />,
    title: "EV-as-a-Service",
    description:
      "Ampway offers fleet electrification through innovative EV subscription and leasing models.",
    bgColor: "bg-[#3FB185]",
  },
  {
    icon: <Truck className="text-white w-6 h-6" />,
    title: "Charging Infrastructure",
    description:
      "We establish robust charging networks to keep your electric fleet running efficiently.",
    bgColor: "bg-[#3F56B1]",
  },
  {
    icon: <Package className="text-white w-6 h-6" />,
    title: "Tech-Enabled Fleet Management",
    description:
      "Monitor, optimize, and manage your fleet in real-time using our smart dashboard.",
    bgColor: "bg-[#B13F41]",
  },
  {
    icon: <Battery className="text-white w-6 h-6" />,
    title: "End-to-End Electrification",
    description:
      "From EV procurement to deployment and maintenance, Ampway handles the entire lifecycle.",
    bgColor: "bg-[#B19E3F]",
  },
];


  return (
    <section className="w-full py-24  relative">
      <div className="container mx-auto px-4 w-3/4 ">
        <h2 className="text-5xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          Ampway helps companies electrify freight logistics with efficient,
          eco-friendly, and scalable solutions.
        </p>

        <div className="grid grid-cols-2  place-items-center relative bg-gray-100">
          {features.map((feature, index) => {
            let borderStyle = {};
            if (index === 0) {
              // Top-left card: right border
              borderStyle = {
                borderRight: "4px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            } else if (index === 1) {
              // Top-right card: bottom border
              borderStyle = {
                borderBottom: "4px solid transparent",
                borderImage:
                  "linear-gradient(to right, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            } else if (index === 2) {
              // Bottom-left card: top border
              borderStyle = {
                borderTop: "4px solid transparent",
                borderImage:
                  "linear-gradient(to left, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            } else if (index === 3) {
              // Bottom-right card: left border
              borderStyle = {
                borderLeft: "4px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            }

            // Set white background only for index 1 and 2
            let cardBg =
              "bg-gradient-to-b from-green-400/20 via-white to-white";

            if (index === 0) {
              cardBg = "bg-gradient-to-tl from-green-400/20 via-white to-white";
            } else if (index === 1 || index === 2) {
              cardBg = "bg-white";
            }
            else{
              cardBg = "bg-gradient-to-br from-green-400/20 via-white to-white";
            }

            return (
              <div
                key={index}
                className={`p-8 rounded-xl w-full h-72 flex justify-center items-center shadow-sm ${cardBg} `}
                style={borderStyle}
              >
                <div className="flex flex-col items-center  gap-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${feature.bgColor} rounded-lg`}
                  >
                    {feature.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold font-fontheader text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-5 text-lg">{feature.description}</p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center circle overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#3FB185]">
              {/* <span className="text-2xl font-bold text-green-500">H</span>
               */}
               <AiFillThunderbolt  color="#33A675" className="w-10 h-10 rounded-lg"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
