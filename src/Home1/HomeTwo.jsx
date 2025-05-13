import React from "react";
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
import homepage from "../assets/home_page (3).svg"
import Services2 from "./Services2";
import UseCase from "./UseCase";
import FeaturesSection from "./FeaturesSection";

const HomeTwo = () => {
  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <div className="bg-gray-100 min-h-screen flex justify-center p-3 mb-44">
        {/* Navigation - styled like Mimic Design */}
        <nav className="fixed bg-opacity-90 backdrop-blur z-50 top-0 left-0 right-0 bg-white mx-auto w-4/5 p-4 flex items-center justify-between shadow-md mt-3 rounded-full ">
          <div className="flex gap-2 ">
            {/* <div className="w-8 h-8  rounded-lg "> */}
              <AiFillThunderbolt  color="#33A675" className="w-10 h-10 rounded-lg"/>
            {/* </div> */}
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

        {/* Hero Content - styled like Mimic Design */}
        <div className=" container mx-auto px-4 flex items-center justify-center mt-20 ">
          <div className=" flex flex-col items-center text-center mb-12 -mt-56">
            <h2 className=" md:text-3xl lg:text-7xl leading-tight mb-6 text-gray-900 manrope-font">
              <div className="flex flex-col gap-5">
                <span>Powering Freight</span>
                <span>Electrification</span>
              </div>
            </h2>

            {/* Subheading - keeping Ampway text */}
            <p className="text-xl text-gray-600 mb-3 max-w-2xl w-3/4">
              Ampway provides sustainable medium and heavy-duty transportation,
              driven by renewable power.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="bg-[#33A675]  text-white rounded-full px-6 py-3  font-fontheader text-lg "
              >
                Explore Services
              </a>
            </div>
          </div>
            <div className="absolute w-full mx-auto -mt-16  ">
              <img src={homepage} alt="homepage" />
            </div>
        </div>
      </div>
      {/* <div className="w-4/5 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "> */}
      
      <Clients/>
      
      <Services2/>

      {/* Port section - styled like Mimic Design */}
      <div className="w-4/5 mx-auto shadow-md rounded-2xl overflow-hidden mb-10 mt-40 bg-white">
        <div className="relative p-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8">
              <h1 className="font-bold text-5xl text-gray-900">Port</h1>
              <h3 className="text-xl text-gray-600 mt-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam
              </h3>
            </div>
            <div className="md:w-1/2 bg-[#F1F5F9]">
              <Lottie
                animationData={portdha}
                loop={true}
                autoplay={true}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-4/5 mx-auto  rounded-2xl overflow-hidden mb-10 mt-10 bg-[#393838]  from-neutral-700 to-neutral-900">
        <div className="relative p-8">
          <div className="flex md:flex-row items-center justify-around">
            <p className="text-5xl font-bold text-yellow-400">Mining</p>
            <img src={mine} width="600px" className="rounded-2xl " />
          </div>
        </div>
      </div>
      {/* <div className="bg-gray-200 my-10 flex p-10 gap-5 justify-center  ">
        <div className="w-[500px] h-full bg-white rounded-3xl p-10 object-cover ">
          <img
            src={Aditya_D}
            className="overflow-hidden rounded-xl w-[500px] h-[500px]"
          />

          <div className="w-full h-1/2 mt-10">
            <h1 className="text-2xl text-gray-900 text-center m-2">
              Aditya Dahagama
            </h1>
            <h3 className="text-xl text-gray-600 text-center ">Cofounder</h3>
          </div>
        </div>
      </div> */}
      <div className="bg-gray-50 flex flex-col items-center justify-center gap-10 p-10 h-screen w-4/5 ml-auto mr-auto rounded-[3rem] ">
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
      <div className="flex justify-center">
        {/* <FAQ /> */}
        <FAQ2/>
      </div>
      {/* <UseCase/> */}
      <FeaturesSection/>
      <GetConnexted />
      <LogistFooter />
    </div>
  );
};

export default HomeTwo;
