"use client"; // This marks the component as a client component

import React, { useState, useEffect } from "react";
import { heroData } from "../data/heroData";
import Image from "next/image";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through the slides every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroData.length);
    }, 3000);
    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="p-4 w-full max-w-sm mx-auto bg-white shadow-md">
      {" "}
      {/* Container without rounded corners */}
      <div className="relative w-full max-w-sm overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {heroData.map((slide, index) => (
            <div key={index} className="relative min-w-full">
              {/* Image with overlay */}
              <Image
                src={slide.image}
                alt={slide.title}
                className="object-cover rounded-lg w-full h-44"
                width={300}
                height={176}
              />

              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>

              {/* Title and Description positioned at bottom left */}
              <div className="absolute bottom-4 left-4 text-left w-full px-2">
                {/* Title */}
                <h2 className="text-white text-xl font-bold">{slide.title}</h2>

                {/* Description with max width and two lines */}
                <p className="text-white mt-1 max-w-[275px]">{slide.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots for the slider */}
        <div className="flex justify-center mt-4">
          {heroData.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                currentIndex === index ? "bg-gray-800" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
