import { Instagram, Linkedin, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer2() {
  return (
    <div className="w-full  mx-auto">
      <footer className="bg-black text-white p-8 rounded-3xl relative overflow-hidden">
        {/* SVG Curved Lines */}
        <div className="absolute bottom-0 left-0 w-full h-full pointer-events-none">
          <svg viewBox="0 0 800 200" className="w-full absolute bottom-0">
            <path
              d="M0,150 Q200,50 400,150 T800,100"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="1"
              className="stroke-current "
            />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 place-items-center relative z-10">
          {/* Left column - Contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-light mb-2">Get in touch</h3>
              <a href="mailto:hello@skyline.co" className="text-sm text-gray-300 hover:text-white">
                hello@skyline.co
              </a>
            </div>
            
            <div className="flex">
              <div className="w-full h-20 rounded-full bg-white flex items-center justify-center">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-black font-light tracking-wide">CONTACT US</span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg width="40" height="40" viewBox="0 0 40 40">
                      <circle cx="20" cy="20" r="19" fill="none" stroke="black" strokeWidth="0.5" />
                      <path d="M20,10 L20,20 L27,25" fill="none" stroke="black" strokeWidth="0.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Middle column - Social */}
          <div>
            <h3 className="text-sm font-light mb-4">Social</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Instagram size={16} className="opacity-0" />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Linkedin size={16} className="opacity-0" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Twitter size={16} className="opacity-0" />
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Facebook size={16} className="opacity-0" />
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white flex items-center gap-2">
                  <Youtube size={16} className="opacity-0" />
                  <span>Youtube</span>
                </a>
              </li>
            </ul>
          </div>
          
          {/* Right column - Menu */}
          <div>
            <h3 className="text-sm font-light mb-4">Menu</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-orange-500 hover:text-orange-400 italic text-3xl font-serif">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 text-4xl font-light">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 text-4xl font-light">
                  Listing
                </a>
              </li>
              <li>
                <a href="#" className="text-white hover:text-gray-200 text-4xl font-light">
                  Agents
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Logo at bottom */}
        <div className="mt-12 relative z-10">
          <div className="flex items-center">
            <div className="flex items-center">
              <div className="w-6 h-6 bg-white rounded-full mr-2"></div>
              <span className="font-serif italic">Skyline</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}