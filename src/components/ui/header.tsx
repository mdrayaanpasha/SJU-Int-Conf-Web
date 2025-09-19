import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "HOME", href: "#" },
    { name: "ABOUT US", href: "#" },
    { name: "CALL FOR PAPERS", href: "#" },
    { name: "PUBLICATION", href: "#" },
    { name: "REGISTRATION", href: "#" },
    { name: "COMMITTEES", href: "/committees" },
    { name: "CONTACT", href: "#" },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl rounded-2xl backdrop-blur-xl bg-gray-900/30 border border-white/10 shadow-2xl shadow-purple-500/10">
      <div className="flex justify-between items-center px-6 py-3 md:px-10">
        {/* Logo */}
        <a
          href="#"
          className="text-lg md:text-2xl font-extrabold tracking-tight text-white flex items-center"
        >
          <div className="relative">
            <span className="relative z-10">ICRAC</span>
            <span className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 -rotate-2 z-0"></span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-white/90 transition-all duration-300 hover:text-blue-400 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* CTA (Desktop) */}
        <div className="hidden lg:flex">
          <a
            href="#"
            className="ml-6 px-5 py-2.5 bg-white text-gray-900 text-sm font-bold rounded-full shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-white/20"
          >
            SUBMIT PAPER
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-6 pb-6 pt-2 flex flex-col space-y-4 bg-gray-900/80 backdrop-blur-xl rounded-b-2xl animate-fadeIn">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-white/90 text-base font-medium transition-all duration-300 hover:text-blue-400 py-2 px-4 rounded-lg hover:bg-white/5"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#"
            className="mt-4 px-5 py-3 bg-white text-gray-900 font-bold rounded-full text-center shadow-lg transition-all duration-300 hover:scale-105"
            onClick={() => setIsOpen(false)}
          >
            SUBMIT PAPER
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
