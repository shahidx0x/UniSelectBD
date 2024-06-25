/* eslint-disable react/prop-types */

import { useState } from "react";

const faqs = [
  {
    title: "What are the top universities in Bangladesh?",
    content:
      "Bangladesh boasts several prestigious universities known for their academic excellence and research contributions. Some of the top universities include:\n1. University of Dhaka\n2. Bangladesh University of Engineering and Technology (BUET)\n3. Bangladesh University of Professionals (BUP)\n4. North South University (NSU)\n5. Independent University, Bangladesh (IUB)\nThese universities are renowned for their quality education, faculty expertise, and vibrant campus life.",
  },
  {
    title: "How can I apply for student visas in Bangladesh?",
    content:
      "Applying for a student visa in Bangladesh involves several steps:\n1. Receive an acceptance letter from a recognized educational institution in Bangladesh.\n2. Prepare necessary documents, including passport, admission letter, proof of financial means, and medical clearance certificate.\n3. Complete the visa application form available on the Bangladesh government's immigration website or embassy.\n4. Pay the visa fee and schedule an appointment for an interview, if required.\n5. Upon approval, receive your student visa and make necessary travel arrangements.",
  },
  {
    title: "What are the popular courses among international students?",
    content:
      "International students in Bangladesh often pursue courses in:\n1. Engineering and Technology (e.g., Civil Engineering, Computer Science)\n2. Business Administration (e.g., MBA programs)\n3. Medicine and Health Sciences (e.g., MBBS, Nursing)\n4. Social Sciences (e.g., Economics, International Relations)\n5. Information Technology (e.g., Software Engineering, Cyber Security)\nThese courses attract students due to Bangladesh's growing economy and opportunities for practical learning.",
  },
  {
    title: "Are there scholarships available for international students?",
    content:
      "Yes, there are scholarships available for international students studying in Bangladesh. These scholarships are often offered by universities, government agencies, and international organizations. Some popular scholarships include:\n1. Bangladesh Government Scholarship (for selected countries)\n2. DAAD Scholarships (offered by the German Academic Exchange Service)\n3. Commonwealth Scholarships (for Commonwealth countries)\n4. Fulbright Scholarships (for U.S. citizens)\n5. Erasmus Mundus Scholarships (for European Union and non-EU students)\nEligibility criteria and application processes vary, so prospective students should research and apply early for these opportunities.",
  },
];

const Item = ({ title, children, isOpen, setIsOpen }) => {
  return (
    <div className="border rounded shadow-sm">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <div className="flex items-center justify-center w-8 h-8 border rounded-full">
          <svg
            viewBox="0 0 24 24"
            className={`w-3 text-gray-600 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              points="2,7 12,17 22,7"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div className="flex flex-col mb-16 sm:text-center">
          <a href="/" className="mb-6 sm:mx-auto">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
              <svg
                className="w-10 h-10 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </a>
          <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              <span className="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="ec5d8ef5-b853-4714-b94f-df28ec98eeb7"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7" />
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#ec5d8ef5-b853-4714-b94f-df28ec98eeb7)"
                    width="52"
                    height="24"
                  />
                </svg>
                <span className="relative">Frequently Asked</span>
              </span>{" "}
              Questions
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Explore common questions about studying in Bangladesh.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Item
              key={index}
              title={faq.title}
              isOpen={index === openIndex}
              setIsOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
            >
              {faq.content}
            </Item>
          ))}
        </div>
      </div>
    </div>
  );
};
