import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import truck from "../assets/TRCUK.jpg";

const Footer5 = () => {
  return (
    <div className="border-t-2 border-[#33A675] mt-20 pt-2 rounded-t-3xl">
      <div className="bg-[#092f1f] h-fit p-10 rounded-t-[30px]">
        <div className="text text-white text-md flex justify-around items-center">
          <div>&copy; Ampay inc 2025. All rights reserved</div>
          <div className="flex justify-around items-center gap-4">
            <p>Home</p>
            <p>About</p>
            <p>Services</p>
            <p>Contact</p>
          </div>
          <div className="flex justify-around items-center gap-4">
            <FaTwitter />
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

        <div className="relative">
          <h1
            className="text-[14rem] pt-0 text-center font-extrabold tracking-wider"
            style={{
              backgroundImage: `url(${truck})`,
              backgroundSize: "fit",
              backgroundPosition: "center",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            AMPWAY
          </h1>
          {/* Hidden truck image for fallback */}
          <img src={truck} alt="truck" className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default Footer5;
