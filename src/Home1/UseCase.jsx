import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import port from "../assets/WhatsApp Image 2025-05-16 at 23.19.28.jpeg";
import mine from "../assets/image.png";
import Lottie from "lottie-react";
import miningbg from "../assets/MININGBG.json";
import portdha from "../assets/portdha.json"
export default function SocialMediaMarketing() {
  const useCases = [
    
    {
      id: "mining",
      title: "Mining",
      description:
        "Enhance safety and efficiency in mining sites with durable, zero-emission electric trucks built for rugged terrain.",
      image: miningbg,
      bgColor: "bg-green-50",
    },
    {
      id: "ports",
      title: "Ports",
      description:
        "Optimize cargo handling and reduce emissions with our electric trucks designed for busy port operations.",
      image: portdha,
    },
    {
      id: "warehouses",
      title: "Warehouses",
      description:
        "Streamline internal logistics and cut operational costs using quiet and eco-friendly electric trucks optimized for warehouse environments.",
      image: "/api/placeholder/500/600",
      bgColor: "bg-yellow-50",
    },
    {
      id: "industrial",
      title: "Industrial Operations",
      description:
        "Power your industrial material handling with reliable electric trucks that reduce carbon footprint and improve productivity.",
      image: "/api/placeholder/500/600",
      bgColor: "bg-purple-50",
    },
  ];

  const [activeTab, setActiveTab] = useState("ports");
  const activeUseCase = useCases.find((uc) => uc.id === activeTab);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="p-6 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">EcoFleet Logistics</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              Sign In
            </button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div>
          <span className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Use cases
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Electrify your logistics
            <br />
            with zero-emission trucks
            <br />
            for ports, mining, warehouses,
            <br />
            and industrial sites
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
            Drive sustainability and efficiency across your operations with our
            cutting-edge electric trucks engineered for heavy-duty logistics.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full mt-8 flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>Learn more about our fleet</span>
          </button>
        </div>
      </section>

      {/* Interactive Use Cases Section */}
      <section className="max-w-full mx-auto px-6 py-12 ">
        <div className="flex  items-center  gap-12">
          {/* Left side - Tabs */}
          <div className="space-y-4 w-1/2">
            {useCases.map(({ id, title, description }) => (
              <div
                key={id}
                onClick={() => setActiveTab(id)}
                className={`bg-white rounded-2xl p-6 shadow transition-all cursor-pointer select-none ${
                  activeTab === id
                    ? "border-2 border-gray-200"
                    : "hover:shadow-md"
                }`}
              >
                <div className="flex items-center justify-between text-gray-700 text-lg font-medium">
                  {title}
                  <ArrowRight
                    className={`ml-2 transform transition-transform duration-200 ${
                      activeTab === id ? "rotate-90" : ""
                    }`}
                    size={18}
                  />
                </div>
                {activeTab === id && (
                  <div className="mt-4 text-gray-600">{description}</div>
                )}
              </div>
            ))}
          </div>

          {/* Right side - Image and background */}
          {/* Right side - Image and background */}
          <div className="relative w-11/12 ">
            <div
              className={`${activeUseCase.bgColor}  rounded-3xl flex items-center justify-center relative  transition-all duration-300`}
            >
              {/* <img
                src={activeUseCase.image}
                alt={`${activeUseCase.title} example`}
                className="w-full object-cover rounded-2xl"
              /> */}
              {activeUseCase.image && (
                <div className="w-full h-full flex items-center justify-center">
                  <Lottie
                    animationData={activeUseCase.image}
                    className="w-full object-cover rounded-2xl overflow-hidden"
                  />
                </div>
              )}
              
              {/* <Lottie
                animationData={activeUseCase.image}
                className="w-full object-cover rounded-2xl overflow-hidden"
              /> */}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 my-20">
        
      </section>
      
    </div>
  );
}
