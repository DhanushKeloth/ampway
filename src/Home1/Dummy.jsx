import { useState } from "react";
import mine from "../assets/MININGBG (1).json";
import Lottie from "lottie-react";
import port from "../assets/portdha.json"
export default function Dummy() {
  const [activeTab, setActiveTab] = useState("green");

  // Tab content configuration
  const tabContent = {
    green: {
      color: "bg-gray-100",
      border: "border-none shadow-md",
      text: "This is the Green Card content. The primary card with nature-themed information.",
      title: "Green Card",
    },
    red: {
      color: "bg-white",
      border: "border-none shadow-md",
      text: "This is the Red Card content. Showcasing vibrant and energetic information.",
      title: "Red Card",
    },
    blue: {
      color: "bg-neutral-200",
      border: "border-none",
      text: "This is the Blue Card content. Calm and cool information lives here.",
      title: "Blue Card",
    },
    gray: {
      color: "bg-[#B6B9BA]",
      border: "border-none shadow-md",
      text: "This is the Gray Card content. Neutral and balanced information.",
      title: "Gray Card",
    },
  };

  // Function to handle tab click
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center max-w-4xl mx-auto p-4 mb-52">
      {/* Tabs Navigation */}
      <div className="w-full border-2 border-black rounded-lg p-2 mb-8 flex justify-between">
        <button
          className={`px-4 py-2 rounded-md w-1/4 mx-1 ${
            activeTab === "green" ? "bg-green-500 text-white" : "bg-green-200"
          }`}
          onClick={() => handleTabClick("green")}
        >
          Green Tab
        </button>
        <button
          className={`px-4 py-2 rounded-md w-1/4 mx-1 ${
            activeTab === "red" ? "bg-red-500 text-white" : "bg-red-200"
          }`}
          onClick={() => handleTabClick("red")}
        >
          Red Tab
        </button>
        <button
          className={`px-4 py-2 rounded-md w-1/4 mx-1 ${
            activeTab === "blue" ? "bg-blue-500 text-white" : "bg-blue-200"
          }`}
          onClick={() => handleTabClick("blue")}
        >
          Blue Tab
        </button>
        <button
          className={`px-4 py-2 rounded-md w-1/4 mx-1 ${
            activeTab === "gray" ? "bg-gray-500 text-white" : "bg-gray-200"
          }`}
          onClick={() => handleTabClick("gray")}
        >
          Gray Tab
        </button>
      </div>

      {/* Cards Display Area */}
      <div className="relative w-full h-96">
        {/* All cards are in the DOM, but positioned absolutely and shown/hidden based on active tab */}

        {/* Blue Card (Bottom) */}
        <div
          className={`absolute w-auto h-auto transition-all duration-300 border-4 rounded-2xl ${
            tabContent.blue.border
          } ${tabContent.blue.color} p-6 transform ${
            activeTab === "blue"
              ? "z-30 scale-100 opacity-100"
              : "z-10 -rotate-6 scale-95 opacity-80"
          }`}
          style={{ left: activeTab !== "blue" ? "-10%" : "0" }}
        >
          <div className="flex flex-col gap-6 items-center justify-center p-4">
            <div className="w-full ml-16 text-black">
              <h1 className="font-bold text-3xl">Port Logistics</h1>
              <p className="text-lg mt-2">{tabContent.blue.text}</p>
            </div>
            <div className="w-full md:w-11/12 mt-4 md:mt-0 md:mb-2 ">
              <Lottie
                animationData={port}
                loop={true}
                autoplay={true}
                className="w-full rounded-2xl overflow-hidden "
              />
            </div>
          </div>
        </div>

        {/* Red Card (Middle) */}
        <div
          className={`absolute w-auto h-auto transition-all duration-300 border-4 rounded-2xl ${
            tabContent.red.border
          } ${tabContent.red.color} p-6 transform ${
            activeTab === "red"
              ? "z-30 scale-100 opacity-100"
              : "z-20 rotate-3 scale-95 opacity-80"
          }`}
          style={{ right: activeTab !== "red" ? "-10%" : "0" }}
        >
          <div className="flex flex-col gap-6 items-center justify-center p-4">
            <div className="w-full ml-16 text-black">
              <h1 className="font-bold text-3xl">Port Logistics</h1>
              <p className="text-lg mt-2">{tabContent.green.text}</p>
            </div>
            <div className="w-full md:w-11/12 mt-4 md:mt-0 md:mb-2 ">
              <Lottie
                animationData={port}
                loop={true}
                autoplay={true}
                className="w-full rounded-2xl overflow-hidden "
              />
            </div>
          </div>
        </div>

        {/* Green Card (Top) */}
        <div
          className={`absolute w-auto h-auto transition-all duration-300 border-4 rounded-2xl ${
            tabContent.green.border
          } ${tabContent.green.color} p-6 transform ${
            activeTab === "green"
              ? "z-30 scale-100 opacity-100"
              : "z-10 -rotate-3 scale-90 opacity-0"
          }`}
        >
          {/* <h2 className="text-2xl font-bold mb-4">{tabContent.green.title}</h2> */}
          <div className="flex flex-col gap-6 items-center justify-center p-4">
            <div className="w-full ml-16 text-black">
              <h1 className="font-bold text-3xl">Port Logistics</h1>
              <p className="text-lg mt-2">{tabContent.green.text}</p>
            </div>
            <div className="w-full md:w-11/12 mt-4 md:mt-0 md:mb-2 ">
              <Lottie
                animationData={mine}
                loop={true}
                autoplay={true}
                className="w-full rounded-2xl overflow-hidden "
              />
            </div>
          </div>
        </div>

        {/* Gray Card */}
        <div
          className={`absolute w-auto h-auto transition-all duration-300 border-4 rounded-2xl ${
            tabContent.gray.border
          } ${tabContent.gray.color} p-6 transform ${
            activeTab === "gray"
              ? "z-30 scale-100 opacity-100"
              : "z-5 scale-90 opacity-0"
          }`}
        >
          <div className="flex flex-col gap-6 items-center justify-center p-4">
            <div className="w-full ml-16 text-black">
              <h1 className="font-bold text-3xl">Port Logistics</h1>
              <p className="text-lg mt-2">{tabContent.green.text}</p>
            </div>
            <div className="w-full md:w-11/12 mt-4 md:mt-0 md:mb-2 ">
              <Lottie
                animationData={port}
                loop={true}
                autoplay={true}
                className="w-full rounded-2xl overflow-hidden "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
