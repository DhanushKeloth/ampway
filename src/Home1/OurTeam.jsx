import React from "react";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import adityad from "../assets/Aditya_D.png";
import adityal from "../assets/Aditya_L.png";

export default function OurTeam() {
  const teamMembers = [
    {
      name: "Adithya Dahagama",
      role: "Co Founder",
      description:
        "Our Co-founder brings strategic vision and financial expertise, guiding the company towards long-term stability.",
      image: adityad,
      twitter: "#",
      linkedin: "#",
    },
    {
      name: "Aditya Lanka",
      role: "Co Founder",
      description:
        "Our Co-founder brings strategic vision and financial expertise, guiding the company towards long-term stability.",
      image: adityal,
      twitter: "#",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-300 flex border-t items-center justify-center p-4 sm:p-8">
      <div className="max-w-6xl w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-[#6AC0CF] text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
            Ampway Team
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
            Our People
          </h1>
          <p className="text-gray-600 text-base sm:text-lg">
            Innovating the way people engage digitally.
            <br />
            Driven by passion, united by purpose, we create digital solutions
            that matter.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl overflow-hidden group hover:bg-gray-750 transition-all duration-300 hover:scale-105 shadow-md"
            >
              <div className="flex flex-col md:flex-row h-auto md:h-72">
                {/* Profile Image */}
                <div className="w-full md:w-auto p-3">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 md:h-full object-cover rounded-lg transition-all duration-300"
                  />
                </div>

                {/* Content Column */}
                <div className="w-full md:w-1/2 p-4 flex flex-col justify-between">
                  <div className="flex-1 flex flex-col justify-center">
                    <h3 className="text-black text-xl font-semibold mb-0">
                      {member.name}
                    </h3>
                    <div className="flex justify-start items-center mb-3">
                      <div className="border-[#33A675] text-[#33A675] px-0 py-1 rounded-full text-sm font-medium">
                        {member.role}
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-3 mt-4 md:mt-0">
                    <a href="#" className="text-gray-600 hover:text-[#1a7b56]">
                      <BsInstagram size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#1a7b56]">
                      <BsTwitter size={20} />
                    </a>
                    <a href="#" className="text-gray-600 hover:text-[#1a7b56]">
                      <BsLinkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
