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
    <div className=" relative w-3/4 mx-auto overflow-hidden rounded-[3rem] bg-black text-white  flex flex-col md:flex-col items-center justify-center">
      {/* Subscription Section */}
      <div className="absolute top-4 w-full md:w-1/2 md:top-20">
        <h2 className="sm:text-lg md:text-5xl font-bold mb-6 leading-tight text-[#D9D4C0]">
          Get insights on electric fleets, smart transport & more.
        </h2>

        <div className="flex flex-col sm:flex-row w-full gap-3">
          <input
            type="email"
            placeholder="Your email"
            className="flex-grow p-4 rounded-lg bg-neutral-800 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-emerald-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            onClick={handleSubscribe}
            className="px-6 py-4 bg-[#33A675]  font-bold rounded-lg hover:bg-[#1D865E] transition duration-200"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="bg-black w-full ">
        <img src={footer} alt="Mill" className="object-cover w-full " />
      </div>
    </div>
  );
}
