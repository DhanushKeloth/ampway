import React from "react";
import { Zap, Truck, Package, Battery, TruckElectric } from "lucide-react";
import { AiFillThunderbolt } from "react-icons/ai";
const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="text-white w-6 h-6" />,
      title: "Renewable Electricity",
      description:
        "We power your freight movement with asset backed renewable electricity.",
      bgColor: "bg-[#3FB185]",
    },
    {
      icon: <Truck className="text-white w-6 h-6" />,
      title: "Charging Infrastructure",
      description:
        "We plan, design, and install robust charging networks to efficiently move your freight.",
      bgColor: "bg-[#3F56B1]",
    },
    {
      icon: <Battery className="text-white w-6 h-6" />,
      title: "End-to-End Electrification",
      description:
        "From EV procurement to deployment and maintenance, Ampway handles the entire lifecycle.",
      bgColor: "bg-[#B19E3F]",
    },
    {
      icon: <Package className="text-white w-6 h-6" />,
      title: "Fleet Tracking",
      description:
        "We monitor, manage, and optimize your freight movement in real-time using state-of-the-art technology.",
      bgColor: "bg-[#B13F41]",
    },
  ];

  return (
    <section className="w-full py-24  relative">
      <div className="container mx-auto px-4 md:w-3/4  ">
        <span className="bg-[#FFAC20] mb-5 text-md text-black px-8 py-2 rounded-full flex items-center w-fit mx-auto">
        <TruckElectric className="inline mr-2" height={20} />
        Services
      </span>
        <h2 className="md:text-5xl text-4xl font-bold text-center mb-4">
          Our Service
        </h2>
        <p className="md:text-xl text-lg text-gray-700 text-center mb-12 md:w-1/2 mx-auto w-3/5">
          Ampway helps companies reduce emissions and cost of freight logistics through electrification.
        </p>

        <div className="grid md:grid-cols-2 place-items-center relative bg-gray-100 md:gap-0 gap-3">
          {features.map((feature, index) => {
            // Default bottom border on small screens using Tailwind
            let baseBorderClass = "border-b-4 border-[#3FB185] ";

            // Conditional inline border styles only for md and above
            let mdBorderStyle = {};
            if (index === 0) {
              mdBorderStyle = {
                borderRight: "4px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            } else if (index === 1) {
              mdBorderStyle = {
                borderBottom: "4px solid transparent",
                borderImage:
                  "linear-gradient(to right, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            } else if (index === 2) {
              mdBorderStyle = {
                borderTop: "4px solid transparent",
                borderImage:
                  "linear-gradient(to left, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            } else if (index === 3) {
              mdBorderStyle = {
                borderLeft: "4px solid transparent",
                borderImage:
                  "linear-gradient(to bottom, transparent, #3FB185, transparent) 1",
                borderImageSlice: 1,
              };
            }

            let cardBg =
              "md:bg-gradient-to-b md:from-green-400/20 md:via-white md:to-white";
            if (index === 0) {
              cardBg =
                "md:bg-gradient-to-tl md:from-green-400/20 md:via-white md:to-white bg-gradient-to-tl from-green-400/20 via-white to-white";
            } else if (index === 1) {
              cardBg =
                "md:bg-gradient-to-tr md:from-white md:via-white md:to-white bg-gradient-to-br from-green-400/20 via-white to-white";
            } else if (index === 1 || index === 2) {
              cardBg =
                "md:bg-gradient-to-tr md:from-white md:via-white md:to-white bg-gradient-to-tl from-green-400/20 via-white to-white";
            } else {
              cardBg =
                "md:bg-gradient-to-br md:from-green-400/20 md:via-white md:to-white bg-gradient-to-br from-green-400/20 via-white to-white";
            }

            return (
              <div
                key={index}
                className={`p-8 rounded-xl w-full h-72 flex justify-center items-center shadow-sm ${cardBg} ${baseBorderClass} md:border-none`}
                style={window.innerWidth >= 768 ? mdBorderStyle : {}}
              >
                <div className="flex flex-col items-center gap-6">
                  <div
                    className={`w-12 h-12 flex items-center justify-center ${feature.bgColor} rounded-lg`}
                  >
                    {feature.icon}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-bold    text-black">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mt-5 text-lg">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Center circle overlay */}
          <div className="md:absolute md:block hidden top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-24 h-24 rounded-full bg-white shadow-lg flex items-center justify-center border-2 border-[#3FB185]">
              <AiFillThunderbolt
                color="#33A675"
                className="w-10 h-10 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
