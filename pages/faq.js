import { useState } from "react";

const faqs = [
  {
    question: "Are sessions confidential?",
    answer:
      "Yes. All sessions are strictly confidential and adhere to HIPAA privacy regulations.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "No, but a superbill is provided for self-submission.",
  },
  {
    question: "Are online sessions available?",
    answer:
      "Yes—all virtual sessions via Zoom.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "24-hour notice required.",
  },
];

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h2 className="faq-title">Frequently Asked Questions</h2>
        <h3 className="faq-subheading">Therapy</h3>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div className="faq-item" key={index}>
              <button
                className={`faq-question ${activeIndex === index ? "active" : ""}`}
                onClick={() => toggle(index)}
              >
                <span className="faq-icon">{activeIndex === index ? "▾" : "▸"}</span>
                {faq.question}
              </button>
              {activeIndex === index && (
                <div className="faq-answer">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}