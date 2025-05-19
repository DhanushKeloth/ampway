import React from 'react'
import Lottie from "lottie-react";
import portdha from "../assets/portdha.json";
import mine from "../assets/MININGBG (1).json"
function UseCase2() {
  return (
    <div>
      <div className="w-full  mx-auto  shadow-lg border-x-4 rounded-2xl overflow-hidden mb-10 mt-10">
        <div className="relative">
          <div className="absolute top-40 left-20 ">
            <h1 className="font-bold text-6xl">Port</h1>
            <h3 className="text-2xl w-3/4 mt-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            </h3>
          </div>
          <div>
            <Lottie
            animationData={mine}
            loop={true}
            autoplay={true}
            // className="w-[500px] h-[500px]"
          />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UseCase2
