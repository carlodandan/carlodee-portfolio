// App.jsx
import { useState } from 'react';
import ArtGallery from './components/gallery/ArtGallery';
import Home from './components/home/Home';
import About from './components/about/About';
import Commission from './components/commission/Commission';
import Contact from './components/contact/Contact';
import NavBar from './components/navigation/NavBar';
import './App.css';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'art':
        return <ArtGallery />;
      case 'about':
        return <About />;
      case 'commission':
        return <Commission />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={setCurrentSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-blue-900">
      {/* Navigation */}
      <NavBar currentSection={currentSection} setCurrentSection={setCurrentSection} />

      {/* Main Content */}
      <main className="pt-16">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;