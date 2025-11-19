// components/NavBar.jsx
import { useState } from 'react';

const NavBar = ({ currentSection, setCurrentSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (section) => {
    setCurrentSection(section);
    setIsMobileMenuOpen(false);
  };

  // Common button styles to match Home component
  const navButtonBase = "px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ease-in-out";
  const navButtonActive = "text-blue-400 bg-blue-900/50 shadow-lg";
  const navButtonInactive = "text-gray-300 hover:text-blue-400 hover:bg-slate-800";
  const navButtonHover = "hover:translate-y-[-2px] hover:shadow-xl";

  const mobileNavButtonBase = "w-full px-4 py-2 text-left text-sm font-medium transition-all duration-300 ease-in-out";
  const mobileNavButtonActive = "text-blue-400 bg-blue-900/50";
  const mobileNavButtonInactive = "text-gray-300 hover:text-blue-400 hover:bg-slate-700";
  const mobileNavButtonHover = "hover:translate-x-1";

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div 
              className="transition-all duration-300 hover:scale-105 cursor-pointer flex items-center"
              onClick={() => handleNavClick('home')}
            >
              <img 
                src="/icons/ms-icon-310x310.png" 
                alt="Carlo Dee Logo" 
                className="h-10 w-10 object-contain" // Adjust size as needed
              />
            </div>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:flex">
            <div className="ml-10 flex items-center gap-4">
              <button
                onClick={() => handleNavClick('home')}
                className={`
                  ${navButtonBase}
                  ${currentSection === 'home' ? navButtonActive : navButtonInactive}
                  ${navButtonHover}
                `}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('art')}
                className={`
                  ${navButtonBase}
                  ${currentSection === 'art' ? navButtonActive : navButtonInactive}
                  ${navButtonHover}
                `}
              >
                Art Gallery
              </button>
              <button
                onClick={() => handleNavClick('about')}
                className={`
                  ${navButtonBase}
                  ${currentSection === 'about' ? navButtonActive : navButtonInactive}
                  ${navButtonHover}
                `}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('commission')}
                className={`
                  ${navButtonBase}
                  ${currentSection === 'commission' ? navButtonActive : navButtonInactive}
                  ${navButtonHover}
                `}
              >
                Commission
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className={`
                  ${navButtonBase}
                  ${currentSection === 'contact' ? navButtonActive : navButtonInactive}
                  ${navButtonHover}
                `}
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden relative">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400 p-2 rounded-md transition-all duration-300 hover:translate-y-[-1px] focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label="Toggle mobile menu"
            >
              {/* Burger Icon */}
              <div className="w-6 h-6 flex flex-col justify-between">
                <span className={`w-full h-0.5 bg-gray-300 transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-300 transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-full h-0.5 bg-gray-300 transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
              </div>
            </button>

            {/* Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="absolute right-0 top-12 w-48 bg-slate-800/95 backdrop-blur-md rounded-md shadow-lg border border-slate-700 py-2 z-50">
                <button
                  onClick={() => handleNavClick('home')}
                  className={`
                    ${mobileNavButtonBase}
                    ${currentSection === 'home' ? mobileNavButtonActive : mobileNavButtonInactive}
                    ${mobileNavButtonHover}
                  `}
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick('art')}
                  className={`
                    ${mobileNavButtonBase}
                    ${currentSection === 'art' ? mobileNavButtonActive : mobileNavButtonInactive}
                    ${mobileNavButtonHover}
                  `}
                >
                  Art Gallery
                </button>
                <button
                  onClick={() => handleNavClick('about')}
                  className={`
                    ${mobileNavButtonBase}
                    ${currentSection === 'about' ? mobileNavButtonActive : mobileNavButtonInactive}
                    ${mobileNavButtonHover}
                  `}
                >
                  About
                </button>
                <button
                  onClick={() => handleNavClick('commission')}
                  className={`
                    ${mobileNavButtonBase}
                    ${currentSection === 'commission' ? mobileNavButtonActive : mobileNavButtonInactive}
                    ${mobileNavButtonHover}
                  `}
                >
                  Commission
                </button>
                <button
                  onClick={() => handleNavClick('contact')}
                  className={`
                    ${mobileNavButtonBase}
                    ${currentSection === 'contact' ? mobileNavButtonActive : mobileNavButtonInactive}
                    ${mobileNavButtonHover}
                  `}
                >
                  Contact
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;