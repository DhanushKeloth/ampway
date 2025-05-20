import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

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
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white text-gray-800 px-4 py-12 w-full min-h-screen">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-7xl mx-auto gap-10 ">
        {/* Left Section (Header) */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-1">Frequently Asked</h1>
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-3">Questions</h1>
          <p className="text-gray-600 text-base md:text-lg mb-6">
            Still have a question in mind?
          </p>
          <button className="bg-[#33A675] text-white rounded-full px-5 py-2 md:px-6 md:py-3 text-base md:text-lg font-medium">
            Contact us
          </button>
        </div>

        {/* Right Section (FAQs) */}
        <div className="md:w-1/2 mt-10 space-y-3 md:space-y-4 ">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="border border-gray-200 rounded-2xl md:rounded-3xl transition-all"
            >
              <button
                className="w-full p-3 md:p-6 text-left flex justify-between items-center"
                onClick={() => toggleItem(faq.id)}
              >
                <span className="font-medium text-base md:text-lg pr-2">
                  {faq.question}
                </span>
                {openItems[faq.id] ? (
                  <ChevronUp size={18} className="flex-shrink-0" />
                ) : (
                  <ChevronDown size={18} className="flex-shrink-0" />
                )}
              </button>
              {openItems[faq.id] && (
                <div className="px-3 md:px-4 pb-3 text-gray-600 text-sm md:text-base">
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
