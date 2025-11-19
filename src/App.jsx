// App.jsx
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import ArtGallery from './components/gallery/ArtGallery';
import Home from './components/home/Home';
import About from './components/about/About';
import Commission from './components/commission/Commission';
import Contact from './components/contact/Contact';
import NavBar from './components/navigation/NavBar';
import './App.css';

// Component to handle navigation sync
function NavigationHandler({ setCurrentSection }) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Extract section from pathname and remove leading slash
    const section = location.pathname.substring(1) || 'home';
    setCurrentSection(section);
  }, [location.pathname, setCurrentSection]);

  return null;
}

// Main app content
function AppContent() {
  const [currentSection, setCurrentSection] = useState('home');
  const navigate = useNavigate();

  // Handle navigation from components
  const handleNavigate = (section) => {
    setCurrentSection(section);
    navigate(`/${section}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900 flex flex-col items-center">
      {/* Navigation Handler */}
      <NavigationHandler setCurrentSection={setCurrentSection} />
      
      {/* Navigation */}
      <NavBar currentSection={currentSection} setCurrentSection={handleNavigate} />

      {/* Main Content */}
      <main className="pt-0 w-full max-w-7xl flex-1 flex flex-col items-center">
        <Routes>
          <Route path="/" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/home" element={<Home onNavigate={handleNavigate} />} />
          <Route path="/art" element={<ArtGallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/commission" element={<Commission />} />
          <Route path="/contact" element={<Contact />} />
          {/* Fallback route */}
          <Route path="*" element={<Home onNavigate={handleNavigate} />} />
        </Routes>
      </main>
    </div>
  );
}

// Main App component with Router
function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;