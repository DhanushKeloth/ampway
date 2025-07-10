import { useState } from "react";
import mine from "../assets/MININGBG (1).json";
import port from "../assets/portdha (1).json";
import Lottie from "lottie-react";
// import highway from "../assets/Highway.json";
import warehouse from "../assets/Highway copy (1).json"
import { TruckElectric } from "lucide-react";
import highway from "../assets/Highway copy copy.json"

export default function UseCase3() {
  const [activeTab, setActiveTab] = useState("green");

  const tabContent = {
    green: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "Enhance safety and efficiency in mining with rugged, zero-emission electric trucks.",
      title: "Green Card",
      icon: "⚒️",
      label: "Mining",
      accent: "green",
      data: mine,
    },
    red: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "Boost port productivity and lower emissions with our electric truck solutions.",
      title: "Red Card",
      icon: "🚢",
      label: "Port",
      accent: "red",
      data: port,
    },
    blue: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "Electrify highway logistics for cleaner and more efficient freight transport.",
      title: "Blue Card",
      icon: "🚛",
      label: "Highway",
      accent: "blue",
      data: highway,
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="lg:hidden flex flex-col items-center w-full h-screen p-4 mb-16">
      {/* Text Section */}
      <span className="bg-gray-300 mb-5 text-md text-black px-8 py-2 rounded-full flex items-center w-fit mx-auto">
        <TruckElectric className="inline mr-2" height={20} />
        Use cases
      </span>
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold leading-tight">
          Go electric with zero-emission trucks
        </h2>
        <p className="text-gray-600 mt-4 text-base leading-relaxed">
          Drive sustainability and efficiency across your operations with our
          cutting-edge electric trucks designed for real-world use cases.
        </p>
      </div>

      {/* Tabs Navigation */}
      <div className="w-auto bg-gray-200 rounded-xl p-2 mb-6 flex justify-center">
        {Object.entries(tabContent).map(([key, tab]) => (
          <button
            key={key}
            className={`mx-2 px-2 py-2 rounded-lg transition-all duration-200 font-medium ${
              activeTab === key
                ? "bg-white text-black shadow-md"
                : "text-gray-500 hover:bg-gray-200"
            }`}
            onClick={() => handleTabClick(key)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Cards Display */}
      <div className="relative w-full h-96">
        {Object.entries(tabContent).map(([key, tab]) => (
          <div
            key={key}
            className={`absolute w-full transition-all duration-300 border-2 rounded-xl ${
              tab.border
            } ${tab.color} p-4 transform ${
              activeTab === key
                ? "z-30 scale-100 opacity-100"
                : "z-10 scale-90 opacity-0"
            }`}
          >
            <div className="flex flex-col gap-4">
              <div className="text-black">
                <h1 className="font-bold text-2xl">{tab.label}</h1>
                <p className="text-base mt-2">{tab.text}</p>
              </div>
              <div
                className={`w-full mt-2 bg-${tab.accent}-200 h-auto rounded-lg flex items-center justify-center`}
              >
                <Lottie
                  animationData={tab.data}
                  loop={true}
                  className="w-full h-auto rounded-lg overflow-hidden"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
