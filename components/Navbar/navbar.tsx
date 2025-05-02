"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { LogIn, Search, ShoppingCart, User, ChevronDown } from "lucide-react";
import Top from "./top";

const navItems = [
  { label: "Sunglasses", value: "home", link: "/", hasDropdown: true },
  { label: "Frame", value: "frame", link: "/destinations", hasDropdown: true },
  { label: "Clip on", value: "clip-on", link: "/packages", hasDropdown: true },
  { label: "Computer Glasses", value: "computer", link: "/about-us", hasDropdown: false },
];

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("home");

  return (
    <>
      <Top />
      <header>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <Image src="/Logo.png" alt="Logo" width={120} height={40} />
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link href={item.link} key={item.value}>
                <span
                  onClick={() => setActiveNav(item.value)}
                  className={`flex items-center gap-1 cursor-pointer text-sm font-medium hover:text-yellow-500 ${
                    activeNav === item.value ? "text-yellow-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && <ChevronDown size={16} />}
                </span>
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link href="/search">
              <Search className="text-gray-700 hover:text-yellow-600 cursor-pointer" />
            </Link>
            <Link href="/cart">
              <ShoppingCart className="text-gray-700 hover:text-yellow-600 cursor-pointer" />
            </Link>
            <Link href="/profile">
              <User className="text-gray-700 hover:text-yellow-600 cursor-pointer" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
