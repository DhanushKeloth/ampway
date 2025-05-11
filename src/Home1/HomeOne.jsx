import { useState } from 'react';
import { Truck, Ship, Drill, ChevronRight, Menu, X, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Lottie from "lottie-react";
import portdha from "../assets/portdha.json"
export default function LogisticsWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('port');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    serviceInterest: '',
    message: ''
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, this would send the form data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      company: '',
      email: '',
      serviceInterest: '',
      message: ''
    });
  };

  const services = {
    port: {
      title: "Terminal Port Operations",
      icon: <Ship size={48} className="text-green-500" />,
      description: "Electrified port logistics for efficient cargo handling and reduced emissions.",
      benefits: [
        "Zero-emission operations for cleaner port environments",
        "Lower noise pollution enhancing port community relations",
        "Reduced operating costs with electric power",
        "24/7 operations with battery swap technology"
      ],
      workflow: [
        "Arrival of electric trucks at port terminal",
        "Seamless integration with terminal operating systems",
        "Automated loading/unloading with electric equipment",
        "Container transportation to storage or onward destinations",
        "Battery management and charging during operational downtime"
      ],
      image: "/api/placeholder/600/400"
    },
    transport: {
      title: "Heavy Duty Transportation",
      icon: <Truck size={48} className="text-blue-500" />,
      description: "Long-haul and regional delivery solutions with zero emissions and maximum efficiency.",
      benefits: [
        "Extended range with rapid charging infrastructure",
        "Reduced total cost of ownership",
        "Compliance with emission regulations",
        "Enhanced driver comfort with quieter, vibration-free operation"
      ],
      workflow: [
        "Route planning and optimization using AI algorithms",
        "Strategic charging stops along pre-planned routes",
        "Real-time monitoring of vehicle status and battery levels",
        "Predictive maintenance to prevent downtime",
        "Remote diagnostics and over-the-air updates"
      ],
      image: "/api/placeholder/600/400"
    },
    mining: {
      title: "Mining Operations",
      icon: <Drill size={48} className="text-yellow-500" />,
      description: "Powerful electric vehicles for demanding mining environments with reduced ventilation requirements.",
      benefits: [
        "Elimination of diesel particulate matter improving air quality",
        "Reduced ventilation requirements and energy costs",
        "Lower maintenance costs and extended vehicle lifespan",
        "Enhanced safety with reduced fire risk"
      ],
      workflow: [
        "Custom configuration for specific mining applications",
        "Integration with existing mining operations",
        "On-site charging infrastructure development",
        "Performance monitoring and analytics",
        "Remote support and maintenance systems"
      ],
      image: "/api/placeholder/600/400"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Truck className="h-8 w-8 text-green-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">ElectroLogistics</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Services</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">How It Works</a>
              <a href="#about" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">About Us</a>
              <a href="#contact" className="text-gray-700 hover:text-green-600 px-3 py-2 text-sm font-medium">Contact</a>
              <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">Get a Quote</button>
            </div>
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-green-600 focus:outline-none"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">Services</a>
              <a href="#how-it-works" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">How It Works</a>
              <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">About Us</a>
              <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600">Contact</a>
              <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium">Get a Quote</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Electrifying Heavy-Duty Logistics
            </h1>
            <p className="mt-6 max-w-2xl text-xl text-green-50">
              Sustainable transportation solutions for port operations, heavy-duty transportation, and mining with our cutting-edge electric truck fleet.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href="#services" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10">
                Explore Services
              </a>
              <a href="#contact" className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-800 bg-opacity-60 hover:bg-opacity-70 md:py-4 md:text-lg md:px-10">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Specialized electric truck solutions for demanding industries
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Port Operations Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="p-4 bg-green-100 inline-block rounded-lg">
                  <Ship size={32} className="text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Terminal Port Operations</h3>
                <p className="mt-2 text-gray-600">
                  Electric trucks for efficient cargo handling and terminal operations with zero emissions.
                </p>
                <a href="#port" className="mt-4 inline-flex items-center text-green-600 hover:text-green-800">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Heavy-Duty Transportation Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="p-4 bg-blue-100 inline-block rounded-lg">
                  <Truck size={32} className="text-blue-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Heavy-Duty Transportation</h3>
                <p className="mt-2 text-gray-600">
                  Long-haul and regional delivery solutions with extended range and maximum efficiency.
                </p>
                <a href="#transport" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>

            {/* Mining Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="p-4 bg-yellow-100 inline-block rounded-lg">
                  <Drill size={32} className="text-yellow-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">Mining Operations</h3>
                <p className="mt-2 text-gray-600">
                  Powerful electric vehicles for demanding mining environments with reduced ventilation requirements.
                </p>
                <a href="#mining" className="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-800">
                  Learn more <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How It Works</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Explore our services and operational workflows
            </p>
          </div>

          <div className="mt-12">
            {/* Tabs */}
            <div className="flex overflow-x-auto pb-2 -mb-2">
              <div className="flex-shrink-0 flex space-x-4">
                <button
                  onClick={() => setActiveTab('port')}
                  className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
                    activeTab === 'port' ? 'bg-green-100 text-green-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Ship size={20} className="mr-2" />
                  Port Operations
                </button>
                <button
                  onClick={() => setActiveTab('transport')}
                  className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
                    activeTab === 'transport' ? 'bg-blue-100 text-blue-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Truck size={20} className="mr-2" />
                  Transportation
                </button>
                <button
                  onClick={() => setActiveTab('mining')}
                  className={`px-4 py-2 text-sm font-medium rounded-md flex items-center ${
                    activeTab === 'mining' ? 'bg-yellow-100 text-yellow-700' : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Drill size={20} className="mr-2" />
                  Mining
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <div className="lg:flex items-center gap-8">
                  <div className="lg:w-1/2">
                    <div className="flex items-center">
                      {services[activeTab].icon}
                      <h3 className="ml-4 text-2xl font-bold text-gray-900">{services[activeTab].title}</h3>
                    </div>
                    <p className="mt-4 text-gray-600">
                      {services[activeTab].description}
                    </p>
                    
                    <h4 className="mt-6 text-lg font-semibold text-gray-800">Key Benefits</h4>
                    <ul className="mt-2 space-y-2">
                      {services[activeTab].benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <ArrowRight size={18} className="mr-2 text-green-500 flex-shrink-0 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <h4 className="mt-6 text-lg font-semibold text-gray-800">Operational Workflow</h4>
                    <ol className="mt-2 space-y-2">
                      {services[activeTab].workflow.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-800 flex items-center justify-center text-sm font-medium mr-3">
                            {index + 1}
                          </span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div className="lg:w-1/2 mt-8 lg:mt-0">
                    {/* <img src={services[activeTab].image} alt={services[activeTab].title} className="rounded-lg shadow-md" /> */}
                    <Lottie animationData={portdha} loop={true} className="rounded-lg shadow-md" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">About ElectroLogistics</h2>
              <p className="mt-4 text-lg text-gray-600">
                ElectroLogistics is at the forefront of sustainable transportation solutions, specializing in electric trucks for demanding industrial applications. Our mission is to reduce carbon emissions while maximizing operational efficiency for our clients.
              </p>
              <p className="mt-4 text-lg text-gray-600">
                With a fleet of cutting-edge electric trucks and specialized equipment, we serve port terminals, transportation companies, and mining operations with reliable, zero-emission solutions that meet the unique demands of each industry.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-bold text-green-600">100+</p>
                  <p className="text-gray-600">Electric Vehicles</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">50+</p>
                  <p className="text-gray-600">Industry Partners</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-green-600">3</p>
                  <p className="text-gray-600">Specialized Industries</p>
                </div>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:w-1/2 lg:pl-10">
              <img src="/api/placeholder/600/400" alt="ElectroLogistics fleet" className="rounded-lg shadow-md" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white">Ready to electrify your operations?</h2>
            <p className="mt-4 text-xl text-green-100">
              Get in touch with our team to discuss your specific needs and discover how our electric truck solutions can transform your business.
            </p>
            <div className="mt-8">
              <a href="#contact" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-green-700 bg-white hover:bg-green-50 md:py-4 md:text-lg md:px-10">
                Contact Us Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Contact Us</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Have questions or ready to get started? Reach out to our team.
            </p>
          </div>

          <div className="mt-16 lg:flex lg:gap-8">
            <div className="lg:w-1/2">
              <div className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                    <input 
                      type="text" 
                      id="first-name" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2 border" 
                    />
                  </div>
                  <div>
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                    <input 
                      type="text" 
                      id="last-name" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2 border" 
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700">Company</label>
                  <input 
                    type="text" 
                    id="company" 
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2 border" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2 border" 
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service of Interest</label>
                  <select 
                    id="service" 
                    value={formData.serviceInterest}
                    onChange={(e) => handleInputChange('serviceInterest', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2 border"
                  >
                    <option value="">Select a service</option>
                    <option value="port">Terminal Port Operations</option>
                    <option value="transport">Heavy-Duty Transportation</option>
                    <option value="mining">Mining Operations</option>
                    <option value="multiple">Multiple Services</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    rows="4" 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500 sm:text-sm p-2 border"
                  ></textarea>
                </div>
                <div>
                  <button 
                    onClick={handleSubmit}
                    className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:w-1/2 lg:pl-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-900">Contact Information</h3>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center">
                    <Phone size={20} className="text-green-600" />
                    <span className="ml-3 text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={20} className="text-green-600" />
                    <span className="ml-3 text-gray-700">info@electrologistics.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={20} className="text-green-600 mt-1" />
                    <span className="ml-3 text-gray-700">
                      123 Green Energy Drive<br />
                      Logistics Park, CA 90001<br />
                      United States
                    </span>
                  </div>
                </div>

                <h3 className="mt-8 text-xl font-semibold text-gray-900">Business Hours</h3>
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday:</span>
                    <span className="text-gray-800 font-medium">8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday:</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday:</span>
                    <span className="text-gray-800 font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Truck className="h-6 w-6 text-green-400" />
                <span className="ml-2 text-lg font-bold">ElectroLogistics</span>
              </div>
              <p className="mt-4 text-gray-400">
                Sustainable electric truck solutions for demanding industrial applications.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#port" className="text-gray-400 hover:text-green-300">Terminal Port Operations</a></li>
                <li><a href="#transport" className="text-gray-400 hover:text-green-300">Heavy-Duty Transportation</a></li>
                <li><a href="#mining" className="text-gray-400 hover:text-green-300">Mining Operations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-300">Custom Solutions</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-green-300">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-300">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-300">News</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-300">Sustainability</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-green-300">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-300">Terms of Service</a></li>
                <li><a href="#" className="text-gray-400 hover:text-green-300">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400">
              &copy; 2025 ElectroLogistics. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}