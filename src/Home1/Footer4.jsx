import { Facebook, Instagram, Youtube, MapPin, Phone } from 'lucide-react';

export default function Footer4() {
  return (
    <header className=" rounded-2xl bg-gray-500 w-5/6 mx-auto  p-10 mt-10">
      <div className="container mx-auto bg-gray-200 w-5/6">
        {/* Top section with logo and contact info */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          {/* Logo */}
          <div className="mb-4 md:mb-0 ">
            <div className='bg-white h-28 w-28 flex items-center justify-center rounded'></div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div className="flex items-center justify-end gap-2">
              <MapPin size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">123 Maple Street, Springfield</span>
            </div>
            <div className="flex items-center justify-end gap-2">
              <Phone size={18} className="text-gray-600" />
              <span className="text-sm text-gray-700">+91 6292226351</span>
            </div>
          </div>
        </div>

        {/* Middle section with social media */}
        <div className="flex justify-end items-center mb-6 pb-6 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <span className="text-gray-600 text-sm">Social Media</span>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <span className="text-gray-700 text-sm">X</span>
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Facebook size={16} className="text-gray-700" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Instagram size={16} className="text-gray-700" />
            </a>
            <a href="#" className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
              <Youtube size={16} className="text-gray-700" />
            </a>
          </div>
        </div>

        {/* Bottom section with navigation and copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Navigation */}
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a href="/" className="text-gray-800 hover:text-gray-600 font-medium">Home</a>
              </li>
              <li>
                <a href="/features" className="text-gray-800 hover:text-gray-600 font-medium">Features</a>
              </li>
              <li>
                <a href="/blogs" className="text-gray-800 hover:text-gray-600 font-medium">Blogs</a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-800 hover:text-gray-600 font-medium">Pricing</a>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">
            <p className="text-sm text-gray-600">© 2024 Copyright by Ampway</p>
          </div>
        </div>
      </div>
    </header>
  );
}