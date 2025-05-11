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
import mine from "../assets/imageexc.png"
import { AiFillThunderbolt } from "react-icons/ai";

const HomeTwo = () => {
  return (
    <div className="min-h-screen bg-[#F1F5F9]">
      <div className="bg-gray-100 min-h-screen flex justify-center p-4 ">
        {/* Navigation - styled like Mimic Design */}
        <nav className="fixed bg-opacity-90 backdrop-blur z-50 top-0 left-0 right-0 bg-white mx-auto w-4/5 p-5 flex items-center justify-between shadow-sm mt-5 rounded-full ">
          <div className="flex items-center">
            <div className="w-8 h-8  rounded-lg mr-2"><AiFillThunderbolt size={40} color="#33A675"/></div>
            <div className="font-bold text-2xl">Ampway</div>
          </div>
          <div className="flex items-center gap-6 font-fontheader font-semibold">
            <a href="#" className="text-gray-700 hover:text-black">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-black">
              About
            </a>
            <button className="bg-[#33A675] text-white rounded-full px-6 py-3 font-medium">
              Contact us
            </button>
          </div>
        </nav>

        {/* Hero Content - styled like Mimic Design */}
        <div className="container mx-auto px-4 flex items-center justify-center mt-32">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-8xl leading-tight mb-6 text-gray-900 manrope-font">
              <div className="flex flex-col gap-5">
                <span>Powering Freight</span>
                <span>Electrification</span>
              </div>
            </h2>

            {/* Subheading - keeping Ampway text */}
            <p className="text-lg text-gray-600 mb-8 max-w-2xl w-3/4">
              Ampway provides sustainable medium and heavy-duty transportation,
              driven by renewable power.
            </p>

            <div className="flex items-center justify-center gap-4">
              <a
                href="#"
                className="bg-[#33A675] text-white rounded-full px-6 py-3 font-normal font-fontheader"
              >
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-4/5 mx-auto my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 "> */}
      <div className="p-10 flex flex-col md:flex-row gap-5 items-center ">
        {/* Card 1 */}
        <div className="bg-purple-400 h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Zero Emissions Freight
          </h3>
          <p className="text-gray-100 text-lg">
            Reduce your carbon footprint with electric trucks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-400 h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4]">🚛</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Trucking-as-a-Service
          </h3>
          <p className="text-gray-600 text-lg">
            Flexible fleet solutions without the ownership hassle.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-300 h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Tailored for Corporate Logistics
          </h3>
          <p className="text-gray-600 text-lg">
            Scalable services for enterprise supply chains.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4">🔋</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Powered by Clean Energy
          </h3>
          <p className="text-gray-600 text-lg">
            Driving sustainability from source to delivery.
          </p>
        </div>
      </div>

      {/* Port section - styled like Mimic Design */}
      <div className="w-4/5 mx-auto shadow-md rounded-2xl overflow-hidden mb-10 mt-10 bg-white">
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
      <div className="w-4/5 mx-auto  rounded-2xl overflow-hidden mb-10 mt-10 bg-white  from-neutral-500 to-neutral-900">
        <div className="relative p-8">
          <div className="flex md:flex-row items-center justify-around">
            <p className="text-5xl font-bold ">Mining</p>
          <img src={mine} width="600px"  className="rounded-2xl "/>
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
      {/* <WhyChoose/> */}
      <GetConnexted/>
      <LogistFooter />
    </div>
  );
};

export default HomeTwo;
