// App.jsx
import { useState } from 'react';
import ArtProcess from './components/ArtProcess';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'art':
        return <ArtProcess />;
      case 'about':
        return <AboutSection />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-gray-900">Carlo Dee</h1>
            </div>
            
            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => setCurrentSection('home')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'home'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setCurrentSection('art')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'art'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  Art Process
                </button>
                <button
                  onClick={() => setCurrentSection('about')}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    currentSection === 'about'
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  About
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setCurrentSection('home')}
                className="text-gray-700 hover:text-blue-600 px-3 py-2"
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
}

// Landing Page Component
const LandingPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Carlo Dee
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Anime-style Illustrator & Digital Artist
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto">
            Bringing characters to life through vibrant colors, expressive emotions, 
            and the unique charm of anime-inspired artistry.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.location.hash = 'art'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
            >
              View My Art Process
            </button>
            <button
              onClick={() => window.location.hash = 'about'}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors"
            >
              Learn About Me
            </button>
          </div>
        </div>

        {/* Featured Art Preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {['Character Design', 'Illustration', 'Concept Art'].map((category, index) => (
            <div
              key={category}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🎨</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{category}</h3>
              <p className="text-gray-500 text-sm">
                {index === 0 && 'Expressive character designs with unique personalities'}
                {index === 1 && 'Vibrant illustrations capturing emotional moments'}
                {index === 2 && 'Creative concepts bringing stories to life'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            About Carlo Dee
          </h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Image Placeholder */}
          <div className="order-2 lg:order-1">
            <div className="bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl aspect-square max-w-md mx-auto flex items-center justify-center">
              <span className="text-white text-6xl">🎨</span>
            </div>
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                Hello! I'm Carlo Dee, a passionate digital artist specializing in anime-style 
                illustrations. With over 5 years of experience in the digital art space, 
                I've developed a unique style that blends traditional anime aesthetics with 
                modern digital techniques.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">My Style</h2>
              <p className="text-gray-600 leading-relaxed">
                My art focuses on creating vibrant, emotionally resonant characters and scenes 
                that tell stories. I love exploring the balance between bold colors, dynamic 
                compositions, and the subtle expressions that bring characters to life.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Skills & Tools</h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Digital Illustration',
                  'Character Design',
                  'Color Theory',
                  'Composition',
                  'Clip Studio Paint',
                  'Photoshop',
                  'Procreate',
                  'Traditional Media'
                ].map((skill) => (
                  <div key={skill} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="pt-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get In Touch</h2>
              <div className="flex flex-wrap gap-4">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Commission Info
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-colors">
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;