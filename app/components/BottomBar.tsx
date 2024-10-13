"use client"; // This marks the component as a client component

import React, { useState } from "react";
import { bottomBarItems } from "../data/bottomBarData";

export default function BottomBar() {
  const [activeIndex, setActiveIndex] = useState(0); // To track active item

  return (
    <div className="bg-white h-16 flex items-center justify-between px-4 sticky bottom-0 z-10 shadow-lg border-t">
      {bottomBarItems.map((item, index) => (
        <div
          key={index}
          className={`relative flex flex-col items-center justify-center text-gray-700 transition-all duration-300 cursor-pointer ${
            activeIndex === index ? "text-blue-600" : ""
          }`}
          onClick={() => setActiveIndex(index)} // Update active item on click
        >
          {/* Icon */}
          <item.icon
            className={`text-2xl mb-1 transition-all duration-300 ${
              activeIndex === index
                ? "transform scale-110 shadow-lg"
                : "hover:scale-105"
            }`}
          />

          {/* Label */}
          <span className="text-xs font-medium">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
