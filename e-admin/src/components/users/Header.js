import React, { useState } from "react";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div className="bg-gray-800 p-4 col-start-1 col-end-2 md:col-start-2 md:col-end-2">
      <nav className="flex items-center justify-between px-4 py-3 bg-gray-500">
      <div className="flex items-center">
        <a href="#" className="text-white font-medium text-lg">My Website</a>
        <form className="ml-auto">
          <input className="bg-gray-700 rounded-full py-2 px-3 text-white focus:outline-none" type="text" placeholder="Search" />
        </form>
      </div>
      <div className="relative">
        <button onClick={() => setIsDropdownOpen(!isDropdownOpen)} className="bg-gray-700 rounded-full py-2 px-3 text-white focus:outline-none">
          <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </button>
        {isDropdownOpen && (
          <div className="absolute right-0 z-10 bg-gray-800 rounded-lg py-2">
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Menu 1</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Menu 2</a>
            <a href="#" className="block px-4 py-2 text-white hover:bg-gray-700">Menu 3</a>
          </div>
        )}
      </div>
    </nav>
     </div>
  );
}

export default Navbar;
