// import React from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import { useState } from "react";
const Accordion = ({ items }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);
  const handleClick = (index) => {
    // if (index === expandedIndex) setExpandedIndex(-1);
    // else setExpandedIndex(index);
    setExpandedIndex((currentIdx) => {
      if (currentIdx === index) return -1;
      else return index;
    });
  };

  const renderItems = items.map((item, idx) => {
    const isExpanded = idx === expandedIndex;
    const icon = (
      <span className="text-2xl">
        {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
      </span>
    );
    return (
      <div key={item.id}>
        <div
          className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer "
          onClick={() => handleClick(idx)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded ">{renderItems}</div>;
};

export default Accordion;
