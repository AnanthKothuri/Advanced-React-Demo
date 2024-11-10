import React, { useState } from "react";
import "./accordion.module.css"

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggles the accordion open/close
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button
        className="accordion-header"
        onClick={toggleAccordion}
        aria-expanded={isOpen}
      >
        {title}
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </button>
      <div
        className="accordion-content"
        style={{
          maxHeight: isOpen ? "200px" : "0",
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="accordion-text">{content}</div>
      </div>
    </div>
  );
};

export default Accordion;