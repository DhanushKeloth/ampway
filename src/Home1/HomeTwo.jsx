import React, { useState, useEffect } from "react";
import LogistFooter from "../components/LogistFooter";
import Lottie from "lottie-react";
// import animationData from "./assets/PORTFINALANIMATION.json"

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

import Services2 from "./Services2";
import UseCase from "./UseCase";
import FeaturesSection from "./FeaturesSection";
import UseCase2 from "./UseCase2";
import port from "../assets/WhatsApp Image 2025-05-16 at 23.19.28.jpeg";
import homemain from "../assets/homepage_ampway.svg";

import { HiMenu, HiX } from "react-icons/hi"; // at top with other imports
import Dummy from "./Dummy";
import Services from "./Services";
import UseCase3 from "./UseCase3";
import Footer2 from "./Footer2";
import Footer3 from "./Footer3";
import Footer4 from "./Footer4";
import Footer5 from "./Footer5";
import OurTeam from "./OurTeam";
// import logotext from "../assets/ampwaylogotext_1.svg"
import logo from "../assets/logo.svg";
import thunder from "../assets/voltage.svg";
import electricnobg from "../assets/electricgrid_nobg.svg";
const HomeTwo = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
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
      <div className="bg-gray-100 min-h-screen flex justify-center p-3 md:mb-44 -mb-16">
        {/* Navbar */}
        <nav
          className={`fixed z-50 top-0 left-0 right-0  bg-white w-[90%]md:h-20
           md:w-4/5 md:mx-auto mx-2 p-2 flex items-center justify-between shadow-md rounded-full transition-transform duration-300 ${
             showNavbar ? "translate-y-0 mt-3" : "-translate-y-full"
           }`}
        >
          {/* Logo */}
          <div className="flex items-center gap-2 ml-3">
            {/* <AiFillThunderbolt
              color="#33A675"
              className="w-8 h-8 md:w-8 md:h-8"
            /> */}
            <img src={logo} alt="Logo" className="w-8  h-8 md:w-9 md:h-9 " />

            <span className="font-bold  text-2xl md:text-2xl">Ampway</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6 font-semibold">
            <a href="#" className="text-gray-700 hover:text-black text-md">
              Home
            </a>
            <a
              href="#services"
              className="text-gray-700 hover:text-black text-md"
            >
              Services
            </a>
            <a
              href="#ourteam"
              className="text-gray-700 hover:text-black text-md"
            >
              About
            </a>
            <button className="bg-[#33A675] text-white rounded-full px-6 py-3 text-md">
              Contact us
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden mr-2 flex align-center p-1">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <HiX className="w-8 h-8 text-gray-800" />
              ) : (
                <HiMenu className="w-8 h-8 text-gray-800" />
              )}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {menuOpen && (
            <div className="absolute top-full left-0 mx-auto w-full bg-white shadow-md rounded-xl py-4 px-6 mt-2 z-40 flex flex-col gap-4 md:hidden">
              <a href="#" className="text-gray-700 hover:text-black text-base">
                Home
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-black text-base"
              >
                Services
              </a>
              <a
                href="#ourteam"
                className="text-gray-700 hover:text-black text-base"
              >
                About
              </a>
              <button className="bg-[#33A675] text-white rounded-full px-4 py-2 text-base">
                Contact us
              </button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-4 flex items-center justify-center md:mt-20 mt-3">
          <div className="flex flex-col items-center text-center mb-12 md:-mt-56 -mt-16">
            <h2 className="md:text-3xl lg:text-6xl leading-tight md:mb-6 mb-4 text-gray-900 manrope-font text-[2.25rem]">
              <div className="flex flex-col md:gap-5 gap-2">
                {/* <span>Powering Freight</span> */}
                <span>Decarbonizing Freight</span>
                {/* <span>Freight </span> */}
              </div>
            </h2>

            <p className="md:text-xl text-lg text-gray-600 mb-4 md:max-w-2xl w-full">
              Ampway provides sustainable medium and heavy-duty transportation
              service, powered by renewable electricity.
            </p>

            <div className="flex z-10 items-center border-2 border-[#33A675] rounded-full p-1  justify-center ">
              <a
                href="#services"
                className="bg-[#33A675]  text-white rounded-full shadow-md md:px-6 md:py-3 px-4 py-2  md:text-lg text-md"
              >
                Explore Services
              </a>
            </div>
          </div>
          <div className="absolute w-full  md:-mt-16 mt-72">
            <img src={electricnobg} alt="homepage" />
          </div>
        </div>
      </div>

      {/* <Clients /> */}
      {/* <FeaturesSection /> */}
      <div id="services" className="scroll-mt-24">
        <Services2 />
      </div>
      {/* <Services/> */}
      <div id="usecase">
        <UseCase />
      </div>
      {/* <UseCase2 /> */}

      {/* Port section */}
      {/* <div className="w-full  shadow-md rounded-2xl overflow-hidden mb-10 mt-40 bg-white">
        <div className="relative p-8">
          <div className="flex flex-col justify-center items-center">
            <div className="md:w-full bg-[#F1F5F9]">
              {/* Replace with animation if needed 
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
      </div> */}

      {/* Mining section */}
      {/* <div className="w-4/5 mx-auto rounded-2xl overflow-hidden mb-10 mt-10 bg-[#393838] from-neutral-700 to-neutral-900">
        <div className="relative p-8">
          <div className="flex md:flex-row items-center justify-around">
            <p className="text-5xl font-bold text-yellow-400">Mining</p>
            <img src={mine} width="600px" className="rounded-2xl" />
          </div>
        </div>
      </div> */}

      {/* Team Section */}
      <div id="#usecase">
        <UseCase3 />
      </div>
      <div id="ourteam">
        <OurTeam />
      </div>

      {/* <div className="bg-gray-300 flex flex-col items-center  justify-center gap-10 p-10 h-auto md:h-screen w-full md:w-4/5 ml-auto mr-auto rounded-[3rem]">
        <p className="text-2xl md:text-4xl font-bold">Meet Our Team</p>
        <div className="flex md:flex-row flex-col gap-10">
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
      </div> */}

      <div className="flex  justify-center">
        <FAQ2 />
      </div>
      {/* <Services2/> */}
      {/* <Dummy/> */}
      <GetConnexted />
      {/* <LogistFooter /> */}
      {/* <Footer2 /> */}
      {/* <Footer3 /> */}
      <Footer3 />
    </div>
  );
};

export default HomeTwo;
