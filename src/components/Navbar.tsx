import { Menu, X, Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    // { href: "#home", text: "Home" },
    { href: "#about", text: "About" },
    { href: "#events", text: "Events" },
    { href: "#members", text: "Members" },
    { href: "#resources", text: "Resources" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a className="flex items-center hover:bg-gray-400 rounded p-2" href='/'>
            <Lightbulb className="h-8 w-8 text-indigo-600" />
            <span className="hidden ml-2 text-xl font-bold text-gray-900 lg:block">Entreprenuership Development Cell</span>
            <span className="block ml-2 text-xl font-bold text-gray-900 lg:hidden">Ed Cell</span>
          </a>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:bg-gray-200 rounded py-2 px-3 text-gray-900 hover:text-indigo-600 transition-colors"
                >
                  {item.text}
                </a>
              ))}
              <button 
                onClick={onLoginClick}
                className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors"
              >
                Sign In
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-900 hover:text-indigo-600"
              >
                {item.text}
              </a>
            ))}
            <button 
              onClick={onLoginClick}
              className="w-full text-left px-3 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}