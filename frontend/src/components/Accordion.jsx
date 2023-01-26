/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from "react";

function Accordion({ title }) {
  const decisions = [
    {
      id: "4",
      title: "Titre",
      desc_final: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      details: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      status: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      user_id: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <div className="accordions">
      {decisions.map((decision) => (
        <div key={decision.id}>
          <div className={`accordion ${active && "active"}`}>
            <div className="accordion__title" onClick={handleToggle}>
              {title} <div className="accordion__icon" />
            </div>
            <div className="accordion__content">{decision.desc_final}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
