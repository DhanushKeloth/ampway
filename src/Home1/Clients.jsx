import React from "react";

const logos = [
  {
    name: "Amazon",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-amazon-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432492.png?f=webp&w=256",
  },
  {
    name: "Google",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-google-icon-download-in-svg-png-gif-file-formats--logo-social-media-1507807.png?f=webp&w=256",
  },
  {
    name: "Meta",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-meta-logo-icon-download-in-svg-png-gif-file-formats--web-mobile-social-media-pack-logos-icons-3853259.png?f=webp&w=256",
  },
  {
    name: "Microsoft",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-microsoft-logo-icon-download-in-svg-png-gif-file-formats--windows-word-brand-logos-pack-icons-1583107.png?f=webp&w=256",
  },
  {
    name: "Apple",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-apple-logo-icon-download-in-svg-png-gif-file-formats--programming-language-logos-pack-icons-1174963.png?f=webp&w=256",
  },
  {
    name: "Netflix",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-netflix-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-2945044.png?f=webp&w=256",
  },
  {
    name: "Tesla",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-tesla-logo-icon-download-in-svg-png-gif-file-formats--car-logos-icons-892143.png?f=webp&w=256",
  },
  {
    name: "Adobe",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-adobe-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-761738.png?f=webp&w=256",
  },
  {
    name: "X",
    logo: "https://cdn.iconscout.com/icon/free/png-512/free-twitter-x-logo-icon-download-in-svg-png-gif-file-formats--social-media-logos-pack-icons-8589161.png?f=webp&w=256",
  },
 
];

const Clients = () => {
  return (
    <div className="w-full  py-12">
      <div className="max-w-7xl mx-auto px-4 text-center">
        {/* Heading with lines */}
        <div className="flex items-center justify-center mb-14 ">
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
          <p className="text-gray-700 text-sm md:text-base font-medium">
            Over <span className="font-bold">20,000 creative teams</span> use <span className="font-bold">Jitter</span> to create stunning animations online.
          </p>
          <div className="border-t border-gray-300 flex-grow mx-4"></div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-20">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.logo}
              alt={logo.name}
              className="h-14 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
