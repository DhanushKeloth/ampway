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

export default function Footer3() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <footer className="bg-black text-gray-300 py-16 h-[76vh] overflow-hidden mt-10">
      <div className="container mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 place-items-center">
          {/* Logo and left column */}
          <div className="flex items-center mb-6">
            <div className=" h-36 w-36 flex items-center justify-center rounded">
              <AiFillThunderbolt
                color="#33A675"
                className="w-8 h-8 md:w-36 md:h-36"
              />
            </div>
          </div>
          <div className="md:col-span-1">
            <nav className="space-y-4">
              <a href="/explore" className="block hover:text-white transition">
                Home
              </a>
              <a href="/faqs" className="block hover:text-white transition">
                Services
              </a>
              <a href="/pricing" className="block hover:text-white transition">
                Use Cases
              </a>
              <a href="/pricing" className="block hover:text-white transition">
                FAQs
              </a>
              <a href="/pricing" className="block hover:text-white transition">
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
          <div className="md:col-span-2">
            <div className="mb-8">
              <div className="space-y-4 ">
                <div className="flex items-center  gap-2">
                  <MapPin size={18} className="text-gray-600" />
                  <span className="text-lg text-gray-700">
                    123 Maple Street, Springfield
                  </span>
                </div>
                <div className="flex items-center  gap-2">
                  <Phone size={18} className="text-gray-600" />
                  <span className="text-lg text-gray-700">+91 6292226351</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg mb-4">Connect with us</h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <Dribbble size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-gray-800 rounded-full hover:bg-gray-700 transition"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-sm text-gray-500">
            © Ampway Pvt. Ltd All rights reserved.
          </p>
        </div>

        {/* Large faded text at bottom */}
        <div className=" overflow-hidden">
          <h1 className="text-[14rem] pt-0 text-center font-extrabold  text-gray-800 tracking-wider">
            AMPWAY
          </h1>
        </div>
      </div>
    </footer>
  );
}
