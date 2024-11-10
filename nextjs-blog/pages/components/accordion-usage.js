import React from "react";
import Accordion from "./accordion-example";

const AccordionUsage = () => {
  const faqItems = [
    {
      title: "What is this application?",
      content: "This is a sample React application demonstrating an accordion component.",
    },
    {
      title: "How do I use this component?",
      content: "Simply import the Accordion component and pass an array of items as props.",
    },
    {
      title: "Can I customize the styling?",
      content: "Yes, you can modify the CSS or pass additional style props to adjust its appearance.",
    },
  ];

  return (
    <div className="about-page">
      <h2>Custom Accordion</h2>
      <Accordion items={faqItems} />

    </div>
  );
};

export default AccordionUsage;
