import React from "react";
// import LogistFooter from "./components/LogistFooter";
import LogistFooter from "./LogistFooter";
import Lottie from "lottie-react";
// import animationData from "./assets/PORTFINALANIMATION.json"
import portdha from "../assets/portdha.json"

const DarkThemed = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      {/* Header with subtle top line */}
      

      <div className="bg-gray-900 min-h-screen flex justify-center p-4">
        {/* Navigation - using a dark theme with rounded button */}
        <nav className="absolute top-0 left-0 right-0 bg-gray-800 rounded-full mx-auto w-3/5 py-3 px-6 flex items-center justify-between shadow-md mt-5">
          <div className="font-bold text-2xl text-gray-200">Ampway</div>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-400 hover:text-gray-200">Home</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">Services</a>
            <a href="#" className="text-gray-400 hover:text-gray-200">About</a>
            <button className="bg-blue-600 text-white rounded-full px-4 py-1">Contact us</button>
          </div>
        </nav>
       
        <div className="container mx-auto px-4 flex items-center justify-center">
          <div className="flex flex-col items-center text-center mb-12 mt-24">
            {/* Main headline using large typography like in the image */}
            <h2 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight mb-6 text-gray-400">
              Powering Freight
              <br />
              Electrification
            </h2>
            <p className="text-lg text-gray-500 mb-8 max-w-2xl">
              Ampway provides sustainable medium and heavy-duty transportation, driven by renewable power.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="bg-blue-600 text-white rounded-full px-4 py-2 hover:bg-blue-700"
              >
                Explore Services
              </a>
              <a
                href="#"
                className="flex items-center text-gray-400 hover:text-gray-200"
              >
                <div className="w-12 h-12 rounded-full border-2 border-gray-600 flex items-center justify-center mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                Watch more
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Port section with light background and dark text like the Proudreed card */}
      <div className="w-[80%] mx-auto shadow-lg rounded-2xl overflow-hidden mb-20 mt-10 bg-[#1AB9C2]">
        <div className="relative">
          <div className="absolute top-40 left-20">
            {/* Using red color for the heading similar to the "proudreed" text */}
            <h1 className="font-bold text-6xl text-red-600">Port</h1>
            <h3 className="text-2xl w-3/4 mt-9 text-gray-900">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </h3>
          </div>
          <div>
            <Lottie
              animationData={portdha}
              loop={true}
              autoplay={true}
              
            />
          </div>
        </div>
      </div>
      <div className="w-[80%] mx-auto shadow-lg rounded-2xl overflow-hidden mb-20 mt-10 bg-[#0A5755]">
        <div className="relative">
          <div className="absolute top-40 left-20">
            {/* Using red color for the heading similar to the "proudreed" text */}
            <h1 className="font-bold text-6xl text-[#E1F8CF]">Port</h1>
            <h3 className="text-2xl w-3/4 mt-9 text-[#E1F8CF]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </h3>
          </div>
          <div>
            <Lottie
              animationData={portdha}
              loop={true}
              autoplay={true}
              
            />
          </div>
        </div>
      </div>
     
      <LogistFooter />
    </div>
  );
};

export default DarkThemed;