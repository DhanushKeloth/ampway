import { useState } from "react";
import {
  Dribbble,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { CgYoutube } from "react-icons/cg";
import logo from "../assets/logo.svg";
import { FaLinkedin } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
export default function Footer3() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#1B1B1B] text-gray-300 md:pt-16 pt-10 pb-0 overflow-hidden mt-10  ">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10 gap-5 md:place-items-center place-items-start">
          {/* Logo and Navigation - Mobile: stacked, Desktop: separate columns */}
          <div className="md:hidden flex flex-col items-start space-y-4 ml-4">
            <img src={logo} alt="logo" className="w-16 h-16" />
            <nav className="space-y-4 text-md text-neutral-500">
              <span className="mb-10 text-white ">Overview</span>
              <a href="#" className="block hover:text-white transition">
                Home
              </a>
              <a href="#services" className="block hover:text-white transition">
                Services
              </a>
              <a href="#usecase" className="block hover:text-white transition">
                Use Cases
              </a>
              <a href="#ourteam" className="block hover:text-white transition">
                About Us
              </a>
            </nav>
          </div>

          {/* Desktop: Logo and Navigation in separate columns */}
          <div className="hidden md:block">
            <img src={logo} alt="logo" className="w-36 h-48" />
          </div>
          <div className="hidden md:block md:col-span-1">
            <nav className="space-y-4 text-md text-neutral-500">
              <span className="mb-10 text-white ">Overview</span>
              <a href="#" className="block hover:text-white transition">
                Home
              </a>
              <a href="#services" className="block hover:text-white transition">
                Services
              </a>
              <a href="#usecase" className="block hover:text-white transition">
                Use Cases
              </a>
              <a href="#ourteam" className="block hover:text-white transition">
                About Us
              </a>
            </nav>
          </div>

          {/* Middle columns */}
          {/* <div className="md:col-span-1">
            <nav className="space-y-4">
              <a href="/licensing" className="block hover:text-white transition">Licensing</a>
              <a href="/terms" className="block hover:text-white transition">Terms of use</a>
              <a href="/privacy" className="block hover:text-white transition">Privacy Policy</a>
              <a href="/refund" className="block hover:text-white transition">Refund Policy</a>
            </nav>
          </div> */}

          {/* Newsletter signup */}
          {/* Contact and Social Media Section */}
          <div className="w-full col-span-1 md:col-span-1 flex md:mt-0 mt-5 flex-col items-start justify-start ml-4 md:ml-0">
            <div className="w-full mb-6 space-y-4">
              <div className="flex items-center justify-start  gap-2">
                <MapPin className="text-gray-500 w-5 h-5 md:w-5 md:h-5" />
                <span className="md:text-md text-sm text-neutral-400 md:w-3/4 w-48">
                  Accelerated at THub, Knowledge City, Cyberabad, Hyderabad, Telangana, 500081
                </span>
              </div>
              <div className="flex items-center justify-start md:justify-normal gap-2">
                <Phone className="text-gray-500 w-5 h-5 md:w-5 md:h-5" />
                <span className="md:text-md text-sm text-neutral-400 md:w-3/4 w-48">
                  +91 9876543210
                </span>
              </div>
            </div>

            <div className="w-full mt-2 flex flex-col items-start md:items-start justify-start md:justify-center">
              <h3 className=" text-md mb-4 text-neutral-500">
                Connect with us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <FaInstagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <MdOutlineEmail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:mt-16 mt-10 border-t  border-gray-800 md:pt-8 pt-4 mb-10">
          <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-4">
            <p className="text-sm text-gray-500">
              © Ampway Pvt. Ltd All rights reserved.
            </p>

            <p className="text-sm text-gray-600 flex items-center gap-1">
              Designed by
              <p className="text-[#20AC65] color-blink-hover">Dhanush</p>&
              <p className="text-[#20AC65] color-blink-hover">Adhikowshik</p>
           
            </p>
          </div>
        </div>

        {/* Large faded text at bottom */}
        <div className=" ">
          <h1 className=" md:text-[14rem] text-6xl pt-0 mt-4 md:pb-0 pb-2  text-center font-extrabold  text-[#323232] tracking-wider">
            AMPWAY
          </h1>
        </div>
      </div>
    </footer>
  );
}
