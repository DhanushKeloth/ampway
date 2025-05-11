import React from 'react';

export default function WhyChoose() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-teal-600 uppercase tracking-wide">About Plan</p>
          <h1 className="mt-2 text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Learn Why We're the Best<br />Laboratory Around
          </h1>
        </div>

        {/* Three Column Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1: Our Laboratories */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img 
                  src="/api/placeholder/200/150" 
                  alt="Laboratory illustration" 
                  className="h-40"
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-800 mb-3">
                Our Laboratories
              </h3>
              <p className="text-center text-sm text-gray-600 mb-6">
                Our professional laboratories provide cutting-edge facilities for research and deliver analysis through precision and care.
              </p>
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Learn More
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 2: List of Services */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img 
                  src="/api/placeholder/200/150" 
                  alt="Services illustration" 
                  className="h-40"
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-800 mb-3">
                List of Services
              </h3>
              <p className="text-center text-sm text-gray-600 mb-6">
                Check out our comprehensive list of tests and services you can your exact need for your research requirements.
              </p>
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Learn More
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>

          {/* Card 3: Patronage */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-center mb-6">
                <img 
                  src="/api/placeholder/200/150" 
                  alt="Patronage illustration" 
                  className="h-40"
                />
              </div>
              <h3 className="text-center text-lg font-semibold text-gray-800 mb-3">
                Patronage
              </h3>
              <p className="text-center text-sm text-gray-600 mb-6">
                Join our growing network of satisfied clients at best facilities and services with extensive and measured patronage.
              </p>
              <div className="text-center">
                <a 
                  href="#" 
                  className="inline-flex items-center text-sm font-medium text-teal-600 hover:text-teal-700"
                >
                  Learn More
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}