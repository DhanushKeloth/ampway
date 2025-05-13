import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

// FAQ content stored in an array of objects
const faqData = [
  {
    id: "item1",
    question: "What is Pixel Bloom?",
    answer:
      "Pixel Bloom is a comprehensive AI platform designed to enhance business operations through intelligent automation and data analysis.",
  },
  {
    id: "item2",
    question: "How can I benefit from Pixel Bloom's services?",
    answer:
      "Our AI models can enhance your business operations by automating tasks, improving accuracy, and providing data-driven insights.",
  },
  {
    id: "item3",
    question: "How do I get started with Pixel Bloom?",
    answer:
      "Getting started is simple. Create an account, select the services that match your needs, and our team will guide you through the implementation process.",
  },
  {
    id: "item4",
    question: "Are your AI models customizable?",
    answer:
      "Yes, all our AI models can be customized to fit your specific business requirements and integrate with your existing systems and workflows.",
  },
  {
    id: "item5",
    question: "How is data privacy handled?",
    answer:
      "We prioritize data security and privacy. All data is encrypted, stored securely, and processed in compliance with global privacy regulations. We never share your data with third parties without explicit consent.",
  },
];

export default function FAQ() {
  // Initialize all items as closed
  const [openItems, setOpenItems] = useState({ item2: true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="bg-white text-gray-800 py-12 px-4 w-full my-10 h-screen">
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
        <div className="mt-12 space-y-4 w-1/2 ml-auto mr-auto h-full flex flex-col justify-center">
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
    