import React from "react";
import { bottomBarItems } from "../data/bottomBarData";

export default function BottomBar() {
  return (
    <div className="bg-white h-16 flex items-center justify-between px-8 sticky bottom-0 z-10 shadow-lg">
      {bottomBarItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center text-gray-700"
        >
          {/* Icon */}
          <item.icon className="text-2xl mb-1" />
          {/* Label */}
          <span className="text-xs">{item.name}</span>
        </div>
      ))}
    </div>
  );
}
