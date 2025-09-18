import React, { useState } from "react";
import { Menu, X, MoveRight } from "lucide-react";

interface NavItem {
  title: string;
  href?: string;
  items?: { title: string; href: string }[];
}

const navigationItems: NavItem[] = [
  { title: "Home", href: "#" },
  { title: "About Us", href: "#about" },
  { title: "Call for Papers", href: "#call-for-papers" },
  { title: "Camera Ready Submission", href: "#camera-ready" },
  { title: "Publication", href: "#publication" },
  { title: "Registration", href: "#registration" },
  { title: "Committees", href: "#committees" },
  { title: "Contact Us", href: "#contact" },
];

export const GlassNavbar: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  const handleNavClick = () => setOpen(false);

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/30 shadow-lg" role="banner">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold" aria-label="ICRAC 2026 Home">
          ICRAC 2026
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex gap-6" aria-label="Main navigation">
          {navigationItems.map((item) =>
            item.items ? (
              <div key={item.title} className="relative group">
                <button
                  className="font-medium hover:text-blue-600"
                  aria-haspopup="true"
                  aria-expanded="false"
                  tabIndex={0}
                >
                  {item.title}
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white/80 backdrop-blur-md rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
                  {item.items.map((sub) => (
                    <a
                      key={sub.title}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-blue-100"
                      tabIndex={0}
                      onClick={handleNavClick}
                    >
                      {sub.title}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                key={item.title}
                href={item.href}
                className="font-medium hover:text-blue-600"
                tabIndex={0}
                onClick={handleNavClick}
              >
                {item.title}
              </a>
            )
          )}
        </nav>

        {/* Right Buttons */}
        <div className="hidden lg:flex gap-4">
          <a
            href="#registration"
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            tabIndex={0}
            onClick={handleNavClick}
          >
            Register
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            tabIndex={0}
            onClick={handleNavClick}
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="lg:hidden bg-white/30 backdrop-blur-md shadow-lg w-full px-6 py-4 flex flex-col gap-3"
          aria-label="Mobile navigation"
        >
          {navigationItems.map((item) =>
            item.items ? (
              <div key={item.title} className="flex flex-col">
                <span className="font-medium">{item.title}</span>
                {item.items.map((sub) => (
                  <a
                    key={sub.title}
                    href={sub.href}
                    className="pl-4 py-1 hover:text-blue-600 flex justify-between items-center"
                    onClick={handleNavClick}
                  >
                    {sub.title} <MoveRight size={16} />
                  </a>
                ))}
              </div>
            ) : (
              <a
                key={item.title}
                href={item.href}
                className="font-medium py-2 hover:text-blue-600 flex justify-between items-center"
                onClick={handleNavClick}
              >
                {item.title} <MoveRight size={16} />
              </a>
            )
          )}
          <div className="flex gap-3 mt-3">
            <a
              href="#registration"
              className="flex-1 px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white text-center transition"
              onClick={handleNavClick}
            >
              Register
            </a>
            <a
              href="#contact"
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 text-center transition"
              onClick={handleNavClick}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};