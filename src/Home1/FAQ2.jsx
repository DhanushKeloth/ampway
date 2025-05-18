import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ content stored in an array of objects
const faqData = [
  {
    id: 0,
    question: "What services does Ampway Logistics provide?",
    answer:
      "We offer end-to-end logistics solutions including freight transportation, warehousing, last-mile delivery, and real-time shipment tracking.",
  },
  {
    id: 1,
    question: "How can I track my shipment?",
    answer:
      "You can track your shipment using the tracking ID provided in your confirmation email via our Track Shipment page.",
  },
  {
    id: 2,
    question: "Does Ampway support international shipping?",
    answer:
      "Yes, we offer both domestic and international freight solutions. Reach out to our team for documentation and customs support.",
  },
  {
    id: 3,
    question: "What types of goods can I ship with Ampway?",
    answer:
      "We handle general cargo, perishables, industrial equipment, e-commerce goods, and more. Hazardous materials require special handling and approval.",
  },
  {
    id: 4,
    question: "Is Ampway an eco-friendly logistics provider?",
    answer:
      "Absolutely. Our fleet includes electric trucks, and we use route optimization and green warehousing practices to reduce our carbon footprint.",
  },
  {
    id: 5,
    question: "Can I schedule recurring shipments for my business?",
    answer:
      "Yes. Our B2B logistics plans allow you to automate and manage recurring shipments easily through your dashboard.",
  },
  
];
export default function FAQ() {
  // Initialize all items as closed
  const [openItems, setOpenItems] = useState({  });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white text-gray-800 py-12 px-4 w-full my-10 h-screen overflow-auto">
      {/* Header Section */}
      <div className="flex justify-center items-center h-full">
        <div className="ml-auto mr-auto">
          <h1 className="text-5xl font-bold mb-1">Frequently Asked</h1>
          <h1 className="text-5xl font-bold text-[#33A675] mb-6">Questions</h1>
          <p className="text-gray-600 text-lg mb-6">Still have a question in mind?</p>
          <button className="bg-black text-white rounded-full px-6 py-3 text-lg font-medium">
            Contact us
          </button>
        </div>

        {/* FAQ Items */}
        <div className="mt-12 space-y-4 w-1/2 ml-auto mr-auto h-full flex flex-col justify-center ">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-3xl transition-all p-3"
            >
              <button
                className="w-full p-4 text-left flex justify-between items-center"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openItems[faq.id] ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              {openItems[faq.id] && (
                <div className="p-4 pt-0 text-gray-600 ">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
    