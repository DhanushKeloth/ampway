import { useState } from 'react';
import Aditya_D from "../assets/Aditya_D.png";
import { Twitter, Facebook, Instagram, Linkedin } from 'lucide-react';
import { BsTwitter,BsInstagram,BsLinkedin } from 'react-icons/bs';
import  '../index.css';
import bg from "../assets/image.png"
export default function ProfileFull({profile,name,title}) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    
      <div
        className="relative w-80 h-96 perspective "
        onMouseEnter={handleCardClick}
        onMouseLeave={handleCardClick}
      >
        <div
          className={`transition-transform duration-700 ease-in-out w-full h-full relative transform-style preserve-3d ${isFlipped ? "rotate-y-180" : ""
            }`}
        >
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-lg">
            <div className="relative w-full h-full bg-gray-800">
              <div className="absolute inset-0 bg-black">
                <img
                  src={profile}
                  alt="Aditya profile"
                  className="w-full h-full object-cover opacity-90"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
              <div className="absolute bottom-8 left-6 text-white">
                <h2 className="text-3xl font-bold mb-1">{name}</h2>
                <p className="text-gray-300">{title}</p>
              </div>
              {/* <div className="absolute bottom-8 right-6 bg-white/20 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </div> */}
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-xl overflow-hidden shadow-lg">
            <div  className=" bg-gradient-to-b from-[#33A675] to-[#1a7b56] h-32 relative rounded-b-3xl">
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                <div className="bg-[#33A675] rounded-full p-1">
                  <img
                    src={profile}
                    className="rounded-full w-20 h-20 object-cover border-2 border-white"
                    alt="Aditya avatar"
                  />
                </div>
              </div>
            </div>
            <div className="pt-12 pb-6 px-6 text-center">
              <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
              <p className="text-gray-600 font-medium mt-1">{title}</p>
              <div className="flex justify-center gap-4 mt-6">
                <a href="#" className="text-[#33A675] hover:text-[#1a7b56]">
                  <BsInstagram size={20} />
                </a>
                <a href="#" className="text-[#33A675] hover:text-[#1a7b56]">
                  <BsTwitter size={20} />
                </a>
                <a href="#" className="text-[#33A675] hover:text-[#1a7b56]">
                  <BsLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    
  );
}
