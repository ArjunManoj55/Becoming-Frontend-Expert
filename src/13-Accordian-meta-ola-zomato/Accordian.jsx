import React, { useState } from "react";

const items = [
  {
    title: "What is React?",
    content: "React is a JavaScript library used to build fast and interactive user interfaces."
  },
  {
    title: "What is an Accordion?",
    content: "An accordion is a UI component that allows users to expand and collapse sections of content."
  },
  {
    title: "Why use Accordions?",
    content: "Accordions help organize content, save space, and improve user experience."
  },
  {
    title: "Is React good for large apps?",
    content: "Yes, React scales well for large applications when combined with proper state management."
  }
];

function Accordion({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div>
      {items.map((item, index) => (
        <div key={index}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)}>
            {item.title}
          </button>

          {openIndex === index && (
            <p>{item.content}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default function App() {
  return <Accordion items={items} />;
}
