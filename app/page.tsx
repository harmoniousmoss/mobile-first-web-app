import React from "react";
import TopBar from "./components/TopBar";
import Hero from "./components/Hero";
import MainContent from "./components/MainContent";
import BottomBar from "./components/BottomBar";

export default function Main() {
  return (
    <main className="w-full h-screen bg-gray-200 flex flex-col justify-between items-center">
      <div className="w-full sm:max-w-sm h-full flex flex-col">
        {/* Top Bar */}
        <TopBar />

        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <MainContent />

        {/* Bottom Bar */}
        <BottomBar />
      </div>
    </main>
  );
}
