import React from "react";
import { FiSearch, FiUser } from "react-icons/fi";

export default function TopBar() {
  return (
    <div className="bg-gray-100 h-16 flex items-center justify-between sticky top-0 z-10 px-4">
      {/* Search Field */}
      <div className="flex items-center bg-white rounded-full px-3 py-2 flex-grow max-w-xs">
        <FiSearch className="text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search"
          className="outline-none text-gray-700 flex-grow"
        />
      </div>

      {/* User Icon */}
      <div className="ml-4 bg-white rounded-full h-10 w-10 flex items-center justify-center">
        <FiUser className="text-gray-500" size={20} />
      </div>
    </div>
  );
}
