import React from 'react';

const LogistFooter = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Logo and Social Icons */}
        <div className="flex justify-between items-center mb-12 border-b pb-6">
          <h1 className="text-3xl font-bold">Ampway</h1>
          <div className="flex gap-4">
            <a href="#" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 4c0 1-1 2-2 2H4c-1 0-2-1-2-2V3c0-1 1-2 2-2h16c1 0 2 1 2 2v1z"></path>
                <path d="M22 4v16c0 1-1 2-2 2H4c-1 0-2-1-2-2V4"></path>
              </svg>
            </a>
            <a href="#" className="text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                <path d="M22 3.5a9 9 0 0 1-9 9H9a9 9 0 0 1-9-9"></path>
                <path d="M5 16.5v-3.5a3 3 0 0 1 3-3h10.5"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Address */}
          <div>
            <h2 className="font-bold text-lg mb-4">Address</h2>
            <p className="mb-4"></p>
            <a href="#" className="flex items-center text-gray-700 hover:text-black">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 mr-2">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                <path d="M2 12h20"></path>
              </svg>
              Find On Map
            </a>
          </div>

          {/* Menu 1 */}
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-600">Home</a></li>
              <li><a href="#" className="hover:text-gray-600">About</a></li>
              <li><a href="#" className="hover:text-gray-600">Blog Update</a></li>
              <li><a href="#" className="hover:text-gray-600">Get A Quote</a></li>
              <li><a href="#" className="hover:text-gray-600">Testimonial</a></li>
            </ul>
          </div>

          {/* Menu 2 */}
          <div>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-gray-600">Service</a></li>
              <li><a href="#" className="hover:text-gray-600">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-600">Conditions</a></li>
              <li><a href="#" className="hover:text-gray-600">Support</a></li>
              <li><a href="#" className="hover:text-gray-600">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold text-lg mb-4">Contact</h2>
            <p className="mb-4">(209) 555-0104</p>
            <p>Hello@Mail.Com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LogistFooter;