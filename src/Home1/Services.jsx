import React from 'react'

function Services() {
  return (
    <div>
      <div className="p-10 flex flex-col md:flex-row gap-5 items-center mt-40 ">
        {/* Card 1 */}
        <div className="bg-purple-400 h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4">⚡</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Zero Emissions Freight
          </h3>
          <p className="text-gray-100 text-lg">
            Reduce your carbon footprint with electric trucks.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-400 h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4]">🚛</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Trucking-as-a-Service
          </h3>
          <p className="text-gray-600 text-lg">
            Flexible fleet solutions without the ownership hassle.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-300 h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Tailored for Corporate Logistics
          </h3>
          <p className="text-gray-600 text-lg">
            Scalable services for enterprise supply chains.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-white h-[300px] rounded-2xl shadow p-6 text-center hover:shadow-md transition duration-300">
          <div className="text-4xl mb-4">🔋</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Powered by Clean Energy
          </h3>
          <p className="text-gray-600 text-lg">
            Driving sustainability from source to delivery.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
