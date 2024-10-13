import React from "react";
import { main } from "../data/mainData"; // Importing the data

export default function MainMenu() {
  return (
    <div className="bg-gray-100 p-4 flex-grow">
      <h2 className="text-xl font-bold mb-4">Main Menu</h2>

      {/* 3-column grid layout */}
      <div className="grid grid-cols-3 gap-4">
        {main.map((main, index) => (
          <div
            key={index}
            className="relative bg-white shadow-md rounded-lg p-3 flex flex-col items-center justify-center"
          >
            {/* Icon */}
            <main.icon className="text-3xl text-gray-600 mb-2" />

            {/* Name */}
            <span className="text-sm font-medium text-gray-700">
              {main.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
