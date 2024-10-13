import React from "react";

export default function Main() {
  return (
    <main className="w-full h-screen bg-gray-200 flex flex-col justify-between items-center">
      <div className="w-full sm:max-w-sm h-full flex flex-col">
        {/* Top Bar - Sticky */}
        <div className="bg-red-500 h-16 flex items-center justify-center sticky top-0 z-10">
          <span className="text-white">TOP BAR</span>
        </div>

        {/* Hero Section */}
        <div className="bg-green-500 h-24 flex items-center justify-center">
          <span className="text-white">HERO</span>
        </div>

        {/* Main Content */}
        <div className="bg-blue-500 flex-grow flex items-center justify-center">
          <span className="text-white">MAIN</span>
        </div>

        {/* Bottom Bar - Sticky */}
        <div className="bg-red-500 h-16 flex items-center justify-center sticky bottom-0 z-10">
          <span className="text-white">BOTTOM BAR</span>
        </div>
      </div>
    </main>
  );
}
