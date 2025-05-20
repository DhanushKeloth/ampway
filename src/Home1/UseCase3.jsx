import { useState } from "react";
import mine from "../assets/MININGBG (1).json";
import port from "../assets/portdha.json"
import Lottie from "lottie-react";
import highway from "../assets/Highway.json"
export default function UseCase3() {
  const [activeTab, setActiveTab] = useState("green");

  const tabContent = {
    green: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "This is the Green Card content. The primary card with nature-themed information.",
      title: "Green Card",
      icon: "♪",
      label: "Mining",
      accent: "green",
      'data':mine
    },
    red: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "This is the Red Card content. Showcasing vibrant and energetic information.",
      title: "Red Card",
      icon: "▶",
      label: "Port",
      accent: "red",
      'data':port
    },
    blue: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "This is the Blue Card content. Calm and cool information lives here.",
      title: "Blue Card",
      icon: "□",
      label: "Highway",
      accent: "blue",
      'data':highway
    },
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="lg:hidden flex flex-col items-center w-full p-2 mb-16">
      {/* Tabs Navigation */}
      <div className="w-auto bg-gray-200 rounded-xl p-2 mb-6 flex justify-center">
        {Object.entries(tabContent).map(([key, tab]) => (
          <button
            key={key}
            className={`mx-2 px-4 py-2 rounded-lg transition-all duration-200 font-medium ${
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
            className={`absolute w-full transition-all duration-300 border-2 rounded-xl ${tab.border} ${tab.color} p-4 transform ${
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
