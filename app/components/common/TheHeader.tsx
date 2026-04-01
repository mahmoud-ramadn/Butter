"use client"; // Required for useState

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Import X for close icon
import Image from "next/image";

export default function TheHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const HeaderNavbar = [
    { id: 1, name: "Features" },
    { id: 2, name: "Use Cases" },
    { id: 3, name: "Templates" },
    { id: 4, name: "Pricing" },
    { id: 5, name: "Resources" },
    { id: 6, name: "Download" },
  ];

  const HeaderSocial = [
    { id: 1, name: "Book Demo" },
    { id: 2, name: "Sign in" },
    { id: 3, name: "Sign up for free" },
  ];

  // Helper to close menu when a link is clicked
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="bg-primary-200 py-5 relative">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-0">
        {/* Logo */}
        <Image src="/logo.svg" alt="Logo" width={100} height={100} />

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-4 text-lg">
            {HeaderNavbar.map((item) => (
              <li key={item.id}>
                <a href="#" className="hover:underline">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop Social/CTA */}
        <ul className="hidden md:flex gap-4 text-lg">
          {HeaderSocial.map((item) => (
            <li key={item.id}>
              <a
                href="#"
                className={
                  item.name === "Sign up for free"
                    ? "bg-gray-100/10 py-3 px-3 text-white rounded-xl"
                    : "text-gray-500 hover:text-gray-700"
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-primary-200 p-6 md:hidden shadow-lg z-50">
            {/* Mobile Navigation */}
            <nav className="mb-6">
              <ul className="flex flex-col gap-4 text-lg">
                {HeaderNavbar.map((item) => (
                  <li key={item.id}>
                    <a
                      href="#"
                      className="block hover:underline"
                      onClick={handleLinkClick}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Social/CTA */}
            <ul className="flex flex-col gap-4 text-lg border-t border-gray-600 pt-6">
              {HeaderSocial.map((item) => (
                <li key={item.id}>
                  <a
                    href="#"
                    className={
                      item.name === "Sign up for free"
                        ? "bg-gray-100/10 py-3 px-3 text-white rounded-xl inline-block w-full text-center"
                        : "text-gray-500 hover:text-gray-700 block"
                    }
                    onClick={handleLinkClick}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
