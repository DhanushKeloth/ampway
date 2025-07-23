import { useState } from "react";
import mill from "../assets/image-removebg-preview (1).png";
import footer from "../assets/footer.svg";
export default function GetConnexted() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email) {
      alert(`Subscribed with email: ${email}`);
      setEmail("");
    }
  };

  return (
    <div className=" relative md:w-[85%] mx-2 md:mx-auto overflow-hidden rounded-lg md:rounded-[3rem] bg-black text-white  flex flex-col md:flex-col items-center justify-center">
      {/* Subscription Section */}
      <div className="absolute top-4  md:left-1/4  px-4  w-full    md:w-1/2 md:top-20">
        <h2 className="text-md md:text-5xl  font-bold md:mb-6 mb-3 leading-tight text-[#D9D4C0]">
          Get insights on electric fleets, smart transport & more.
        </h2>

        <div className="flex  sm:flex-row md:w-full w-1/2 gap-1 md:gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow md:p-4  md:text-lg text-sm px-2 py-0 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            value={"aditya@xyz.com"}
            // onChange={(e) => setEmail(e.target.value)}
          />
          <a
            href={`mailto:${"aditya@xyz.com"}`}
            onClick={handleSubscribe}
            className="md:px-6 px-2 md:text-lg text-sm md:py-4 py-1.5 bg-[#33A675]  md:font-bold rounded-lg hover:bg-[#1D865E] transition duration-200"
          >
            Connect
          </a>
        </div>
      </div>

      <div className="bg-neutral-950 w-full mt-10 md:mt-0">
        <img src={footer} alt="Mill" className="object-cover w-full " />
      </div>
    </div>
  );
}
