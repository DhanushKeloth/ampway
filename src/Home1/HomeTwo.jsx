import React, { useState, useEffect } from "react";
import LogistFooter from "../components/LogistFooter";
import Lottie from "lottie-react";
// import animationData from "./assets/PORTFINALANIMATION.json"
import portdha from "../assets/portdha.json";
import Button from "./Button";
import MoveText from "./MoveText";
import Aditya_D from "../assets/Aditya_D.png";
import Aditya_L from "../assets/Aditya_L.png";
import ProfileCard from "./ProfileCard";
import ProfileFull from "./ProfileFull";
import WhyChoose from "./WhyChoose";
import GetConnexted from "./GetConnected";
import mine from "../assets/imagemine.png";
import { AiFillThunderbolt } from "react-icons/ai";
import FAQ from "./FAQ";
import FAQ2 from "./FAQ2";
// import StackedCard from "./StackedCard"
import Clients from "./Clients";
import homepage from "../assets/home_page (3).svg";
import Services2 from "./Services2";
import UseCase from "./UseCase";
import FeaturesSection from "./FeaturesSection";
import UseCase2 from "./UseCase2";
import port from "../assets/WhatsApp Image 2025-05-16 at 23.19.28.jpeg";
import homemain from "../assets/homepage_ampway.svg"

const HomeTwo = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <div className="bg-gray-100 min-h-screen flex justify-center p-3 mb-44">
        {/* Navbar */}
        <nav
          className={`fixed bg-opacity-90 backdrop-blur z-50 top-0 left-0 right-0 bg-white mx-auto w-4/5 p-4 flex items-center justify-between shadow-md  rounded-full transition-transform duration-300 ${
            showNavbar ? "translate-y-0 mt-3" : "-translate-y-full"
          }`}
        >
          <div className="flex gap-2">
            <AiFillThunderbolt
              color="#33A675"
              className="w-10 h-10 rounded-lg"
            />
            <div className="font-bold text-3xl">Ampway</div>
          </div>
          <div className="flex items-center gap-6 font-fontheader font-semibold">
            <a href="#" className="text-gray-700 hover:text-black text-lg">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black text-lg">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black text-lg">
              About
            </a>
            <button className="bg-[#33A675] text-white rounded-full px-6 py-3 font-medium text-lg">
              Contact us
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 flex items-center justify-center mt-20">
          <div className="flex flex-col items-center text-center mb-12 -mt-56">
            <h2 className="md:text-3xl lg:text-7xl leading-tight mb-6 text-gray-900 manrope-font">
              <div className="flex flex-col gap-5">
                <span>Powering Freight</span>
                <span>Electrification</span>
              </div>
            </h2>

            <p className="text-xl text-gray-600 mb-3 max-w-2xl w-3/4">
              Ampway provides sustainable medium and heavy-duty transportation,
              driven by renewable power.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="bg-[#33A675] text-white rounded-full px-6 py-3 font-fontheader text-lg"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="absolute w-full mx-auto -mt-16">
            <img src={homemain} alt="homepage" />
          </div>
        </div>
      </div>

      <Clients />
      <FeaturesSection />
      <UseCase />
      <UseCase2 />

      {/* Port section */}
      <div className="w-full mx-auto shadow-md rounded-2xl overflow-hidden mb-10 mt-40 bg-white">
        <div className="relative p-8">
          <div className="flex flex-col justify-center items-center">
            <div className="md:w-full bg-[#F1F5F9]">
              {/* Replace with animation if needed */}
              <img src={port} alt="portdha" className="w-[60%]" />
            </div>
            <div className="md:w-1/2 p-8">
              <h1 className="font-bold text-5xl text-gray-900">Port</h1>
              <h3 className="text-xl text-gray-600 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </h3>
            </div>
          </div>
        </div>
      </div>

      {/* Mining section */}
      <div className="w-4/5 mx-auto rounded-2xl overflow-hidden mb-10 mt-10 bg-[#393838] from-neutral-700 to-neutral-900">
        <div className="relative p-8">
          <div className="flex md:flex-row items-center justify-around">
            <p className="text-5xl font-bold text-yellow-400">Mining</p>
            <img src={mine} width="600px" className="rounded-2xl" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 flex flex-col items-center justify-center gap-10 p-10 h-screen w-4/5 ml-auto mr-auto rounded-[3rem]">
        <p className="text-[4rem] font-bold">Meet Our Team</p>
        <div className="flex gap-10">
          <ProfileFull
            profile={Aditya_D}
            name="Adithya Dahagama"
            title="Co Founder"
          />
          <ProfileFull
            profile={Aditya_L}
            name="Aditya Lanka"
            title="Co Founder"
          />
        </div>
      </div>

      {/* FAQs */}
      <div className="flex justify-center">
        <FAQ2 />
      </div>

      
      <GetConnexted />
      <LogistFooter />
    </div>
  );
};

export default HomeTwo;
