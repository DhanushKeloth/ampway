import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openFaqId, setOpenFaqId] = useState(null);

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
  {
    id: 6,
    question: "What is the average delivery time?",
    answer:
      "Delivery times vary by destination, but local shipments typically take 1–2 days, and international shipments range from 3–7 business days.",
  },
];

  const toggleFaq = (id) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#f7f7f7] flex flex-col items-center justify-center px-4 py-10 w-1/2">
      <div className="w-full ">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqData.map((faq) => (
            <div
              key={faq.id}
              className="bg-white rounded-xl shadow-md transition duration-300"
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left text-gray-800 font-medium text-xl"
                onClick={() => toggleFaq(faq.id)}
              >
                <span>{faq.question}</span>
                <span>
                  {openFaqId === faq.id ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </span>
              </button>

              {openFaqId === faq.id && (
                <div className="px-5 pb-5 text-gray-600 text-lg leading-relaxed bg-gray-50 rounded-b-xl">
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
