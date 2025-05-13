import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export default function SocialMediaMarketing() {
  const [activeTab, setActiveTab] = useState('advertising');

  const useCases = {
    social: {
      title: 'Social media',
      description:
        'Create thumb-stopping content that drives engagement across all social platforms.',
      image: '/api/placeholder/500/600',
      bgColor: 'bg-blue-50',
    },
    advertising: {
      title: 'Advertising',
      description:
        'Scale production for high-volume campaigns across channels, formats, and languages, delivering dynamic ads that convert.',
      image: '/api/placeholder/500/600',
      bgColor: 'bg-purple-50',
    },
    prototyping: {
      title: 'Prototyping',
      description:
        'Quickly iterate on ideas and test concepts with interactive prototypes.',
      overlayText: 'SPRING\nREFRESH',
      image: '/api/placeholder/500/600',
      bgColor: 'bg-pink-50',
    },
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="p-6 bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-2xl font-bold">MotionBrand</h1>
          </div>
          <div className="flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">Sign In</button>
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition">
              Get Started
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div>
          <span className="bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            Use cases
          </span>

          <h2 className="text-5xl font-bold mt-6 leading-tight">
            Animate for social media, ads,
            <br />
            marketing, brand, product,
            <br />
            and more
          </h2>

          <p className="text-gray-600 mt-6 text-lg leading-relaxed max-w-xl">
            The best brands use motion across all platforms
            <br />
            to capture attention, tell powerful stories, and
            <br />
            drive more engagement.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-full mt-8 flex items-center space-x-2 hover:bg-gray-800 transition">
            <span>Read customer stories</span>
          </button>
        </div>
      </section>

      {/* Interactive Use Cases Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - Collapsible buttons */}
          <div className="space-y-4">
            {Object.entries(useCases).map(([key, useCase]) => (
              <details
                key={key}
                open={activeTab === key}
                onClick={() => setActiveTab(key)}
                className={`bg-white rounded-2xl p-6 shadow transition-all cursor-pointer ${
                  activeTab === key ? 'border-2 border-gray-200' : 'hover:shadow-md'
                }`}
              >
                <summary className="flex items-center justify-between text-gray-700 text-lg font-medium list-none">
                  {useCase.title}
                  <ArrowRight
                    className={`ml-2 transform transition-transform duration-200 ${
                      activeTab === key ? 'rotate-90' : ''
                    }`}
                    size={18}
                  />
                </summary>
                <div className="mt-4 text-gray-600">{useCase.description}</div>
              </details>
            ))}
          </div>

          {/* Right side - Image and background */}
          <div className="relative">
            <div
              className={`${useCases[activeTab].bgColor} rounded-3xl p-8 h-full min-h-96 flex items-center justify-center relative overflow-hidden transition-all duration-300`}
            >
              {activeTab === 'prototyping' && useCases[activeTab].overlayText && (
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h3 className="text-6xl font-bold text-gray-900 text-center whitespace-pre-line">
                    {useCases[activeTab].overlayText}
                  </h3>
                </div>
              )}
              <img
                src={useCases[activeTab].image}
                alt={`${useCases[activeTab].title} example`}
                className={`w-full h-full object-cover rounded-2xl ${
                  activeTab === 'prototyping' ? 'opacity-30' : ''
                }`}
              />
              {activeTab === 'social' && (
                <div className="absolute bottom-4 left-4 bg-yellow-400 p-3 rounded">
                  <div className="w-8 h-8 bg-yellow-600 rounded"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-20 mt-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to transform your creative workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of brands creating engaging motion content.
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition">
            Start creating for free
          </button>
        </div>
      </section>
    </div>
  );
}
