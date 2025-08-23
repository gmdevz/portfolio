"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Contact", href: "contact" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }, // 60% in view = active
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo / Name */}
        <Link href="#home" className="font-bold text-lg text-blue-600">
          MyPortfolio
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              className={`relative font-medium transition-colors duration-200
                ${
                  active === link.href
                    ? "text-blue-600 after:w-full"
                    : "text-gray-700 dark:text-gray-200 after:w-0"
                }
                after:absolute after:left-0 after:-bottom-1 after:h-[2px] 
                after:bg-blue-600 after:transition-all after:duration-300
                hover:text-blue-600 hover:after:w-full`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md">
          {links.map((link) => (
            <a
              key={link.name}
              href={`#${link.href}`}
              onClick={() => setOpen(false)}
              className={`block px-4 py-2 ${
                active === link.href
                  ? "text-blue-600 font-semibold"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
