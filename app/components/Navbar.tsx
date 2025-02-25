"use client";

import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'Home', href: '#' },
    { label: 'Tokens', href: '#' },
    { label: 'Trading', href: '#' },
    { label: 'Documentation', href: '#' }
  ];

  return (
    <nav className="bg-gray-900 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

            <div className="flex-shrink-0 flex items-center">
                <span className="text-white font-bold text-xl">TokenHub</span>
            </div>

            <div className="ml-10 flex items-center space-x-4">
                {menuItems.map((item) => (
                <a
                    key={item.label}
                    href={item.href}
                    className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                    {item.label}
                </a>
                ))}a
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;