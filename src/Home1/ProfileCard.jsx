import { useState } from 'react';
import { Twitter, Facebook, Instagram } from 'lucide-react';
import Aditya_D from "../assets/Aditya_D.png";
import Aditya_L from "../assets/Aditya_L.png";

export default function ProfileCard({props}) {
  // Sample user data
  const user = {
    name: "Aditya Dahagama",
    title: "Cofounder",
    // description: "I choose the product design track because I love solving visual problems using UI/UX designs",
    avatar: "/api/placeholder/100/100"
  };

  return (
    
      <div className="w-1/4 h-[55vh] bg-white rounded-lg shadow-lg overflow-hidden ">
        {/* Red header */}
        <div className="bg-gradient-to-b from-violet-500 to-violet-700 h-32 relative rounded-b-3xl">
          {/* Avatar circle */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
            <div className="bg-violet-800 rounded-full p-1">
              <img 
                src={Aditya_D}
                // name={props.name}
                // alt={user.name} 
                className="rounded-full w-20 h-20 object-cover border-2 border-white"
              />
            </div>
          </div>
        </div>
        
        {/* Profile content */}
        <div className="pt-12 pb-6 px-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-600 font-medium mt-1">{user.title}</p>
          
          <p className="text-gray-500 text-sm mt-4">
            {user.description}
          </p>
          
          {/* Social icons */}
          <div className="flex justify-center gap-4 mt-6">
            <a href="#" className="text-violet-600 hover:text-violet-800">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-violet-600 hover:text-violet-800">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-violet-600 hover:text-violet-800">
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    
  );
}