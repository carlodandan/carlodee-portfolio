// components/home/Home.jsx
import './Home.css';

const Home = ({ onNavigate }) => {
  const backgroundStyle = {
    backgroundImage: `url('/img/other/hero-banner.webp')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed', // This helps with full coverage
  };

  return (
    <section 
      className="home-section flex items-center justify-center px-4 sm:px-6 lg:px-8 relative w-full"
      style={backgroundStyle}
    >
      {/* Dark overlay with blur */}
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm z-0"></div>
      
      <div className="max-w-4xl mx-auto text-center w-full relative z-10">
        {/* Hero Section */}
        <div className="flex flex-col items-center justify-center space-y-4 sm:space-y-6">
          <h1 className="home-title text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold">
            Carlo Dee
          </h1>
          <p className="home-subtitle text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl px-4">
            Anime-style Illustrator & Digital Artist
          </p>
          <p className="home-description text-base sm:text-lg text-gray-400 max-w-3xl px-4 sm:px-0">
            Bringing characters to life through vibrant colors, expressive emotions, 
            and the unique charm of anime-inspired artistry.
          </p>
          
          {/* CTA Buttons */}
          <div className="home-cta-container flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 w-full px-4 sm:px-0">
            <button
              onClick={() => onNavigate('art')}
              className="home-cta-primary w-full sm:w-auto bg-blue-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              View My Art Gallery
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="home-cta-secondary w-full sm:w-auto border-2 border-blue-400 text-blue-400 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:border-blue-300 hover:text-blue-300 transition-all duration-300 bg-transparent hover:bg-blue-900/20 hover:-translate-y-1"
            >
              Learn About Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;