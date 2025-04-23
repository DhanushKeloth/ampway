import React from "react";
// import decoration from "../assets/Asset 2.svg";
import Lottie from "lottie-react";
import animationData from "../assets/mining.json"
export default function Card() {
  return (
    <div className="min-h-full bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="md:flex justify-between items-center">
          {/* Image area */}
          <div className="flex justify-center">
            {/* <img
              src={decoration}
              alt="Cargo Aircraft"
              className="max-w-full h-[400px] w-[500px]"
            /> */}
            <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-[500px] h-[500px]"
          />
          </div>

          {/* Text content */}
          <div className=" flex-col md:w-1/2">
            <div className="space-y-6 text-center md:text-left">

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Fast Air Transport
            </h1>
            <p className="text-lg text-gray-600">
              Put your trust in our track record of reliable cargo delivery,
              where we always put your shipments' safe and on-time arrival
              first.
            </p>
            </div>
            <div className="pt-4 md:justify-start flex justify-center">
              <button className="flex items-center bg-gray-900 text-white px-8 py-3 rounded hover:bg-gray-800 transition-colors">
                Get Started
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200"></div>
    </div>
  );
}
