// components/navigation/NavBar.jsx
const NavBar = ({ currentSection, setCurrentSection }) => {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-gray-900">carlodee</h1>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center gap-6">
              <button
                onClick={() => setCurrentSection('home')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative ${
                  currentSection === 'home'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
                {/* Active underline */}
                {currentSection === 'home' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
                {/* Hover underline with glow */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </button>
              <button
                onClick={() => setCurrentSection('art')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  currentSection === 'art'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Art Gallery
                {/* Active underline */}
                {currentSection === 'art' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
                {/* Hover underline with glow */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </button>
              <button
                onClick={() => setCurrentSection('about')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  currentSection === 'about'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
                {/* Active underline */}
                {currentSection === 'about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
                {/* Hover underline with glow */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </button>
              <button
                onClick={() => setCurrentSection('commission')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  currentSection === 'commission'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Commission
                {/* Active underline */}
                {currentSection === 'commission' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
                {/* Hover underline with glow */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </button>
              <button
                onClick={() => setCurrentSection('contact')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 relative group ${
                  currentSection === 'contact'
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Contact
                {/* Active underline */}
                {currentSection === 'contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                )}
                {/* Hover underline with glow */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-400 rounded-full transition-all duration-300 opacity-0 group-hover:w-full group-hover:opacity-100 group-hover:shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setCurrentSection('home')}
              className="text-gray-700 hover:text-blue-600 px-4 py-2 rounded-md transition-colors"
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;