import React from 'react'

function LogistHome() {
  return (
    <>
    <div className="bg-slate-400 w-3/4 flex items-center justify-center ml-auto mr-auto rounded-3xl ">
    <header className="w-3/4 px-6 py-4 flex items-center">
      {/* Logo on left */}
      <div className="w-1/4">
        <h1 className="text-2xl font-bold">Ampway</h1>
      </div>

      {/* Nav items centered */}
      <nav className="flex-1 flex justify-center">
        <div className="flex items-center gap-8">
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Service
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Process
          </a>

          <a href="#" className="text-gray-800 hover:text-gray-600">
            About
          </a>
          <a href="#" className="text-gray-800 hover:text-gray-600">
            Contact
          </a>
        </div>
      </nav>

      {/* Login button on right */}
      <div className="w-1/4 flex justify-end">
        <button className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors">
          Login
        </button>
      </div>
    </header>
    </div>

    
    <section className="relative bg-blue-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 ">
          Powering Freight 
            <br />
            Electrification
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Ampway provides sustainable medium and heavy-duty transportation, driven by renewable power.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a
              href="#"
              className="px-8 py-3 bg-white border-2 border-black text-black font-medium flex items-center justify-center hover:bg-gray-100 transition-colors relative"
              style={{ boxShadow: "4px 4px 0 black" }}
            >
              Get Started
            </a>
            <a
              href="#"
              className="flex items-center text-black hover:text-gray-700"
            >
              <div className="w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              Watch more
            </a>
          </div>
        </div>
      </div>
    </section>
    
    </>
  
  )
}

export default LogistHome
